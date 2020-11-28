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
import { Point, PointLike } from "mapbox-gl";
import mapboxgl from "mapbox-gl";

interface Section {
  gid: number;
  lrvn_kat: 1 | 3 | 4 | 6;
  licht: string;
}

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

const popup = new mapboxgl.Popup({
  closeButton: false,
});

const getNetworkName = (nid: number) =>
  ({
    1: "Freizeitnetz",
    3: "Alltagsnetz",
    4: "Zielnetz",
    6: "Alltag/Freizeit-Netz",
  }[nid]);

const App = () => {
  const classes = useStyles();
  const [panelOpen, setPanelOpen] = useState(true);
  const [map, setMap] = useState<null | mapboxgl.Map>(null);
  const [
    selected,
    setSelected,
  ] = useState<null | mapboxgl.MapboxGeoJSONFeature>();

  const getFeaturesAt = (point) => {
    const bbox: [PointLike, PointLike] = [
      [point.x - 2, point.y - 2],
      [point.x + 2, point.y + 2],
    ];
    return map.queryRenderedFeatures(bbox, {
      layers: [config.routeLayer],
    });
  };

  const getFeatureAt = (point) => {
    const features = getFeaturesAt(point);
    if (!features.length) return;
    return features[0];
  };

  useEffect(() => {
    if (map == null) return;
    map.fitBounds(config.mapbox.bounds, {
      padding: getPadding(panelOpen),
      linear: true,
    });
    map.on("mousemove", (e) => {
      const feature = getFeatureAt(e.point);
      map.getCanvas().style.cursor = feature ? "pointer" : "";
      if (!feature) {
        popup.remove();
        return;
      }

      popup
        .setLngLat(e.lngLat)
        .setText(getNetworkName(feature.properties.lrvn_kat))
        .addTo(map);
    });
    map.on("click", config.routeLayer, ({ point }) =>
      setSelected(getFeatureAt(point))
    );
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
          feature={selected}
          onClose={() => {
            setPanelOpen(!panelOpen);
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
