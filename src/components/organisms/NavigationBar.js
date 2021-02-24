import  React, { useState } from "react"
import styled from "styled-components"
import Bar from "../atoms/Bar"
import NavItem from "../atoms/NavItem"



const NavPanel = styled.div`
    position: absolute;
    display:none;
    flex-direction:column;
    align-items:center;
    padding:10px;
    width:100%;
    top:60px;
    border-bottom:2px solid white;
    background-color:${({theme})=>theme.first};
    @media only screen and (max-width: ${({ theme }) => theme.media700}) {
        display:flex;
    }

    
`
const StyledWrapper = styled.nav`
    display:none;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
    
    .bar{
        position:absolute;
        width:50px;
        top:15%;
        right:15px;
        transform:translateY(-50%);
    }


    @media only screen and (max-width: ${({ theme }) => theme.media700}) {
        display:flex;
    }
    
`



const NavigationBar = ({location}) => {
const [isOpen, setIsOpen] = useState(false)

  return (
      <>
    <StyledWrapper>

        <Bar onClick={()=>setIsOpen(prev =>!prev)}/> 
        
    </StyledWrapper>
    
        {isOpen &&   (
            <NavPanel>
                <NavItem location={location} id={"bar"} to={"/about/" } text={"About"}/>
                <NavItem location={location} id={"bar"} to={"/team/" } text={"Team"}/>
                <NavItem location={location} id={"bar"} to={"/projects/" } text={"Projects"}/>
            </NavPanel>
        )}


    </>
  )
}

export default NavigationBar
