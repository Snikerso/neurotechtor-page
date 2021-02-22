import { Link } from "gatsby"
import * as React from "react"
import MainTemplate from "../components/templates/MainTemplate"


const ProjectsPage = ({location}) => {

  return (
    <MainTemplate location={location.pathname} >
     strona poboczna
     <Link to={"/"}>Z powrotem</Link>
    </MainTemplate>
  )
}

export default ProjectsPage
