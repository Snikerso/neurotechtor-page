import React from 'react'
import styled from 'styled-components'
import PersonImage from '../atoms/PersonImage'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    text-align:center;
    width:60%;

    > * {
        margin-top:10px;
    }

    @media  (min-width: ${({ theme }) => theme.media700}) {
        width:20%;
    }

`

const TeamItem = ({item}) => {
    let {src,name,description} = item

    return (
        <StyledWrapper>
            <PersonImage src={src}/>
            <h3>{name}</h3>
            <div>{description}</div>
        </StyledWrapper>
    )
  }
  
  export default TeamItem


