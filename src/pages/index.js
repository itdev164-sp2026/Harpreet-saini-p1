import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Hero = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.3s;
  margin: 0 0.5rem;

  &:hover {
    transform: translateY(-2px);
  }

  &.outline {
    background: transparent;
    border: 2px solid white;
    color: white;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <Hero>
        <Title>Harpreet Saini</Title>
        <Subtitle>Welcome to my portfolio website</Subtitle>
        <div>
          <Button to="/blog">View Blog</Button>
          <Button to="/projects" className="outline">View Projects</Button>
        </div>
      </Hero>
      
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2>About This Site</h2>
        <p>This site is built with Gatsby, Styled Components, and Contentful.</p>
        <p>Check out my blog posts and projects below!</p>
      </div>
    </Layout>
  )
}

export default IndexPage