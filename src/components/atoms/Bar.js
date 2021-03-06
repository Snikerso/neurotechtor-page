import React from 'react'


const Bar = ({onClick}) => {
    return (

        <svg onClick={onClick} className="bar" width="29" height="19" viewBox="0 0 29 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.04" y1="1.96" x2="27.76" y2="1.96" stroke="url(#gradient_bar)" stroke-width="2.08" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="1.04" y1="9.96" x2="27.76" y2="9.96" stroke="url(#gradient_bar)" stroke-width="2.08" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="1.04" y1="17.96" x2="27.76" y2="17.96" stroke="url(#gradient_bar)" stroke-width="2.08" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="gradient_bar" x1="-13.5309" y1="2.68187" x2="24.0585" y2="5.01024" gradientUnits="userSpaceOnUse">
        <stop stop-color="#57E0F4"/>
        <stop offset="0.560132" stop-color="#7F9DF4"/>
        <stop offset="1" stop-color="#AE00BE"/>
        </linearGradient>
        <linearGradient id="gradient_bar" x1="-13.5309" y1="10.6819" x2="24.0585" y2="13.0102" gradientUnits="userSpaceOnUse">
        <stop stop-color="#57E0F4"/>
        <stop offset="0.560132" stop-color="#7F9DF4"/>
        <stop offset="1" stop-color="#AE00BE"/>
        </linearGradient>
        <linearGradient id="gradient_bar" x1="-13.5309" y1="18.6819" x2="24.0585" y2="21.0102" gradientUnits="userSpaceOnUse">
        <stop stop-color="#57E0F4"/>
        <stop offset="0.560132" stop-color="#7F9DF4"/>
        <stop offset="1" stop-color="#AE00BE"/>
        </linearGradient>
        </defs>
        </svg>

    )
  }
  
  export default Bar


