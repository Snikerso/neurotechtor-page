import React from 'react'


const LineGradient = ({id}) => {
    return (
        <svg width="144" height="5" viewBox="0 0 144 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2.5" y1="2.5" x2="141.5" y2="2.5" stroke={`url(#${id})`} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
                <linearGradient id={id} x1="-67.6543" y1="4.68191" x2="152" y2="65" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#57E0F4"/>
                    <stop offset="0.560132" stop-color="#7F9DF4"/>
                    <stop offset="1" stop-color="#AE00BE"/>
                </linearGradient>
            </defs>
        </svg>


    )
  }
  
  export default LineGradient


