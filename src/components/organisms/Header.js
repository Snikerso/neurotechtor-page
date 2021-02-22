import { Link } from "gatsby"
import  React from "react"
import styled from "styled-components"
import LogoWithName from "../molecules/LogoWithName"
import Navigation from "./Navigation"
import NavigationBar from "./NavigationBar"

const StyledHeader = styled.header`
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;

`

const Header = ({location}) => {

  return (
    <StyledHeader>
        <Link to={"/"}>
            <LogoWithName />
        </Link>
        <Navigation location={location}/>
        <NavigationBar location={location} />
    </StyledHeader>
  )
}

export default Header;

