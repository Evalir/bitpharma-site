import React from "react"
import styled from "styled-components"

import MACBOOK from "../images/macbook.png"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: flex-start;
  grid-gap: 32px;

  h1 {
    margin: 0;
    padding: 0;
  }

  .info {
    color: ${props => props.theme.colors.gray};
    line-height: 1.5;
    max-width: 400px;
    margin-top: 64px;

    h1 {
      color: ${props => props.theme.colors.black};
    }

    .start-container {
      margin: 32px 0;

      img {
        margin-right: 16px;
        cursor: pointer;
      }
    }
  }

  .macbook {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    margin-top: 0;

    .info {
      margin-top: 32px;
    }

    .macbook {
      max-width: 100%;
    }
  }
`

const Button = styled.a`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.unit.getRem(18)};
  font-weight: 600;
  text-align: center;
  width: 256px;
  margin: 0;
  padding: 16px 32px;
  transition: background-color 250ms ease-in;

  :hover {
    background-color: ${props => props.theme.colors.hover.primary};
  }

  :focus {
    background-color: ${props => props.theme.colors.focus.primary};
  }

  @media (max-width: 544px) {
    font-size: ${props => props.theme.unit.getRem(12)};
    text-transform: uppercase;
    width: 184px;
    padding: 16px 32px;
  }
`

const Hero = props => {
  return (
    <Wrapper>
      <div className="info">
        <h1>Bit for Business</h1>
        <div className="start-container">
          <Button href="/business/pricing" style={{ textDecoration: "none" }}>
            Get started now
          </Button>
        </div>
        Bitpharma is the new trend in the pharmaceutical market, with this product customers can make online purchases and see the status of their orders in real time. Also the app get to schedule and notify users for their medicine.

      </div>

      <img className="macbook" alt="macbook" src={MACBOOK} />
    </Wrapper>
  )
}

export default Hero
