import React from "react"
import styled, { css } from "styled-components"
import NavItem from "../atoms/NavItem"

const StyledWrapper = styled.nav`
    position: relative;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100%;


    @media  (max-width: ${({ theme }) => theme.media700}) {
        display:none;
    }

`


const Navigation = ({location}) => {
  console.log(location)
  return (
    <StyledWrapper >
        <NavItem location={location} id={"nav-item-line"} to={"/about" } text={"About"}/>
        <NavItem location={location} id={"nav-item-line"} to={"/team" } text={"Team"}/>
        <NavItem location={location} id={"nav-item-line"} to={"/projects" } text={"Projects"}/>
    </StyledWrapper>
  )
}

export default Navigation
