import { Link } from "gatsby"
import * as React from "react"
import PageHead from "../components/atoms/PageHead"
import AboutList from "../components/organisms/AboutList"
import MainTemplate from "../components/templates/MainTemplate"
import { aboutList } from "../constants/data"


const AboutPage = ({location}) => {
  return (
    <MainTemplate location={location.pathname} >
      <PageHead text={'About'} />
      <AboutList list={aboutList} />
    </MainTemplate>
  )
}

export default AboutPage
