import React from "react";
import MapView from "./MapView";
import DetailPanel from "./DetailPanel";
import CssBaseline from "@material-ui/core/CssBaseline";
import config from "./config";
import {
  Box,
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },
});

let theme = createMuiTheme({});
theme = responsiveFontSizes(theme);

const initMap = (map: mapboxgl.Map) => {
  map.fitBounds(config.mapbox.bounds, { padding: 100, linear: true });
};

const App = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.root}>
        <MapView onInit={initMap} />
        <DetailPanel />
      </Box>
    </ThemeProvider>
  );
};

export default App;
