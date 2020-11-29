import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";

const useStyles = makeStyles({
  card: {
    border: "none",
    boxShadow: "none",
  },
  abs: {
    width: "100%",
  },
  box1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 170,
  },
  feelSafeCircle: {
    color: "#abc759",
  },
  caption: {
    fontWeight: "bold",
  },
  ratingLabel: {
    color: "#545454",
    fontSize: 12,
    textAlign: "center",
  },
  featureList: {
    "& div": {
      borderBottom: "1px dashed #ccc",
    },
  },
});

const ResultScreen = ({ gid, onClose }) => {
  const classes = useStyles();
  return (
    <Box height={"100%"} overflow="scroll">
      <Card classes={{ root: classes.card }}>
        <CardContent>
          <h3>Abschnitt {gid}</h3>
          <small>Blumenstraße</small>
          <br />
          <small>210 Meter</small>
        </CardContent>
        <CardMedia
          image={"public/01_MS_C_17.jpg"}
          title="Strassenszene"
          className={classes.image}
        />
        <CardContent>
          <Grid container>
            <Grid item container justify="center" xs={6}>
              <Typography
                component="legend"
                variant="caption"
                className={classes.caption}
              >
                RadNETZ-Check
              </Typography>
              <Rating name="customized-10" defaultValue={3} max={3} />
              <Typography variant="body1" className={classes.ratingLabel}>
                Zielstandard im Alltagsnetz erfüllt
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              container
              justify="center"
              className={classes.box1}
            >
              <Typography
                component="legend"
                variant="caption"
                className={classes.caption}
              >
                Feel-Safe-Index
              </Typography>
              <Box position="relative" display="inline-flex" mt={2}>
                <CircularProgress
                  variant="determinate"
                  value={69}
                  size={64}
                  classes={{ circle: classes.feelSafeCircle }}
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
                  >{`${Math.round(69)}%`}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <h1>Infrastrukturdaten</h1>
          <Box className={classes.featureList}>
            <div>
              <strong>Führung:</strong> Auf der Fahrbahn
            </div>
            <div>
              <strong>Typ:</strong> Radfahrstreifen
            </div>
            <div>
              <strong>Parken:</strong> Nein
            </div>
            <div>
              <strong>Baul. Trennung:</strong> keine
            </div>
            <div>
              <strong>Breite:</strong> 3,5 Meter
            </div>
            <div>
              <strong>Oberfläche:</strong> Asphalt grau
            </div>
          </Box>

          <Box className={classes.featureList}>
            <div>
              <strong>Straßenklasse:</strong> Hauptstraße
            </div>
            <div>
              <strong>Lage:</strong> Innerorts
            </div>
            <div>
              <strong>Tempolimit:</strong> 50 km/h
            </div>
            <div>
              <strong>Verkehrsstärke:</strong> 7.000 Kfz/Tag
            </div>
            <div>
              <strong>Radverkehrsstärke:</strong>
            </div>
          </Box>
          <h1>Komfortlevel</h1>
          <Box mb={2}>
            <Rating value={4} readOnly />
          </Box>
          <Box className={classes.featureList}>
            <div>
              <strong>Zustand:</strong> Guter Zustand
            </div>
            <div>
              <strong>Steigung:</strong> 2%
            </div>
          </Box>

          <h1>Vision-Zero-Check</h1>

          <Box className={classes.featureList}>
            <div>
              <strong>Tödliche Unfälle:</strong> 0
            </div>
            <div>
              <strong>Schwere Unfälle:</strong> 1
            </div>
            <div>
              <strong>Leichte Unfälle:</strong> 1
            </div>
          </Box>

          <p>Daten aus 2017-2020</p>

          <Button color="primary" variant="outlined" onClick={onClose}>
            weitere Abschnitte bewerten
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ResultScreen;
