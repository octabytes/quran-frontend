import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getAyahListBySurah } from "api/quran";
import QuranActions from "store/actions/quran_actions";
import AyahItem from "./AyahItem";
import Pagination from "./Pagination";

const AyahList = () => {
  const surahNumber = useSelector((state) => state.app.surah);

  const surah = useSelector((state) => state.quran[surahNumber]);
  const loadSurahData = async () => {
    if (!surah) {
      const search = window.location.search;
      let offset = 0;
      if (search.length) {
        offset = parseInt(search.replace("?offset=", ""));
      }

      const response = await getAyahListBySurah(surahNumber, offset);
      if (!response.error) {
        QuranActions.loadSurahData(surahNumber, response.ayahs);
      } else {
        console.error(response.error.message);
      }
    }
  };

  useEffect(() => {
    loadSurahData();
  }, [surahNumber]);

  if (!surah) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ margin: 16 }}>
      {surah.map((ayah) => (
        <AyahItem key={ayah.number} ayah={ayah} />
      ))}

      <Pagination />
    </div>
  );
};

export default AyahList;
