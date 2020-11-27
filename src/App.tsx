import React from "react";
import MapView from "./MapView";
import DetailPanel from "./DetailPanel";
import styled from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <MapView />
        <DetailPanel />
      </Wrapper>
    </>
  );
};

export default App;
