import  React from "react"
import styled from "styled-components"
import Dick from '../../images/dick.png'



const StyledHeader = styled.header`
display:flex;
flex-direction:column;
align-items:center;
    width:100%;
    height:100%;

    
`

const Logo = styled.img`
    width:200px;
    
`

const Header = ({children}) => {
  return (
    <StyledHeader>
        <Logo src={Dick}  />

    </StyledHeader>
  )
}

export default Header
