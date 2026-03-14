import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Layout from '../components/Layout'

const PostContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
`

const PostTitle = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`

const PostMeta = styled.div`
  color: #666;
  margin-bottom: 2rem;
  font-style: italic;
`

const PostContent = styled.div`
  line-height: 1.8;
  
  h2, h3 {
    margin: 2rem 0 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost
  const image = post.heroImage ? getImage(post.heroImage) : null

  return (
    <Layout>
      <PostContainer>
        {image && <GatsbyImage image={image} alt={post.title} />}
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>
          Category: {post.category || 'Uncategorized'} • Published: {post.createdAt}
        </PostMeta>
        <PostContent>
          <p>Content will be added here once you add a rich text field to your Contentful model.</p>
        </PostContent>
      </PostContainer>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      category
      createdAt(formatString: "MMMM Do, YYYY")
      heroImage {
        gatsbyImageData(placeholder: BLURRED, width: 800)
      }
    }
  }
`

export default BlogPostTemplate