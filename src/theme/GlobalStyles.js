import { createGlobalStyle } from "styled-components"
import NunitoRegular from '../assets/fonts/Nunito-Regular.ttf';
import NunitoLight from '../assets/fonts/Nunito-Light.ttf';
import SemiBold from '../assets/fonts/Nunito-SemiBold.ttf';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'nunito-regular';
        src: url(${NunitoRegular});
    }
    @font-face {
        font-family: 'nunito-light';
        src: url(${NunitoLight});
    }
    @font-face {
        font-family: 'nunito-semibold';
        src: url(${SemiBold});
    }
    
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
        overflow-x:hidden;
    }
    `;


