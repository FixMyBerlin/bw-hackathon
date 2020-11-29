import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  abs: {
    width: "100%",
  },
  box1: {
    textAlign: "center",
  },
});

const ResultScreen = ({ gid }) => {
  const classes = useStyles();
  return (
    <Box>
      <Card>
        <CardContent>
          <h3>Abschnitt {gid}</h3>
          <small>Blumenstraße</small>
          <br />
          <small>3 km</small>
        </CardContent>
        <CardMedia image={"public/01_MS_C_17.jpg"} title="Strassenszene" />
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <img src="public/abs.png" className={classes.abs} />
            </Grid>
            <Grid item xs={6} className="box1">
              <Box position="relative" display="inline-flex">
                <CircularProgress variant="determinate" value={69} size={64} />
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default ResultScreen;
