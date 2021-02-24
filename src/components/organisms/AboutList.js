import React from 'react'
import styled from 'styled-components'
import AboutItem from '../molecules/AboutItem'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
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


