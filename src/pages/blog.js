import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Layout from '../components/Layout'

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const BlogCard = styled(Link)`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`

const CardContent = styled.div`
  padding: 1rem;
`

const BlogPage = ({ data }) => {
  const posts = data?.allContentfulBlogPost?.nodes || []

  if (posts.length === 0) {
    return (
      <Layout>
        <h1>Blog</h1>
        <p>No blog posts found. Check your Contentful connection.</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>Blog</h1>
      <BlogGrid>
        {posts.map(post => {
          const image = post.heroImage ? getImage(post.heroImage) : null
          return (
            <BlogCard key={post.slug} to={`/blog/${post.slug}`}>
              {image && <GatsbyImage image={image} alt={post.title} />}
              <CardContent>
                <h2>{post.title}</h2>
                <p><strong>Category:</strong> {post.category || 'Uncategorized'}</p>
                <small>{post.createdAt}</small>
              </CardContent>
            </BlogCard>
          )
        })}
      </BlogGrid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost(sort: {createdAt: DESC}) {
      nodes {
        title
        slug
        category
        createdAt(formatString: "MMMM Do, YYYY")
        heroImage {
          gatsbyImageData(placeholder: BLURRED, width: 300, height: 200)
        }
      }
    }
  }
`

export default BlogPage