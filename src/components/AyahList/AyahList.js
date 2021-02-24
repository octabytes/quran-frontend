import React, { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { withRouter } from "react-router-dom";

import { getAyahListBySurah } from "api/quran";
import QuranActions from "store/actions/quran_actions";
import AyahItem from "./AyahItem";
import Pagination from "./Pagination";

const AyahList = (props) => {
  const search = props.location.search;
  const surahNumber = useSelector((state) => state.app.surah);

  let offset = 0;
  if (search.length) {
    offset = parseInt(search.replace("?offset=", ""));
  }

  const surah = useSelector((state) => {
    if (state.quran[surahNumber]) {
      return state.quran[surahNumber][offset];
    }

    return undefined;
  });

  const loadSurahData = async () => {
    if (!surah) {
      const response = await getAyahListBySurah(surahNumber, offset);
      if (!response.error) {
        QuranActions.loadSurahData(surahNumber, offset, response.ayahs);
      } else {
        console.error(response.error.message);
      }
    }
  };

  useEffect(() => {
    loadSurahData();
  }, [surahNumber, search]);

  if (!surah) {
    return <h1>Loading...</h1>;
  }

  if (!surah.length) {
    return <h1>Surah Complete, no more Ayahs</h1>;
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

export default withRouter(AyahList);
