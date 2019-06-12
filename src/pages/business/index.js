import React from "react"
import styled from "styled-components"

import Layout from "../../components/Layout"

import Header from "../../components/Header"
import Hero from "../../components/HeroBusiness"
import Container from "../../components/Container"
import Footer from "../../components/Footer"

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

const Article = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 80px;
  padding: 100px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    grid-gap: 48px;
    padding: 50px 0;

    ${Info} {
      order: -1;
    }
  }

  img {
    max-width: 100%;
  }
`

const IndexPage = props => {
  return (
    <Layout>
      <Header uri={props["*"]} />

      <Container>
        <Hero />
      </Container>

      <Container>
        <Article>
          <img
            alt="orders management"
            src={require("../../images/orders-management.svg")}
          />

          <Info style={{ textAlign: "left", padding: "0 0 24px 0" }}>
            <h1>Manage your orders!</h1>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </div>
          </Info>
        </Article>
      </Container>

      <Container style={{ marginBottom: 100 }}>
        <Info>
          <h1>Easy, insanely fast client setup</h1>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </div>
        </Info>
      </Container>

      <Footer />
    </Layout>
  )
}

export default IndexPage
