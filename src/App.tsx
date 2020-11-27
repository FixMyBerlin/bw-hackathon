import React from "react";
import MapView from "./MapView";
import DetailPanel from "./DetailPanel";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import GlobalStyles from "./styles/GlobalStyles";
import config from "./config";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const initMap = (map: mapboxgl.Map) => {
  map.fitBounds(config.mapbox.bounds, { padding: 100, linear: true });
};

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles />
      <Wrapper>
        <MapView onInit={initMap} />
        <DetailPanel />
      </Wrapper>
    </React.Fragment>
  );
};

export default App;
