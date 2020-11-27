import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 16px;
  }

  h1 {
    font-size: 2.5em; /* = 40px/16px */
    line-height: 1.1em; /* = 44px/40px */
    margin-bottom: 22px;
  }

  p {
    font-size: 0.875em; /* 16px is the default em size */
    line-height: 1.5714285714285714em; /* = 22px/14px */
    margin-bottom: 22px;
  }
`;

export default GlobalStyle;
