import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  html,
  body {
    width: 100%;
    overflow-x: hidden;
  }

  #root {
    margin: 0 auto;
  }

  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif
  }

  body, button {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  body {
    @media (max-width: 1919px) {
      zoom: 67%;
    }

    @media (min-width: 1920px) {
      zoom: 100%;
    }
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
