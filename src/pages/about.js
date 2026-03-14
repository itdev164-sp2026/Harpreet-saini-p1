import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ProfileSection = styled.section`
  margin-bottom: 3rem;
`

const AboutPage = () => {
  return (
    <Layout>
      <AboutContainer>
        <h1>About Me</h1>
        <ProfileSection>
          <p>Hi, I'm Harpreet Saini. I'm a student at ITDEV-164 learning modern web development with React, Gatsby, and Contentful.</p>
          <p>I'm passionate about building fast, responsive websites that provide great user experiences. This portfolio project demonstrates my skills in:</p>
          <ul>
            <li>React for UI components</li>
            <li>Gatsby for static site generation</li>
            <li>Styled Components for styling</li>
            <li>Contentful as a headless CMS</li>
            <li>GitHub for version control</li>
          </ul>
        </ProfileSection>
      </AboutContainer>
    </Layout>
  )
}

export default AboutPage