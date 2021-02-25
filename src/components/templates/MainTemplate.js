import MessengerCustomerChat from 'react-messenger-customer-chat';
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
    overflow:hidden;

`


const MainTemplate = ({location, children}) => {

  return (
      <>

    <MessengerCustomerChat
    pageId="111736127626645"
    appId="___gatsby"
    htmlRef="<REF_STRING>"
  />,
        <GlobalStyles theme={darktheme}/>
        <ThemeProvider theme={darktheme}>
            <Header location={location}/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </ThemeProvider>
      </>

  )
}

export default MainTemplate
