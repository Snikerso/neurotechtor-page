import React from 'react'
import styled from 'styled-components'
import Logo from '../atoms/Logo'
import LogoName from '../atoms/LogoName'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    .logo{
        width:100px;
    }
    .logo-name{
        width:130px;
        margin-top:-30px;
    }
`

const LogoWithName = () => {
    
    return (
        <StyledWrapper>
            <Logo/>
            <LogoName/>
        </StyledWrapper>
    )
  }
  
  export default LogoWithName


