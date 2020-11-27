import React, { useState, useRef, useEffect } from "react";
import MapboxGL from "mapbox-gl";
import styled from "styled-components";
import debug from "debug";

import config from "~/config";

const logger = debug("hackathon:mapview");

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

interface Props extends Partial<MapboxGL.MapboxOptions> {
  onInit?: (arg0: MapboxGL.Map) => void;
  className?: string;
  center?: MapboxGL.LngLat;
  zoom?: number;
}

const initMap = ({
  setMap,
  mapContainer,
  onInit,
  center,
  zoom,
  mapboxProps,
}) => {
  const map = new MapboxGL.Map({
    container: mapContainer.current,
    ...config.mapbox,
    ...mapboxProps,
  });

  logger("Init map with", mapboxProps);

  map.on("load", () => {
    logger("Map loaded");
    setMap(map);
    map.resize();
    if (center) map.setCenter(center);
    if (zoom) map.setZoom(zoom);
    if (onInit) onInit(map);
  });
};

const Map = (props: Props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  const { onInit, className, center, zoom, ...mapboxProps } = props;

  useEffect(() => {
    MapboxGL.accessToken = config.mapbox.token;
    if (map == null)
      initMap({ setMap, mapContainer, onInit, center, zoom, mapboxProps });
  }, [map]);

  useEffect(() => {
    if (map == null || center == null) return;

    map.setCenter(center);
  }, [map, center]);

  return (
    <Wrapper
      className={className}
      ref={(el) => {
        if (mapContainer != null) mapContainer.current = el;
      }}
    />
  );
};

export default Map;
