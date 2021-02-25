import * as React from "react"
import styled, {ThemeProvider} from 'styled-components'
import Header from "../organisms/Header"
import {GlobalStyles} from '../../theme/GlobalStyles'
import {darktheme} from '../../theme/theme'
import Footer from "../organisms/Footer"

const Main = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-top:40px;

`


const MainTemplate = ({location, children}) => {

  return (
      <>

        <GlobalStyles theme={darktheme}/>
        <ThemeProvider theme={darktheme}>
            <Header location={location}/>
            <Main>
                {children}
            </Main>
            
            {/* <MessengerChat/> */}
            <Footer/>
        </ThemeProvider>
      </>

  )
}

export default MainTemplate
