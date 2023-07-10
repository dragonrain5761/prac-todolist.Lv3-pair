import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    display: block;
    margin: 8px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default GlobalStyle;
