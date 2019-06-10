import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  max-width: 820px;
  margin-top: 96px;
  grid-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    margin-top: 0;
  }
`

const Hero = props => {
  return <Wrapper>Hola Mundo!</Wrapper>
}

export default Hero
