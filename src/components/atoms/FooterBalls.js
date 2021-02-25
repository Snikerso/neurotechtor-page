import React from 'react'
import styled, { css } from 'styled-components'

const Svg = styled.svg`
    position: absolute;
    width:100px;
    height:100px;
    

    ${({type})=>
        type ==='RIGHT' && css`
            right:0px;
            bottom:0px;
        `}

    ${({type})=>
        type ==='LEFT' && css`
            left:0px;
            bottom:0px;
        `}

    @media only screen and (min-width: ${({ theme }) => theme.media700}) {
        width:300px;
        height:100%;
    }


`;


const FooterBallItem = ({type}) => {

    switch(type){
        case "LEFT":
            return (
                <Svg type={type} width="401" height="291" viewBox="0 0 401 291" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49 32C49 28.0444 50.1437 24.1776 52.2863 20.8886C54.429 17.5996 57.4745 15.0362 61.0377 13.5224C64.6008 12.0087 68.5216 11.6126 72.3043 12.3843C76.0869 13.156 79.5615 15.0608 82.2886 17.8579C85.0157 20.6549 86.8729 24.2186 87.6253 28.0982C88.3777 31.9778 87.9916 35.9992 86.5157 39.6537C85.0397 43.3082 82.5404 46.4318 79.3336 48.6294C76.1269 50.827 72.3567 52 68.5 52C63.3283 52 58.3684 49.8929 54.7114 46.1421C51.0545 42.3914 49 37.3043 49 32V32Z" fill="url(#ball-right-1)"/>
                <path d="M0 254.5C0 247.281 2.08204 240.224 5.98283 234.222C9.88362 228.219 15.428 223.541 21.9147 220.778C28.4015 218.016 35.5394 217.293 42.4257 218.701C49.312 220.11 55.6375 223.586 60.6023 228.691C65.5671 233.795 68.9481 240.299 70.3179 247.379C71.6876 254.46 70.9846 261.798 68.2977 268.468C65.6108 275.137 61.0607 280.838 55.2227 284.849C49.3848 288.859 42.5212 291 35.5 291C26.0848 291 17.0553 287.154 10.3977 280.309C3.74018 273.464 0 264.18 0 254.5V254.5Z" fill="url(#ball-right-2)"/>
                <path d="M298 53C298 42.5176 301.02 32.2706 306.679 23.5548C312.338 14.839 320.381 8.04585 329.792 4.03441C339.202 0.022964 349.557 -1.02661 359.547 1.0184C369.537 3.06342 378.714 8.11118 385.916 15.5234C393.118 22.9355 398.023 32.3792 400.01 42.6602C401.998 52.9412 400.978 63.5977 397.08 73.2822C393.182 82.9667 386.581 91.2442 378.112 97.0679C369.643 102.892 359.686 106 349.5 106C335.841 106 322.742 100.416 313.084 90.4767C303.426 80.5372 298 67.0565 298 53V53Z" fill="url(#ball-right-3)"/>
                <path d="M254 252C254 247.253 255.378 242.613 257.96 238.666C260.543 234.72 264.213 231.643 268.507 229.827C272.801 228.01 277.526 227.535 282.085 228.461C286.643 229.387 290.83 231.673 294.117 235.029C297.404 238.386 299.642 242.662 300.548 247.318C301.455 251.973 300.99 256.799 299.211 261.184C297.433 265.57 294.42 269.318 290.556 271.955C286.691 274.592 282.148 276 277.5 276C271.267 276 265.29 273.471 260.883 268.971C256.476 264.47 254 258.365 254 252V252Z" fill="url(#ball-right-4)"/>
                <defs>
                <linearGradient id="ball-right-1" x1="37.6176" y1="4.55891" x2="84.8765" y2="56.6992" gradientUnits="userSpaceOnUse">
                <stop stop-color="#57E0F4"/>
                <stop offset="0.464373" stop-color="#7F9DF4"/>
                <stop offset="1" stop-color="#AE00BE"/>
                <stop offset="1" stop-color="#9849D7"/>
                </linearGradient>
                <linearGradient id="ball-right-2" x1="-20.7218" y1="204.42" x2="65.5463" y2="299.365" gradientUnits="userSpaceOnUse">
                <stop stop-color="#57E0F4"/>
                <stop offset="0.464373" stop-color="#7F9DF4"/>
                <stop offset="1" stop-color="#AE00BE"/>
                <stop offset="1" stop-color="#9849D7"/>
                </linearGradient>
                <linearGradient id="ball-right-3" x1="267.939" y1="-19.7189" x2="393.216" y2="118.03" gradientUnits="userSpaceOnUse">
                <stop stop-color="#57E0F4"/>
                <stop offset="0.464373" stop-color="#7F9DF4"/>
                <stop offset="1" stop-color="#AE00BE"/>
                <stop offset="1" stop-color="#9849D7"/>
                </linearGradient>
                <linearGradient id="ball-right-4" x1="240.283" y1="219.071" x2="296.969" y2="281.88" gradientUnits="userSpaceOnUse">
                <stop stop-color="#57E0F4"/>
                <stop offset="0.464373" stop-color="#7F9DF4"/>
                <stop offset="1" stop-color="#AE00BE"/>
                <stop offset="1" stop-color="#9849D7"/>
                </linearGradient>
                </defs>
                </Svg>

            )
        case "RIGHT":
            return(
                <Svg type={type} width="401" height="291" viewBox="0 0 401 291" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M352 32C352 28.0444 350.856 24.1776 348.714 20.8886C346.571 17.5996 343.525 15.0362 339.962 13.5224C336.399 12.0087 332.478 11.6126 328.696 12.3843C324.913 13.156 321.439 15.0608 318.711 17.8579C315.984 20.6549 314.127 24.2186 313.375 28.0982C312.622 31.9778 313.008 35.9992 314.484 39.6537C315.96 43.3082 318.46 46.4318 321.666 48.6294C324.873 50.827 328.643 52 332.5 52C337.672 52 342.632 49.8929 346.289 46.1421C349.946 42.3914 352 37.3043 352 32V32Z" fill="url(#ball-left-1)"/>
                <path d="M401 254.5C401 247.281 398.918 240.224 395.017 234.222C391.116 228.219 385.572 223.541 379.085 220.778C372.598 218.016 365.461 217.293 358.574 218.701C351.688 220.11 345.362 223.586 340.398 228.691C335.433 233.795 332.052 240.299 330.682 247.379C329.312 254.46 330.015 261.798 332.702 268.468C335.389 275.137 339.939 280.838 345.777 284.849C351.615 288.859 358.479 291 365.5 291C374.915 291 383.945 287.154 390.602 280.309C397.26 273.464 401 264.18 401 254.5V254.5Z" fill="url(#ball-left-2)"/>
                <path d="M103 53C103 42.5176 99.9796 32.2706 94.3207 23.5548C88.6618 14.839 80.6186 8.04585 71.2082 4.03441C61.7978 0.022964 51.4429 -1.02661 41.4529 1.0184C31.4628 3.06342 22.2864 8.11118 15.084 15.5234C7.88161 22.9355 2.97674 32.3792 0.989599 42.6602C-0.997539 52.9412 0.0222808 63.5977 3.92019 73.2822C7.8181 82.9667 14.419 91.2442 22.8882 97.0679C31.3573 102.892 41.3143 106 51.5 106C65.1587 106 78.2579 100.416 87.916 90.4767C97.5741 80.5372 103 67.0565 103 53V53Z" fill="url(#ball-left-3)"/>
                <path d="M147 252C147 247.253 145.622 242.613 143.04 238.666C140.457 234.72 136.787 231.643 132.493 229.827C128.199 228.01 123.474 227.535 118.915 228.461C114.357 229.387 110.17 231.673 106.883 235.029C103.596 238.386 101.358 242.662 100.452 247.318C99.5448 251.973 100.01 256.799 101.789 261.184C103.567 265.57 106.58 269.318 110.444 271.955C114.309 274.592 118.852 276 123.5 276C129.733 276 135.71 273.471 140.117 268.971C144.524 264.47 147 258.365 147 252V252Z" fill="url(#ball-left-4)"/>
                <defs>
                <linearGradient id="ball-left-1" x1="363.382" y1="4.55891" x2="316.123" y2="56.6992" gradientUnits="userSpaceOnUse">
                <stop stop-color="#57E0F4"/>
                <stop offset="0.464373" stop-color="#7F9DF4"/>
                <stop offset="1" stop-color="#AE00BE"/>
                <stop offset="1" stop-color="#9849D7"/>
                </linearGradient>
                <linearGradient id="ball-left-2" x1="421.722" y1="204.42" x2="335.454" y2="299.365" gradientUnits="userSpaceOnUse">
                <stop stop-color="#57E0F4"/>
                <stop offset="0.464373" stop-color="#7F9DF4"/>
                <stop offset="1" stop-color="#AE00BE"/>
                <stop offset="1" stop-color="#9849D7"/>
                </linearGradient>
                <linearGradient id="ball-left-3" x1="133.061" y1="-19.7189" x2="7.7841" y2="118.03" gradientUnits="userSpaceOnUse">
                <stop stop-color="#57E0F4"/>
                <stop offset="0.464373" stop-color="#7F9DF4"/>
                <stop offset="1" stop-color="#AE00BE"/>
                <stop offset="1" stop-color="#9849D7"/>
                </linearGradient>
                <linearGradient id="ball-left-4" x1="160.717" y1="219.071" x2="104.031" y2="281.88" gradientUnits="userSpaceOnUse">
                <stop stop-color="#57E0F4"/>
                <stop offset="0.464373" stop-color="#7F9DF4"/>
                <stop offset="1" stop-color="#AE00BE"/>
                <stop offset="1" stop-color="#9849D7"/>
                </linearGradient>
                </defs>
                </Svg>

            )
        
     

    }

  }


  
const FooterBalls = ({type}) => {


    return (
            <FooterBallItem type={type} />
    )
  }

  
export default FooterBalls


