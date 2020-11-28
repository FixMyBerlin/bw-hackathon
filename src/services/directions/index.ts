// https://github.com/mapbox/mapbox-gl-directions/issues/269
import * as MapboxDirections from "./mapbox-gl-directions";
import config from "~/config";

const directions = new MapboxDirections({
  accessToken: config.mapbox.token,
  unit: "metric",
  profile: "mapbox/cycling",
  language: "de",
  interactive: false,
  controls: {
    instructions: false,
    profileSwitcher: false,
  },
});

export default directions;
