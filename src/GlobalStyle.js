import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        padding: 0px;
        height: 100%;
        font-size: inherit;
    }

    #root {
        min-height: 100vh;
    }
`;

export default GlobalStyle;