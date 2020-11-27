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
    style: "mapbox://styles/hejco/cki0po9cz1bf319k2v9fohw9o",
    token:
      "pk.eyJ1IjoiaGVqY28iLCJhIjoiY2piZjd2bzk2MnVsMjJybGxwOWhkbWxpNCJ9.L1UNUPutVJHWjSmqoN4h7Q",
  },
};

export default config;
