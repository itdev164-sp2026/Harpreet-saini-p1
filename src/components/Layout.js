import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import Header from './Header'
import Footer from './Footer'

const theme = {
  colors: {
    primary: '#007acc',
    secondary: '#6c757d',
    light: '#f8f9fa',
    dark: '#343a40',
  },
}

const Main = styled.main`
  min-height: calc(100vh - 200px);
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout