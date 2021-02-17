import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SurahMenu from "./SurahMenu";
import LanguageMenu from "./LanguageMenu";

export default function ButtonAppBar() {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">QURAN</Typography>

          <LanguageMenu />
          <SurahMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}
