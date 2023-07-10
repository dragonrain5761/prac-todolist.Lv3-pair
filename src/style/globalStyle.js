import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{ box-sizing: border-box }

  body {
    display: block;
    margin: 0px;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default GlobalStyle;
