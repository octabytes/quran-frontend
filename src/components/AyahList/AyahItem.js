import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  itemLTR: {
    padding: theme.spacing(4),
  },
  itemRTL: {
    padding: theme.spacing(4),
    direction: "rtl",
  },
}));

const AyahItem = ({ ayah }) => {
  const language = useSelector((state) => state.app.language);
  const classes = useStyles();

  const textDirection =
    language === "english" ? classes.itemLTR : classes.itemRTL;
  const text =
    language === "english" ? ayah.content.english : ayah.content.urdu;

  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container>
        <Grid className={textDirection} item xs={6}>
          ({ayah.number}) - {text}
        </Grid>
        <Grid className={classes.itemRTL} item xs={6}>
          ({ayah.number}) - {ayah.content.arabic}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AyahItem;
