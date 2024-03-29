import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import CircularStdBold from "../fonts/CircularStd-Bold.woff"
import CircularStdMedium from "../fonts/CircularStd-Medium.woff"
import CircularStdBook from "../fonts/CircularStd-Book.woff"

import theme from "../theme"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CircularStd';
    src: url(${CircularStdBold}) format('woff');
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url(${CircularStdMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
  }

  @font-face {
    font-family: 'CircularStd';
    src: url(${CircularStdBook}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
  }

  html {
    color: #354147;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: CircularStd;
    letter-spacing: normal;
    -webkit-font-smoothing: antialiased;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .overflow {
    overflow-x: hidden;
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <div className="overflow">{children}</div>
    </React.Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
