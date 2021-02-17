import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AppActions from "store/actions/app_actions";

const LanguageMenu = () => {
  const [languageMenu, setLanguageMenu] = useState(null);
  const [language, setLanguage] = useState("English");

  const selectLanguage = (language) => {
    AppActions.selectLanguage(language);
    setLanguage(language);
    setLanguageMenu(null);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <Button
        color="inherit"
        onClick={(e) => setLanguageMenu(e.currentTarget)}
        endIcon={<ExpandMoreIcon />}
      >
        {language}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={languageMenu}
        keepMounted
        open={Boolean(languageMenu)}
        onClose={() => setLanguageMenu(null)}
      >
        <MenuItem onClick={() => selectLanguage("english")}>English</MenuItem>
        <MenuItem onClick={() => selectLanguage("urdu")}>Urdu</MenuItem>
      </Menu>
    </div>
  );
};

export default LanguageMenu;
