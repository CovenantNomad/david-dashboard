import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #ffffff;
    font-family: '"Roboto", "Helvetica", "Arial", sans-serif';
    font-weight: "300";
    line-height: "1.5em";
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ol, ul, li {
    list-style: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;