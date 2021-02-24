import React from "react"
import styled, { css } from "styled-components"
import NavItem from "../atoms/NavItem"

const StyledWrapper = styled.nav`
    position: relative;
    display:flex;
    flex-direction:row;
    justify-content:center;
    text-align:center;
    width:100%;
    height:100%;

    > *{
      margin: 0px 20px ;
    }

    @media  (max-width: ${({ theme }) => theme.media700}) {
        display:none;
    }

`


const Navigation = ({location}) => {
  return (
    <StyledWrapper >
        <NavItem location={location} id={"nav-item-line"} to={"/about/" } text={"About"}/>
        <NavItem location={location} id={"nav-item-line"} to={"/team/" } text={"Team"}/>
        <NavItem location={location} id={"nav-item-line"} to={"/projects/" } text={"Projects"}/>
    </StyledWrapper>
  )
}

export default Navigation
