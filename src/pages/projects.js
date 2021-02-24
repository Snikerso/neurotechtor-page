import { Link } from "gatsby"
import * as React from "react"
import PageHead from "../components/atoms/PageHead"
import ProjectList from "../components/organisms/ProjectsList"
import MainTemplate from "../components/templates/MainTemplate"
import { projectList } from "../constants/data"


const ProjectsPage = ({location}) => {

  return (
    <MainTemplate location={location.pathname} >
      <PageHead text={'Projects'} />
      <ProjectList list={projectList} />
    </MainTemplate>
  )
}

export default ProjectsPage
