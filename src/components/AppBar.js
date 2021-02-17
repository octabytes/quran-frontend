import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const [surahMenu, setSurahMenu] = useState(null);
  const [surah, setSurah] = useState("1. Al-Faatiha");
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            QURAN
          </Typography>
          <Button color="inherit">{surah}</Button>
          <Menu
            id="simple-menu"
            anchorEl={surahMenu}
            keepMounted
            open={Boolean(surahMenu)}
            onClose={() => setSurahMenu(null)}
          >
            <MenuItem onClick={(e) => setSurahMenu(e.currentTarget)}>
              Profile
            </MenuItem>
            <MenuItem onClick={(e) => setSurahMenu(e.currentTarget)}>
              My Account
            </MenuItem>
            <MenuItem onClick={(e) => setSurahMenu(e.currentTarget)}>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
