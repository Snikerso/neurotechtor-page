import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
    position: absolute;
    left:-12.5px;
    top:50%;
    transform:translateY(-50%);
    height:100%;
`

const LineGradientVertical = ({id}) => {
    return (
        <Svg width="5" height="282" viewBox="0 0 5 282" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.5" y1="2.5" x2="2.49999" y2="280.5" stroke="url(#line-vertical)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="line-vertical" x1="0.318133" y1="-116.046" x2="-133.761" y2="136.343" gradientUnits="userSpaceOnUse">
            <stop stop-color="#57E0F4"/>
            <stop offset="0.560132" stop-color="#7F9DF4"/>
            <stop offset="1" stop-color="#AE00BE"/>
            </linearGradient>
            </defs>
        </Svg>



    )
  }
  
  export default LineGradientVertical


