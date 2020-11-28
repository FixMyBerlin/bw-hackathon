import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const useStyles = makeStyles({
  wrapper: {
    paddingTop: "3em",
  },
  circle: {
    boxShadow: "-1px 0px 6px 1px rgba(0, 0, 0, 0.3)",
  },
  ctaWrapper: {
    paddingTop: "2em !important",
    "text-align": "center",
    borderTop: "1px dashed #ccc",
  },
  hasDivider: {
    borderTop: "1px dashed #ccc",
  },
});

const OverviewPanel = ({ rating, gid, gemeinde }) => {
  const classes = useStyles();

  return (
    <Grid container item alignItems="center" className={classes.wrapper}>
      <Grid item xs={4}>
        <Typography variant="caption">
          <strong>Abschnitt {gid}</strong>
        </Typography>
        <Typography variant="caption" component="div" color="textSecondary">
          {gemeinde}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Box position="relative" display="inline-flex">
          <CircularProgress
            variant="determinate"
            value={rating}
            size={64}
            classes={{ circle: classes.circle }}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="button"
              component="div"
              color="textPrimary"
            >{`${Math.round(23)}%`}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="caption" component="div" color="textSecondary">
          der Daten erfasst
        </Typography>
      </Grid>
    </Grid>
  );
};

const StartScreen = ({ onClick }) => {
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
          Übergeordnetes Radnetz
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
      <Grid item xs={12} justify="center" className={classes.ctaWrapper}>
        <Button color="primary" variant="contained" onClick={onClick}>
          Daten verbessern
        </Button>
      </Grid>
    </Grid>
  );
};

const Section = ({ gid, onClick, gemeinde, ...features }) => {
  const classes = useStyles();
  const [screen, setScreen] = useState(0);
  const [rating, setRating] = useState(23);
  return (
    <React.Fragment>
      <OverviewPanel rating={rating} gemeinde={gemeinde} gid={gid} />
      {screen == 0 && <StartScreen onClick={() => setScreen(screen + 1)} />}
    </React.Fragment>
  );
};

export default Section;
