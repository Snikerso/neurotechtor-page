
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
    margin-top:100px;
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
            <Footer/>
        </ThemeProvider>
      </>
  )
}

export default MainTemplate
// <!-- Load Facebook SDK for JavaScript -->
//       <div id="fb-root"></div>
//       <script>
//         window.fbAsyncInit = function() {
//           FB.init({
//             xfbml            : true,
//             version          : 'v10.0'
//           });
//         };

//         (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk'));</script>

//       <!-- Your Chat Plugin code -->
//       <div class="fb-customerchat"
//         attribution="install_email"
//         page_id="111736127626645">
// </div>