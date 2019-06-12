import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-top: 100px;

  @media (max-width: 544px) {
    padding-top: 40px;
  }
`

const Container = styled.div`
  background-image: url(${require("../images/get-started-bg.svg")});
  background-position: center center;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 456px;

  @media (max-width: 840px) {
    min-height: 336px;
  }

  @media (max-width: 544px) {
    min-height: 314px;
  }
`

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 544px) {
    padding: 24px 16px;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.unit.getRem(37)};
  font-weight: 600;
  margin: 0 0 24px 0;
  padding: 0 64px;

  @media (max-width: 544px) {
    font-size: ${props => props.theme.unit.getRem(24)};
    padding: 0 8px;
  }
`

const Description = styled.h3`
  color: ${props => props.theme.colors.white};
  font-family: CircularStd;
  font-size: ${props => props.theme.unit.getRem(21)};
  font-weight: 400;
  text-align: center;
  max-width: 536px;
  margin: 0 0 32px 0;
  padding: 0 64px;

  @media (max-width: 544px) {
    font-size: ${props => props.theme.unit.getRem(18)};
    padding: 0 8px;
  }
`

const GetStartedButton = styled.a`
  background-color: ${props => props.theme.colors.green};
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.unit.getRem(18)};
  font-weight: 600;
  text-align: center;
  width: 256px;
  margin: 0;
  padding: 16px 0;
  transition: background-color 250ms ease-in;

  :hover {
    background-color: ${props => props.theme.colors.hover.green};
  }

  :focus {
    background-color: ${props => props.theme.colors.focus.green};
  }

  @media (max-width: 544px) {
    font-size: ${props => props.theme.unit.getRem(12)};
    text-transform: uppercase;
    width: 184px;
    padding: 8px 0;
  }
`

const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>Contact US</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
            est pharetra, viverra quam quis, gravida enim.
          </Description>

          <GetStartedButton href="/" style={{ textDecoration: "none" }}>
            Get started for free
          </GetStartedButton>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default Banner
