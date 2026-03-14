import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const ProjectsPage = () => {
  // This will be replaced with Contentful data later
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'This portfolio website built with Gatsby and Contentful',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/harpreetsaini/harpreet-saini-p1'
    },
    {
      title: 'Weather App',
      description: 'A weather application using React and OpenWeatherMap API',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/harpreetsaini/weather-app'
    },
    {
      title: 'Task Manager',
      description: 'A full-stack task management application',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/harpreetsaini/task-manager'
    }
  ]

  return (
    <Layout>
      <h1>Projects</h1>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ProjectLinks>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            </ProjectLinks>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Layout>
  )
}

export default ProjectsPage
