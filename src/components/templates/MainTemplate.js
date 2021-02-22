import { Link } from "gatsby"
import * as React from "react"
import {ThemeProvider} from 'styled-components'
import Header from "../organisms/Header"
import {GlobalStyle} from '../../theme/GlobalStyles'
import {darktheme} from '../../theme/theme'


const MainTemplate = ({children}) => {
    console.log(darktheme)
  return (
      <>
        <GlobalStyle theme={darktheme}/>
        <ThemeProvider theme={darktheme}>
            <main>

            <Header/>
            {children}
            </main>
        </ThemeProvider>
      </>

  )
}

export default MainTemplate
