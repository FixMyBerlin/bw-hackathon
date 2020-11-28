import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Slider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import ResultScreen from "./ResultScreen";

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
  questionHeader: {
    margin: "1em 0",
  },
  sliderRoot: {
    marginTop: "2em",
    marginLeft: "2em",
    width: "80%",
  },
  sliderLabel: { transform: "scale(1.2)" },
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
            >{`${Math.round(rating)}%`}</Typography>
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

const Screen1 = ({ onClick }) => {
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
            <strong>Führung</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          Auf der Fahrbahn
        </Grid>
      </Grid>
      <Grid item className={classes.hasDivider}>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.questionHeader}
        >
          Wie ist der Radstreifen markiert?
        </Typography>
        <ButtonGroup orientation="vertical" fullWidth color="primary">
          <Button variant="outlined" onClick={onClick}>
            gestrichelte Linie
          </Button>
          <Button variant="outlined" onClick={onClick}>
            durchgezogene Linie
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

const Screen2 = ({ onClick, onAltClick }) => {
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
            <strong>Führung</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          Auf der Fahrbahn
        </Grid>
      </Grid>
      <Grid item className={classes.hasDivider}>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.questionHeader}
        >
          Ist der Radstreifen von den Autos baulich getrennt?
        </Typography>
        <ButtonGroup orientation="vertical" fullWidth color="primary">
          <Button variant="outlined" onClick={onClick}>
            Nein
          </Button>
          <Button variant="outlined" onClick={onAltClick}>
            Ja, durch
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

const Screen3 = ({ onClick }) => {
  const classes = useStyles();
  const valuetext = (value: number) =>
    `${(value / 100).toLocaleString("de-DE")}m`;
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
            <strong>Radverkehrsanlage</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          Radfahrstreifen ohne bauliche Trennung
        </Grid>
      </Grid>
      <Grid item className={classes.hasDivider}>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.questionHeader}
        >
          Wie breit ist der Radweg ca.?
        </Typography>
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelFormat={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={10}
          marks
          min={50}
          max={250}
          classes={{
            root: classes.sliderRoot,
            valueLabel: classes.sliderLabel,
          }}
        />
        <ButtonGroup orientation="vertical" fullWidth color="primary">
          <Button variant="outlined" onClick={onClick}>
            Weiter
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

const Screen4 = ({ onClick }) => {
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
            <strong>Führung</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          Auf der Fahrbahn
        </Grid>
      </Grid>
      <Grid item className={classes.hasDivider}>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.questionHeader}
        >
          Ist ein Parkstreifen für Autos vorhanden?
        </Typography>
        <ButtonGroup orientation="vertical" fullWidth color="primary">
          <Button variant="outlined" onClick={onClick}>
            Ja, rechts vom Radstreifen
          </Button>
          <Button variant="outlined" onClick={onClick}>
            Ja, links vom Radstreifen
          </Button>
          <Button variant="outlined" onClick={onClick}>
            Kein KFZ-Parken
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

const FinalScreen = ({ onClick }) => {
  return (
    <Box mt={2}>
      {/* <h1>Blumenstraße</h1>
      <h2>Subjektive Sicherheit 78%</h2>
      <h2>Ausbaustandard Qualität</h2>
      <p>80% Schutzstreifen</p>
      <p>Kein Radweg vorhanden</p>
      <p>Ard der Straße</p>
      <h2>Sicherheit</h2>
      <h2>Zustand und Komfort</h2> */}
      <h1>Vielen Dank!</h1>
      <p>
        Sie haben alle fehlenden Daten eingetragen, so dass die subjektive
        Sicherheit dieses Abschnitts berechnet werden kann.
      </p>
      <Button variant="contained" onClick={onClick}>
        Ergebnis ansehen
      </Button>
    </Box>
  );
};

const Section = ({ gid, gemeinde, ...features }) => {
  const [screen, setScreen] = useState(0);
  const [rating, setRating] = useState(23);
  const [showResult, setShowResult] = useState(false);
  console.log(features);

  if (showResult) return <ResultScreen gid={gid} {...features} />;
  return (
    <React.Fragment>
      <OverviewPanel rating={rating} gemeinde={gemeinde} gid={gid} />
      {screen == 0 && <StartScreen onClick={() => setScreen(screen + 1)} />}
      {screen == 1 && (
        <Screen1
          onClick={() => {
            setScreen(screen + 1);
            setRating(45);
          }}
        />
      )}
      {screen == 2 && (
        <Screen2
          onClick={() => {
            setScreen(screen + 2);
            setRating(89);
          }}
          onAltClick={() => {
            setScreen(screen + 1);
            setRating(53);
          }}
        />
      )}
      {screen == 3 && (
        <Screen3
          onClick={() => {
            setScreen(screen + 1);
            setRating(89);
          }}
        />
      )}
      {screen == 4 && (
        <Screen4
          onClick={() => {
            setScreen(screen + 1);
            setRating(100);
          }}
        />
      )}
      {screen == 5 && (
        <FinalScreen
          onClick={() => {
            setRating(23);
            setShowResult(true);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Section;
