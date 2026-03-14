import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  padding: 2rem;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© {new Date().getFullYear()} Harpreet Saini. All rights reserved.</p>
    </FooterWrapper>
  )
}

export default Footer