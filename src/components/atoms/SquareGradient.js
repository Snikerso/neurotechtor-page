import React from 'react'
import styled from 'styled-components'


const StyledSquareGradient = styled.svg`
    position:absolute;
    top:-20px;
    left:-45px;
    z-index:-1;
`


const SquareGradient = ({data}) => {


    return (
        <StyledSquareGradient width="562" height="494" viewBox="0 0 562 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
                <rect x="14.9376" y="2.93761" width={data.width} height={data.height} rx="42.0624" stroke="url(#paint0_linear)" stroke-width="5.87521"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="562" height={"493.284"} filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="6"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear" x1="-240.764" y1="-144.646" x2="362.564" y2="625.962" gradientUnits="userSpaceOnUse">
            <stop stop-color="#57E0F4" />
            <stop offset="0.560132" stop-color="#7F9DF4"/>
            <stop offset="1" stop-color="#AE00BE"/>
            </linearGradient>
            </defs>
        </StyledSquareGradient>
    )
  }
  
  export default SquareGradient


