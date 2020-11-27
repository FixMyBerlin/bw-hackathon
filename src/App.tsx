import React, { useEffect } from "react";
import {
  Box,
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import MapView from "./components/MapView";
import DetailPanel from "./components/DetailPanel";
import config from "./config";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },
  dummy: {
    width: "100%",
  },
});

let theme = createMuiTheme({});
theme = responsiveFontSizes(theme);

const getPadding = (panelOpen: boolean) => ({
  top: 100,
  left: 100,
  bottom: 100,
  right: panelOpen ? 340 : 100,
});

const App = () => {
  const classes = useStyles();
  const [panelOpen, setPanelOpen] = useState(true);
  const [map, setMap] = useState<null | mapboxgl.Map>(null);

  useEffect(() => {
    if (map == null) return;
    map.fitBounds(config.mapbox.bounds, {
      padding: getPadding(panelOpen),
      linear: true,
    });
  }, [map]);

  useEffect(() => {
    if (map == null) return;
    map.setPadding(getPadding(panelOpen));
  }, [panelOpen]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.root}>
        <MapView onInit={setMap} />
        <div className={classes.dummy}></div>
        <DetailPanel
          open={panelOpen}
          onClose={() => {
            setPanelOpen(!panelOpen);
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
