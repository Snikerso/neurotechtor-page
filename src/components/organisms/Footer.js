import React from "react"
import styled from "styled-components"
import FooterBalls from "../atoms/FooterBalls"


const StyledWrapper = styled.footer`
    display:flex;
    flex-direction:column;
    position: relative;
    align-items:center;
    justify-content:flex-end;
    overflow-x:hidden;
    width:100vw;
    height:200px;
    @media only screen and (min-width: ${({ theme }) => theme.media700}) {
      justify-content:center;
    }
`

const StyledInformation = styled.div`
  color: ${({theme})=>theme.white};
  text-align:center;
  font-family:nunito-regular; 
  font-size:12px;
  :first-child {
    font-family:nunito-semibold; 
    font-weight:bold;
  }
  margin-bottom:10px;

  @media only screen and (min-width: ${({ theme }) => theme.media700}) {
    font-size:15px;
    }
`

const Footer = ({}) => {

  return (
    <StyledWrapper>
      <FooterBalls type={"LEFT"}/>
      <FooterBalls type={"RIGHT"}/>
      <StyledInformation> <p>Occupying</p> <p>Wileńska 4, 87-100 Toruń </p></StyledInformation>
      <StyledInformation> <p>Email</p> <p>neurotechtor@gmail.com</p></StyledInformation>
    </StyledWrapper>
  )
}

export default Footer;

