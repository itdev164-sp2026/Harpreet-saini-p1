const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create blog post pages
  const blogResult = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `)

  // Handle errors
  if (blogResult.errors) {
    console.error('Error fetching blog posts:', blogResult.errors)
    return
  }

  // Create pages for each blog post
  const posts = blogResult.data?.allContentfulBlogPost?.nodes || []
  
  posts.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug: post.slug,
      },
    })
  })

  console.log(`Created ${posts.length} blog post pages`)

  // You can add similar code for projects here
}
