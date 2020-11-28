interface Config {
  mapbox: Partial<mapboxgl.MapboxOptions> & { token: string };
}

const config: Config = {
  mapbox: {
    // center: [49.246, 8.919],
    bounds: [
      [8.5, 49.1],
      [9.3, 49.5],
    ],
    style: "mapbox://styles/hackbw/cki1n7wtc0xfo19myothk9w4a",
    token:
      "pk.eyJ1IjoiaGFja2J3IiwiYSI6ImNraTFuM29saTJqc3AyeXA1YXY2cXMzdTcifQ.qbHiqHfKeW8Z0OUB7Krh_w",
  },
};

export default config;
