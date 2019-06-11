import React from "react"

import Layout from "../components/Layout"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Container from "../components/Container"

const IndexPage = props => (
  <Layout>
    <Header uri={props.uri} />

    <Container>
      <Hero />
    </Container>
  </Layout>
)

export default IndexPage
