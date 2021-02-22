import React from 'react'
import styled from 'styled-components'
import LineGradient from './LineGradient'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;

    >*{
        margin-top:5px;
    }

`
const StyledHead = styled.h2`
    color:white;
    text-decoration:none;
    text-align:center;

`

const PageHead = ({text}) => {
    return (
        <StyledWrapper>
        <StyledHead>{text}</StyledHead>
        <LineGradient id={"head"}/>
        </StyledWrapper>
    )
  }
  
export default PageHead


