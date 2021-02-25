import React from 'react'
import styled from 'styled-components'
import Paragraph from '../atoms/Paragraph'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    text-align:center;
    width:90%;

    margin-bottom:100px;

    svg{
        width:70%;
    }

    > * {
        margin-bottom:70px;
    }
    @media  (min-width: ${({ theme }) => theme.media700}) {
        max-width:60%;
    }


`


const SocialIcon = ({type}) => {

    switch(type){
        case "FACEBOOK":
            return (
                <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M29.6413 5.84917C43.193 5.43836 54.5524 16.1293 54.9632 29.681C55.374 43.2327 44.6831 54.5922 31.1313 55.003C17.5796 55.4138 6.22022 44.7228 5.80942 31.1711C5.39861 17.6194 16.0896 6.25997 29.6413 5.84917ZM29.4923 0.933785C13.2052 1.42752 0.400304 15.033 0.894035 31.3201C1.38777 47.6072 14.9932 60.4121 31.2804 59.9183C47.5675 59.4246 60.3723 45.8191 59.8786 29.532C59.3849 13.2449 45.7794 0.440054 29.4923 0.933785ZM25.3219 25.6597L20.4066 25.8087L20.5556 30.7241L25.4709 30.5751L25.918 45.3212L33.291 45.0977L32.844 30.3516L37.317 30.216L37.6104 25.2872L32.695 25.4362L32.6329 23.3889C32.5973 22.2142 32.8192 21.7425 33.9546 21.7081L37.4986 21.6006L37.3124 15.4564L31.4041 15.6355C26.9852 15.7695 25.0829 17.7754 25.1959 21.5013L25.3219 25.6597Z" fill="url(#paint0_linear)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear" x1="-28.281" y1="-16.0955" x2="52.3714" y2="68.1019" gradientUnits="userSpaceOnUse">
                <stop stop-color="#57E0F4"/>
                <stop offset="0.560132" stop-color="#7F9DF4"/>
                <stop offset="1" stop-color="#AE00BE"/>
                </linearGradient>
                <clipPath id="clip0">
                <rect width="59.0117" height="59.0117" fill="white" transform="translate(0 1.82782) rotate(-1.73634)"/>
                </clipPath>
                </defs>
                </svg>
            )
        case "GITHUB":
            return(
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M30.3 5.93853C44.1528 5.51859 55.7647 16.4471 56.1846 30.3C56.6046 44.1529 45.676 55.7647 31.8232 56.1846C17.9703 56.6046 6.35845 45.676 5.93851 31.8232C5.51858 17.9703 16.4471 6.35847 30.3 5.93853ZM30.1477 0.913917C13.4986 1.41862 0.4092 15.3264 0.913903 31.9755C1.41861 48.6245 15.3264 61.714 31.9755 61.2093C48.6245 60.7046 61.7139 46.7967 61.2092 30.1477C60.7045 13.4986 46.7967 0.409214 30.1477 0.913917ZM30.6046 15.9878C22.2814 16.2401 15.7353 23.1928 15.9877 31.5185C16.1896 38.1787 20.6796 43.6979 26.7318 45.5085C27.4898 45.6264 27.7168 45.1518 27.7047 44.7523L27.6196 41.9461C23.4542 42.9852 22.4984 40.3235 22.4984 40.3235C21.7623 38.6032 20.7584 38.1684 20.7584 38.1684C19.3633 37.2727 20.8336 37.2483 20.8336 37.2483C22.3517 37.3079 23.192 38.7333 23.192 38.7333C24.606 40.9964 26.7665 40.2645 27.6165 39.854C27.7227 38.8751 28.092 38.2001 28.5126 37.8101C25.1522 37.5298 21.5957 36.3426 21.4207 30.5693C21.3708 28.9237 21.918 27.5618 22.8507 26.4774C22.6833 26.0977 22.1192 24.5784 22.8753 22.4784C22.8753 22.4784 24.1293 22.0356 27.0675 23.8978C28.2607 23.5272 29.5445 23.3223 30.8256 23.276C32.107 23.2421 33.4009 23.3714 34.6169 23.669C37.4369 21.6321 38.7104 21.9984 38.7104 21.9984C39.5948 24.0487 39.1238 25.5994 38.9821 25.9834C39.9813 27.0092 40.6049 28.3356 40.6548 29.9812C40.8303 35.7721 37.3416 37.1527 33.9965 37.6263C34.5533 38.0771 35.0735 38.9792 35.1162 40.3861L35.2415 44.5213C35.2537 44.9233 35.5091 45.3858 36.2684 45.2144C42.1948 43.0407 46.3372 37.2622 46.1354 30.6046C45.883 22.2789 38.9279 15.7354 30.6046 15.9878Z" fill="url(#paint0_linear)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear" x1="-28.9095" y1="-16.4938" x2="53.5352" y2="69.5746" gradientUnits="userSpaceOnUse">
                <stop stop-color="#57E0F4"/>
                <stop offset="0.560132" stop-color="#7F9DF4"/>
                <stop offset="1" stop-color="#AE00BE"/>
                </linearGradient>
                <clipPath id="clip0">
                <rect width="60.323" height="60.323" fill="white" transform="translate(0 1.82782) rotate(-1.73634)"/>
                </clipPath>
                </defs>
                </svg>
            )
        
     

    }

  }


  
const AboutItem = ({item}) => {
    let {src,type} = item

    return (
        <a href={src} target="_blank">
            <SocialIcon type={type} />
        </a>
        
    )
  }

  
export default AboutItem

