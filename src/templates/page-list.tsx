import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import PageListCols from '../components/page-list-cols'

const PageList = ({
  data: {
    site: { siteMetadata: { title }},
    allMarkdownRemark: { edges },
  },
  pageContext: { numPages, currentPage },
}) => (
  <Layout toggleTransparent={false}>
    <SEO title={currentPage === 1 ? title : `Page ${currentPage} of ${title}`} />
    <PageListCols pages={edges} numPages={numPages} currentPage={currentPage} />
  </Layout>
)

export default PageList

export const pageListQuery = graphql`
  query pageListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          timeToRead
          fields {
            slug
            path
            category
          }
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