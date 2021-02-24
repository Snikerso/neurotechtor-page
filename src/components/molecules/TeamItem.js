import React from 'react'
import styled from 'styled-components'
import Paragraph from '../atoms/Paragraph'
import PersonImage from '../atoms/PersonImage'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    text-align:center;
    width:90%;
    margin-bottom:100px;

    > * {
        margin-bottom:15px;
    }

    @media  (min-width: ${({ theme }) => theme.media700}) {
        width:24%;
    }

`

const PersonHead = styled.h3`
    font-family:nunito-regular;
    font-weight:normal;
    white-space: nowrap;
    font-size: 28px;
    
`


const TeamItem = ({item}) => {
    let {src,name,description} = item

    return (
        <StyledWrapper>
            <PersonImage src={src}/>
            <PersonHead>{name}</PersonHead>
            <Paragraph text={description} />
        </StyledWrapper>
    )
  }
  
  export default TeamItem


