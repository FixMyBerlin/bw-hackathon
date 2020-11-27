import React from "react";
import MapView from "./MapView";
import DetailPanel from "./DetailPanel";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1280px;
  height: 800px;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <Map />
      <DetailPanel />
    </Wrapper>
  );
};

export default App;
