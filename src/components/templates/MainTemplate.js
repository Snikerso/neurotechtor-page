import { Link } from "gatsby"
import * as React from "react"
import styled, {ThemeProvider} from 'styled-components'
import Header from "../organisms/Header"
import {GlobalStyles} from '../../theme/GlobalStyles'
import {darktheme} from '../../theme/theme'

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
        <GlobalStyles theme={darktheme}/>
        <ThemeProvider theme={darktheme}>
            <Header location={location}/>
            <Main>
                {children}
            </Main>
        </ThemeProvider>
      </>

  )
}

export default MainTemplate
