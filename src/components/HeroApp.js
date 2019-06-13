import React from "react"
import styled from "styled-components"

import APPLE_STORE from "../images/apple-store.svg"
import GOOGLE_PLAY from "../images/google-play.svg"

import IPHONE from "../images/iphone.png"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  max-width: 720px;
  grid-gap: 32px;

  h1 {
    margin: 0;
    padding: 0;
  }

  .info {
    color: ${props => props.theme.colors.gray};
    line-height: 1.5;
    max-width: 400px;
    margin-top: 96px;

    h1 {
      color: ${props => props.theme.colors.black};
    }

    .stores-container {
      margin: 32px 0;

      img {
        margin-right: 16px;
        cursor: pointer;
      }
    }
  }

  .iphone {
    max-width: 300px;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    margin-top: 0;

    .info {
      margin-top: 32px;
    }
  }
`

const Hero = props => {
  return (
    <Wrapper>
      <div className="info">
        <h1>Bitpharma App</h1>
        <div className="stores-container">
          <img alt="apple store" src={APPLE_STORE} />
          <img alt="google play" src={GOOGLE_PLAY} />
        </div>
        Bitpharma is the new trend in the pharmaceutical market, with this product customers can make online purchases and see the status of their orders in real time. Also the app get to schedule and notify users for their medicine.

      </div>

      <img className="iphone" alt="iphone" src={IPHONE} />
    </Wrapper>
  )
}

export default Hero
