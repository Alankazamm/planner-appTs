import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap');
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
