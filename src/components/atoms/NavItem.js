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

    svg{
        width:70%;
    }


`
const StyledLink = styled(Link)`
    color:white;
    text-decoration:none;
    text-align:center;
`

const NavItem = ({to,text,id,location}) => {


    return (
        <StyledWrapper>
            <StyledLink activeClassName="active" to={to}>{text}</StyledLink>
            {location.substring(1) === to.substring(1) && <LineGradient id={id}/>}
            
        </StyledWrapper>
    )
  }
  
  export default NavItem


