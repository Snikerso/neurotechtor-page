import React from 'react'
import styled from 'styled-components'


const Img = styled.img`
    width:100%;


`

const PersonImage = ({src}) => {

    return (
       <Img src={require(`../../images/team/${src}.png`)} />
    )
  }
  
  export default PersonImage


