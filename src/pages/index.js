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
        Bitpharma consists of a set of applications that allows users to order the purchase of pharmaceutical products through a mobile application. It also offers pharmacies a set of services and applications for managing orders in real time and to efficiently manage the inventory of their products, providing visualization and projections of the sale of each of its products.
        </div>
      </Info>
    </Container>

    <GetStartedBanner />

    <Footer />
  </Layout>
)

export default IndexPage
