import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FooterBalls from "../atoms/FooterBalls"
import LogoWithName from "../molecules/LogoWithName"


const StyledWrapper = styled.footer`
    position: relative;

    width:100vw;
    height:200px;

`

const Footer = ({}) => {

  return (
    <StyledWrapper>
     <FooterBalls type={"LEFT"}/>
     <FooterBalls type={"RIGHT"}/>
    </StyledWrapper>
  )
}

export default Footer;

