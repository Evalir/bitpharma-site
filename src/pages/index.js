import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

import Header from "../components/Header"
import Hero from "../components/HeroApp"
import Container from "../components/Container"
import GetStartedBanner from "../components/GetStartedBanner"
import Footer from "../components/Footer"

const Info = styled.div`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.unit.getRem(21)};
  font-weight: 400;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0 24px 0;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.unit.getRem(37)};
    margin: 0;
  }

  .description {
    margin-top: 24px;
  }

  @media (max-width: 544px) {
    font-size: ${props => props.theme.unit.getRem(18)};

    h1 {
      font-size: ${props => props.theme.unit.getRem(24)};
    }
  }
`

const IndexPage = props => (
  <Layout>
    <Header uri={props.uri} />

    <Container>
      <Hero />
    </Container>

    <Container>
      <Info>
        <h1>Easy, insanely fast client setup</h1>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </div>
      </Info>
    </Container>

    <GetStartedBanner />

    <Footer />
  </Layout>
)

export default IndexPage
