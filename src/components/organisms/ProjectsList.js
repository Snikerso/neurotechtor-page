import React from 'react'
import styled from 'styled-components'
import ProjectItem from '../molecules/ProjectItem'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;

  

    @media  (min-width: ${({ theme }) => theme.media700}) {
        /* width:24%; */
    }

`

const ProjectList = ({list}) => {

    return (
        <>
            <StyledWrapper>
                {list.map(item=> <ProjectItem key={item.id} item={item} /> )}
            </StyledWrapper>
        </>
    )
  }
  
export default ProjectList


