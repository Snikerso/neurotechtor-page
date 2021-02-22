import { Link } from "gatsby"
import * as React from "react"
import BanerImage from "../components/atoms/BanerImage"
import PageHead from "../components/atoms/PageHead"
import AboutList from "../components/organisms/AboutList"
import TeamList from "../components/organisms/TeamList"
import MainTemplate from "../components/templates/MainTemplate"
import { teamList,aboutList } from "../constants/data"


// markup
const IndexPage = ({location}) => {
  return (
    <MainTemplate location={location.pathname}>

      <BanerImage/>

      <PageHead text={'ABOUT'} />
      <AboutList list={aboutList} />
      
      <PageHead text={'Meet us!'} />
      <TeamList list={teamList} />
    </MainTemplate>
 )
}

export default IndexPage
