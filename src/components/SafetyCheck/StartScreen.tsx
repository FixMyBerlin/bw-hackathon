import { Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { getNetworkName } from "~/radnetz-utils";
import { useStyles } from ".";

const StartScreen = ({ onClick, gid, gemeinde, ...features }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      className={classes.wrapper}
      spacing={2}
    >
      <Grid container item className={classes.hasDivider}>
        <Grid item xs={6}>
          <Typography variant="caption">
            <strong>Radnetz</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {getNetworkName(features.lrvn_kat)}
        </Grid>
      </Grid>
      <Grid container item className={classes.hasDivider}>
        <Grid item xs={6}>
          <Typography variant="caption">
            <strong>Straßenklasse</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          Hauptverkehrsstraße
        </Grid>
      </Grid>
      <Grid container item className={classes.hasDivider}>
        <Grid item xs={6}>
          <Typography variant="caption">
            <strong>Lage</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          Innerorts
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.ctaWrapper}>
        <Button color="primary" variant="contained" onClick={onClick}>
          Daten verbessern
        </Button>
      </Grid>
    </Grid>
  );
};

export default StartScreen;
