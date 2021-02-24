import React from 'react'
import styled from 'styled-components'
import Logo from '../atoms/Logo'
import LogoName from '../atoms/LogoName'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:100px;
    padding-bottom:50px;
    .logo{
        width:300px;
    }
    .logo-name{
        width:300px;
        margin-top:0px;
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


