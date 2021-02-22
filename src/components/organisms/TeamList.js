import React from 'react'
import styled from 'styled-components'
import TeamItem from '../molecules/TeamItem'

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;

    >*{
        margin:50px;
    }

`

const TeamList = ({list}) => {

    return (
        <>
            <StyledWrapper>
                {list.map(item=> <TeamItem key={item.id} item={item} /> )}
            </StyledWrapper>
        </>
    )
  }
  
export default TeamList


