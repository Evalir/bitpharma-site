import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "./Container"

import LOGO from "../images/bitpharma.png"
import HEADER_BACKGROUND from "../images/header_background.svg"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 30px auto;
  max-width: 100%;

  ul {
    list-style-type: none;
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;

    li {
      font-size: ${props => props.theme.unit.getRem(18)};
      font-weight: 500;

      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    ul {
      margin: 16px 0;
    }
  }
`

const Logo = styled.img`
  height: 64px;
  width: 64px;
`

const LeftMenu = styled.ul`
  flex: 1;
  margin-left: 50px;

  li {
    margin-left: 20px;

    :first-child {
      margin-left: 0;
    }

    a {
      color: ${props => props.theme.colors.black};
    }
  }
`

const RightMenu = styled.ul`
  li {
    margin-left: 32px;
    a {
      color: ${props => props.theme.colors.white};
    }
  }

  @media (max-width: 768px) {
    li {
      margin-left: 0;
      padding: 8px 32px;
      background: #8e2de2;
      background: linear-gradient(
        to right,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.secondary}
      );
      border-radius: 24px;
    }
  }
`

const Shape = styled.img`
  position: absolute;
  z-index: -1;
  right: 0;

  @media (max-width: 1280px) {
    max-width: 70%;
  }

  @media (max-width: 1024px) {
    max-width: 65%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Header = ({ uri }) => {
  return (
    <React.Fragment>
      <Shape src={HEADER_BACKGROUND} />
      <Container>
        <Wrapper>
          <Logo src={LOGO} />

          <LeftMenu>
            {uri === "business" && (
              <React.Fragment>
                <li>
                  <Link to="#">Pricing</Link>
                </li>
                <li>
                  <Link to="#">Contact</Link>
                </li>
              </React.Fragment>
            )}
          </LeftMenu>

          <RightMenu>
            <li>
              <Link to="/">App</Link>
            </li>
            <li>
              <Link to="/business">Bit for Business</Link>
            </li>
          </RightMenu>
        </Wrapper>
      </Container>
    </React.Fragment>
  )
}

export default Header
