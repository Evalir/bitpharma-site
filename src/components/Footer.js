import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "./Container"

import LOGO from "../images/bitpharma.png"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, minmax(120px, auto));
  grid-gap: 96px;
  padding: 100px 0 48px 0;

  @media (max-width: 840px) {
    grid-template-columns: repeat(3, minmax(128px, auto));
    grid-gap: 40px;
    padding: 80px 0 48px 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(128px, auto));
    grid-gap: 40px;
    padding: 80px 0 48px 0;
  }

  @media (max-width: 544px) {
    grid-template-columns: repeat(2, minmax(128px, auto));
    grid-gap: 40px;
    padding: 80px 0 48px 0;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 840px) {
    order: 1;
    grid-column: span 3;
  }

  @media (max-width: 768px) {
    order: 1;
    grid-column: span 2;
  }

  img {
    margin-bottom: 16px;
    max-width: 32px;
  }

  span {
    color: ${props => props.theme.colors.gray};
    font-size: ${props => props.theme.unit.getRem(16)};
    display: block;
  }
`

const Section = styled.div`
  h3 {
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.unit.getRem(18)};
    font-weight: 500;
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      color: ${props => props.theme.colors.gray};
      font-size: ${props => props.theme.unit.getRem(16)};
      font-weight: 400;
      margin-bottom: 16px;

      a {
        color: ${props => props.theme.colors.gray};
        text-decoration: none;
      }
    }
  }
`

const Footer = props => {
  return (
    <div style={{ backgroundColor: props.white ? "#ffffff" : "#f6f6f6" }}>
      <Container>
        <Wrapper>
          <Info>
            <img alt="bit logo" src={LOGO} />
            <span style={{ marginBottom: "8px" }}>
              © Copyright 2019 Bitpharma
            </span>
            <span>All rights reserved</span>
          </Info>

          <Section>
            <h3>Business</h3>
            <ul>
              <li>
                <Link to="/business">About</Link>
              </li>
              <li>
                <Link to="/business/pricing">Pricing</Link>
              </li>
            </ul>
          </Section>

          <Section>
            <h3>Company</h3>
            <ul>
              <li>
                <Link to="/#">About</Link>
              </li>
              <li>
                <Link to="/#">Terms</Link>
              </li>
              <li>
                <Link to="/#">Privacy</Link>
              </li>
            </ul>
          </Section>

          <Section>
            <h3>Help & Contact</h3>
            <ul>
              <li>
                <Link to="/#">FAQs</Link>
              </li>
              <li>
                <Link to="/#">Contact us</Link>
              </li>
            </ul>
          </Section>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Footer
