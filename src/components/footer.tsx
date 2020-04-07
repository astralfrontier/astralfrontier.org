import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useStaticQuery, graphql } from "gatsby"

import TagCloud from './tag-cloud'

const Footer = _props => {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Container fluid>
      <Row>
        <Col className="footer-identification" md={3}>
          &copy; 2020 @{data.site.siteMetadata.author}
        </Col>
        <Col className="footer-tag-cloud" md={6}>
          <TagCloud />
        </Col>
        <Col className="footer-links" md={3}>
          <a href={`https://twitter.com/${data.site.siteMetadata.author}`}>Twitter</a>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
