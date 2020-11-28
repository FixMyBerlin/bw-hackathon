interface Config {
  mapbox: {
    bounds: mapboxgl.LngLatBoundsLike;
    style: string;
    token: string;
  };
}

const config: Config = {
  mapbox: {
    bounds: [
      [8.346177, 49.616303],
      [10.130522, 47.511763],
    ],
    style: "mapbox://styles/hackbw/cki1n7wtc0xfo19myothk9w4a",
    token:
      "pk.eyJ1IjoiaGFja2J3IiwiYSI6ImNraTFuM29saTJqc3AyeXA1YXY2cXMzdTcifQ.qbHiqHfKeW8Z0OUB7Krh_w",
  },
};

export default config;
