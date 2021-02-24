import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import BanerImage from "../components/atoms/BanerImage"
import PageHead from "../components/atoms/PageHead"
import AboutList from "../components/organisms/AboutList"
import ProjectList from "../components/organisms/ProjectsList"
import TeamList from "../components/organisms/TeamList"
import MainTemplate from "../components/templates/MainTemplate"
import { teamList, aboutList, projectList } from "../constants/data"


const StyledWrapperInner = styled.div`
margin-top:80px;

`


const IndexPage = ({location}) => {
  return (
    <MainTemplate location={location.pathname}>

      <BanerImage/>

      <StyledWrapperInner>
        <PageHead text={'ABOUT'} />
        <AboutList list={aboutList} />
      </StyledWrapperInner>
      
      <StyledWrapperInner>
        <PageHead text={'Meet us!'} />
        <TeamList list={teamList} />
      </StyledWrapperInner>
      <StyledWrapperInner>
        <PageHead text={'Projects'} />
        <ProjectList list={projectList} />
      </StyledWrapperInner>
    </MainTemplate>
 )
}

export default IndexPage
