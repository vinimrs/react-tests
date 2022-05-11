import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
        scroll-behavior: smooth;
        background: #4B69FD;
    }
    #root {
      display: flex;
    flex-direction: column;
    min-height: 100vh;
    }
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    body {
        background-color: var(--black);
        overflow-x: hidden;
    }
    section {
  width: 100%;
  text-align: center;
  max-width: 900px;
}
    a {
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    h2 {
      font-weight: 600;
      font-size: 32px;
      margin-bottom: 36px;
      color: #4B69FD;
    }
    ul li {
      font-size: 18px;
      font-weight: 300;
        margin: 8px 0;
    }
    
`;
