import { Link } from "gatsby"
import * as React from "react"
import PageHead from "../components/atoms/PageHead"
import TeamList from "../components/organisms/TeamList"
import MainTemplate from "../components/templates/MainTemplate"
import { teamList } from "../constants/data"



const TeamPage = ({location}) => {
  return (
    <MainTemplate location={location.pathname}>
      <PageHead text={'Meet us!'} />
      <TeamList list={teamList} />
    </MainTemplate>
  )
}

export default TeamPage
