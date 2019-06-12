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
        <h1>Lorem Ipsum, blah blah blah, blah blah blah</h1>
        <div className="stores-container">
          <img alt="apple store" src={APPLE_STORE} />
          <img alt="google play" src={GOOGLE_PLAY} />
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et est
        pharetra, viverra quam quis, gravida enim. Integer sit amet nibh mi.
        Duis dapibus lacus risus, nec lobortis lacus ultricies in. Nulla
        facilisi. Vestibulum accumsan tristique scelerisque.
      </div>

      <img className="iphone" alt="iphone" src={IPHONE} />
    </Wrapper>
  )
}

export default Hero
