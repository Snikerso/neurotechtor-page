import React from 'react'
import styled, { css } from 'styled-components'
import LineGradient from './LineGradient'


const StyledParagraph = styled.p`
    color:white;
    text-decoration:none;
    text-align:center;
    font-family:nunito-light;

    ${({secondary})=>
    secondary && css`
        font-size:13px;
        text-align:left;
    `}

`

const Paragraph = ({text, secondary}) => {
    return (

            <StyledParagraph secondary={secondary}>{text}</StyledParagraph>
    )
  }
  
export default Paragraph


