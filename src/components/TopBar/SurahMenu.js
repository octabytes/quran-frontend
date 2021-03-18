import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

import surahList from "./surah_list";
import AppActions from "store/actions/app_actions";

const SurahMenu = ({ surahNumber }) => {
  const history = useHistory();
  const [surahMenu, setSurahMenu] = useState(null);
  const [surah, setSurah] = useState(
    `${surahList[surahNumber].number}. ${surahList[surahNumber].english_name} ${surahList[surahNumber].arabic_name}`
  );

  useEffect(() => {
    setSurah(
      `${surahList[surahNumber].number}. ${surahList[surahNumber].english_name} ${surahList[surahNumber].arabic_name}`
    );
  }, [surahNumber]);

  const selectSurah = (surah) => {
    history.push(`/${surah.number}`);
    setSurahMenu(null);
  };

  return (
    <>
      <Button
        color="inherit"
        onClick={(e) => setSurahMenu(e.currentTarget)}
        endIcon={<ExpandMoreIcon />}
      >
        {surah}
      </Button>
      <Menu
        id="surah-menu"
        anchorEl={surahMenu}
        keepMounted
        open={Boolean(surahMenu)}
        onClose={() => setSurahMenu(null)}
      >
        {surahList.map((surah) => (
          <MenuItem key={surah.number} onClick={() => selectSurah(surah)}>
            {surah.number}. {surah.english_name} {surah.arabic_name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SurahMenu;
