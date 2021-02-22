import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`

    
    *,*::before,*::after{
        box-sizing:border-box;
        margin:0;
        }
    html {
        font-size: 62.5%; 
    }
    body{
        background-color:${({theme}) =>theme.first};
        font-size:1.6rem;
        margin:0;    
    }
    `;


/* @font-face {
    font-family: 'virgo';
    src: url(${Virgo});
} */
