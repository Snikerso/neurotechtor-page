import React from 'react'
import styled from 'styled-components'


const Img = styled.img`
    width:100%;
`

const BanerImage = () => {
    return (

       <Img src={require('../../images/welcome_image.png')} />

    )
  }
  
  export default BanerImage


