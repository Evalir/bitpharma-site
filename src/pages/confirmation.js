import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Container from "../components/Container"
import Footer from "../components/Footer"

import SUCCESS from "../images/confirm.svg"
import ERROR from "../images/error.svg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  background-color: ${props => props.theme.colors.white};
  border-radius: 24px;

  @media (max-width: 544px) {
    padding-top: 40px;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.unit.getRem(45)};
  text-align: center;
  margin: 0;
  padding: 0;

  @media (max-width: 544px) {
    font-size: ${props => props.theme.unit.getRem(26)};
  }
`

const Description = styled.div`
  color: ${props => props.theme.colors.gray};
  font-size: ${props => props.theme.unit.getRem(21)};
  text-align: center;
  margin: 24px 0 48px 0;

  @media (max-width: 544px) {
    font-size: ${props => props.theme.unit.getRem(18)};
    margin: 24px 0 56px 0;
  }
`

const Image = styled.img`
  height: 64px;
  width: 64px;
  margin-bottom: 24px;
`

function getQueryVariable(path, variable) {
  const query = path.substring(1)
  const vars = query.split("&")

  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=")
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1])
    }
  }

  return null
}

const Agencies = ({ location }) => {
  const confirmed =
    getQueryVariable(location.search, "status") === "true" ? true : false
  return (
    <Layout>
      <Header black />

      <Container>
        <Wrapper>
          {confirmed ? <Image src={SUCCESS} /> : <Image src={ERROR} />}
          <Title>Account Confirmation</Title>
          {confirmed ? (
            <Description>Your account has been confirmed.</Description>
          ) : (
            <Description>Your account could not be confirmed.</Description>
          )}
        </Wrapper>
      </Container>

      <Footer white />
    </Layout>
  )
}

export default Agencies
