import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import surahList from "./surah_list";

const SurahMenu = () => {
  const [surahMenu, setSurahMenu] = useState(null);
  const [surah, setSurah] = useState(
    `${surahList[0].number}. ${surahList[0].english_name} ${surahList[0].arabic_name}`
  );

  const selectSurah = (surah) => {
    setSurah(`${surah.number}. ${surah.english_name} ${surah.arabic_name}`);
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
