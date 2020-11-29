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
import { getNetworkName } from "./radnetz-utils";

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

const getPadding = (pad = 100) => ({
  top: pad,
  left: pad,
  bottom: pad,
  right: 440 + pad,
});
const highlightSection = (map: mapboxgl.Map, sectionId: number | null) => {
  if (sectionId == null) {
    map.setFilter(config.highlightLayer, null);
    map.setLayoutProperty(config.highlightLayer, "visibility", "none");
  } else {
    map.setFilter(config.highlightLayer, ["==", ["get", "gid"], sectionId]);
    map.setLayoutProperty(config.highlightLayer, "visibility", "visible");
  }
};

const popup = new mapboxgl.Popup({
  closeButton: false,
});

const App = () => {
  const classes = useStyles();
  const [map, setMap] = useState<null | mapboxgl.Map>(null);
  const [
    selected,
    setSelected,
  ] = useState<null | mapboxgl.MapboxGeoJSONFeature>();

  const getFeaturesAt = (point: Point) => {
    const bbox: [PointLike, PointLike] = [
      [point.x - 5, point.y - 5],
      [point.x + 5, point.y + 5],
    ];
    return map.queryRenderedFeatures(bbox, {
      layers: [config.routeLayer],
    });
  };

  const getFeatureAt = (point: Point) => {
    const features = getFeaturesAt(point);
    if (!features.length) return;
    return features[0];
  };

  //
  // Configure map view
  //
  useEffect(() => {
    if (map == null) return;
    map.fitBounds(config.mapbox.bounds, {
      padding: getPadding(),
      linear: true,
    });
    map.on("mousemove", (e) => {
      const feature = getFeatureAt(e.point);
      map.getCanvas().style.cursor = feature ? "pointer" : "";
      if (!feature) {
        popup.remove();
        if (selected) {
          highlightSection(map, selected.properties.gid);
        } else {
          highlightSection(map, null);
        }
        return;
      }
      highlightSection(map, feature.properties.gid);
      popup
        .setLngLat(e.lngLat)
        .setText(
          `${getNetworkName(feature.properties.lrvn_kat)} - Abschnitt ${
            feature.properties.gid
          }`
        )
        .addTo(map);
    });
    map.on("click", ({ point }) => {
      setSelected(getFeatureAt(point));
    });
  }, [map]);

  //
  // Fit view when selected feature changes
  //
  useEffect(() => {
    if (!map) return;
    if (!selected) {
      highlightSection(map, null);
      return;
    }
    // @ts-ignore
    const coords = selected.geometry?.coordinates;
    const bounds = coords.reduce(
      (bounds: mapboxgl.LngLatBounds, coord: mapboxgl.LngLatBoundsLike) =>
        bounds.extend(coord),
      new mapboxgl.LngLatBounds(coords[0], coords[0])
    );
    highlightSection(map, selected.properties.gid);
    map.fitBounds(bounds, { padding: getPadding(200) });
  }, [map, selected]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.root}>
        <MapView onInit={setMap} />
        <div className={classes.dummy}></div>
        <DetailPanel
          feature={selected}
          onClose={() => {
            setSelected(null);
            map.fitBounds(config.mapbox.bounds, { padding: getPadding() });
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default App;
