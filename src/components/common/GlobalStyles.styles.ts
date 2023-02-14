import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Mulish', sans-serif;
    };

    body{
        height: 100%;
        width: 100%;
    }

    :placeholder{
        font-family: 'Mulish', sans-serif;
    }

`;
