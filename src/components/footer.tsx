import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useStaticQuery, graphql } from "gatsby"

import TagCloud from './tag-cloud'

const Footer = _props => {
  return (
    <Container fluid>
      <Row>
        <Col className="footer-tag-cloud">
          <TagCloud />
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
