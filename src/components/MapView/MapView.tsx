import React, { useState, useRef, useEffect } from "react";
import MapboxGL from "mapbox-gl";
import debug from "debug";

import config from "~/config";
import { Box, makeStyles, RootRef } from "@material-ui/core";
import directions from "~/services/directions";

const logger = debug("hackathon:mapview");

const useStyles = makeStyles({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

interface Props extends Partial<MapboxGL.MapboxOptions> {
  onInit?: (arg0: MapboxGL.Map) => void;
  center?: MapboxGL.LngLat;
  zoom?: number;
  onRoute: any;
}

const initMap = ({
  setMap,
  mapContainer,
  onInit,
  center,
  zoom,
  onRoute,
  mapboxProps,
}) => {
  const mapboxConfig = {
    container: mapContainer.current,
    ...config.mapbox,
    ...mapboxProps,
  };
  const map = new MapboxGL.Map(mapboxConfig);

  logger("Init map with", mapboxConfig);

  map.on("load", () => {
    logger("Map loaded");
    setMap(map);
    map.resize();
    map.addControl(directions, "top-left");
    directions.mapState();
    directions.setOrigin("Ritterstraße 1, 73728 Esslingen am Neckar, Germany");
    directions.setDestination(
      "Adlerstraße 1, 73728 Esslingen am Neckar, Germany"
    );
    map.on("click", "directions-route-line", (e) => {
      console.log(e);
    });
    directions.on("route", onRoute);
    if (center) map.setCenter(center);
    if (zoom) map.setZoom(zoom);
    if (onInit) onInit(map);
  });
};

const Map = (props: Props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const classes = useStyles();

  const { onInit, center, zoom, onRoute, ...mapboxProps } = props;

  useEffect(() => {
    MapboxGL.accessToken = config.mapbox.token;
    if (map == null) {
      initMap({
        setMap,
        mapContainer,
        onInit,
        center,
        zoom,
        onRoute,
        mapboxProps,
      });
    }
  }, [map]);

  useEffect(() => {
    if (map == null || center == null) return;

    map.setCenter(center);
  }, [map, center]);

  return (
    <RootRef rootRef={mapContainer}>
      <Box className={classes.root} />
    </RootRef>
  );
};

export default Map;
