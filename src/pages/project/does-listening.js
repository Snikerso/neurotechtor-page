import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import Akapit from "../../components/atoms/Project/Akapit"
import Authors from "../../components/atoms/Project/Authors"
import Description from "../../components/atoms/Project/Description"
import Questions from "../../components/atoms/Project/Questions"
import { StyledWrapper } from "../../components/atoms/Project/StyledWrapper"
import Title from "../../components/atoms/Project/Title"
import MainTemplate from "../../components/templates/MainTemplate"
import { projectList } from "../../constants/data"

const CognitiveEnhancement = () => {



  const {title,authors,contributors,description,studydesign,background,research_questions} = projectList[2]

  return (
    <MainTemplate location={"/projects/"}>
      <StyledWrapper>
            <Title secondary text={title}/>
            <Authors secondary text={'Authors: '} authors={authors} />
            <Authors secondary text={"Contributors: "} authors={contributors}/>
            <Description text={description}/>
            <Akapit title={"Study Design"} text={studydesign}/>
            <Akapit title={"Background"} text={background}/>
            <Questions questions={research_questions}/>
      </StyledWrapper>



    </MainTemplate>
  )
}

export default CognitiveEnhancement
