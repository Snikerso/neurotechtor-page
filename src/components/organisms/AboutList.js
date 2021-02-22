import React from 'react'
import styled from 'styled-components'
import AboutItem from '../molecules/AboutItem'
import TeamItem from '../molecules/TeamItem'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;


    > * {
        margin:50px;
    }

`

const AboutList = ({list}) => {

    return (
        <>
            <StyledWrapper>
                {list.map(item=> <AboutItem key={item.id} item={item} /> )}
            </StyledWrapper>
        </>
    )
  }
  
  export default AboutList


