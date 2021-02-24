import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import LineGradient from './LineGradient'

const StyledWrapper = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    width:100px;
    padding:10px;
    font-size:33px;

    svg{
        width:100%;
    }

`
const StyledLink = styled(Link)`
    color:white;
    text-decoration:none;
    text-align:center;
    font-family:nunito-regular;
`

const NavItem = ({to,text,id,location}) => {
    
let isActualLocation = location.substring(1) === to.substring(1)

    return (
        <StyledWrapper>
            <StyledLink isActive={isActualLocation} to={to}>{text}</StyledLink>
            {isActualLocation&& <LineGradient id={id}/>}
        </StyledWrapper>
    )
  }
  
  export default NavItem


