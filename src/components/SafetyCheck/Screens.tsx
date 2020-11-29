import {
  Grid,
  Typography,
  ButtonGroup,
  Button,
  Slider,
} from "@material-ui/core";
import React from "react";
import { useStyles } from ".";

export const Screen1 = ({ onClick }) => {
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

export const Screen2 = ({ onClick }) => {
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
          <Button variant="outlined" onClick={onClick}>
            Ja, durch
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export const Screen3 = ({ onClick }) => {
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

export const Screen4 = ({ onClick }) => {
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
