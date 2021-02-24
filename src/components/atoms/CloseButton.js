import React from 'react'


const CloseButton = ({onClick}) => {


    return (

        <svg onClick={onClick} className="bar" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L20.8939 20.8939" stroke="url(#close1)" stroke-width="2.08" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.8938 2L1.99993 20.8939" stroke="url(#close2)" stroke-width="2.08" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="close1" x1="-8.81347" y1="-7.79257" x2="16.1198" y2="20.4335" gradientUnits="userSpaceOnUse">
            <stop stop-color="#57E0F4"/>
            <stop offset="0.560132" stop-color="#7F9DF4"/>
            <stop offset="1" stop-color="#AE00BE"/>
            </linearGradient>
            <linearGradient id="close2" x1="30.6864" y1="-8.81347" x2="2.46029" y2="16.1198" gradientUnits="userSpaceOnUse">
            <stop stop-color="#57E0F4"/>
            <stop offset="0.560132" stop-color="#7F9DF4"/>
            <stop offset="1" stop-color="#AE00BE"/>
            </linearGradient>
            </defs>
        </svg>


    )
  }
  
  export default CloseButton


