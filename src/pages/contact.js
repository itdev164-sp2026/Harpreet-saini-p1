import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContactInfo = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: #f5f5f5;
  border-radius: 8px;
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const ContactPage = () => {
  return (
    <Layout>
      <ContactContainer>
        <h1>Contact Me</h1>
        <ContactInfo>
          <p><strong>Email:</strong> harpreet.saini@example.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/harpreetsaini" target="_blank" rel="noopener noreferrer">github.com/harpreetsaini</a></p>
          <p><strong>LinkedIn:</strong> <a href="#" target="_blank" rel="noopener noreferrer">linkedin.com/in/harpreetsaini</a></p>
        </ContactInfo>
      </ContactContainer>
    </Layout>
  )
}

export default ContactPage