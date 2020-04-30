import React from "react"
import PropTypes from "prop-types"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { Rss, Twitter } from 'react-feather';

import CategoryNavs from "./category-navs"

import Favicon from "./favicon"
import { useStaticQuery, graphql } from "gatsby"

interface HeaderProps {
  siteTitle: string
  toggleTransparent?: boolean
}

const Header = ({ siteTitle, toggleTransparent = false }: HeaderProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Navbar
      bg={toggleTransparent ? "toggle-transparent" : "dark"}
      variant={"dark"}
      expand="md"
      fixed="top"
      id={"gatsby-site-navbar"}
    >
      <Navbar.Brand href="/">
        <Favicon /> {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <CategoryNavs />
        </Nav>
        <Nav className="justify-content-end ml-auto">
          <Nav.Item>
            <Nav.Link
              href={`https://twitter.com/${data.site.siteMetadata.author}`}
            >
              <Twitter />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href={`/rss.xml`}
            >
              <Rss />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
