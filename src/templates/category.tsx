import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PageListCols from '../components/page-list-cols'

const PageList = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { category },
}) => (
  <Layout toggleTransparent={false}>
    <SEO title={`Posts in category "${category}"`} />
    <PageListCols pages={edges} numPages={1} currentPage={1} />
  </Layout>
)

export default PageList

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { fields: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            path
            category
          }
          excerpt
          timeToRead
          frontmatter {
            date(formatString: "MMM D YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`