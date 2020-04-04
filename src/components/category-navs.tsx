import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Dropdown from "react-bootstrap/Dropdown"
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"
import {
  append,
  countBy,
  flatten,
  identity,
  isNil,
  keys,
  map,
  path,
  reduce,
  reject,
  sortBy,
  take,
  drop,
} from "ramda"

/**
 * Find all categories used in the site.
 * Sort by page count.
 * Currently returns all categories
 * TODO: Return the first five as navs, followed by a dropdown containing the remaining categories.
 */

const MAX_CATEGORIES = 5

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          fields {
            category
          }
        }
      }
    }
  `)

  const categories = flatten(
    map(path(["fields", "category"]), data.allMarkdownRemark.nodes)
  )
  const catCounts = countBy(identity, reject(isNil, categories))
  const catCountsArray = reduce(
    (a, k) => append([k, catCounts[k]], a),
    [],
    keys(catCounts)
  )
  const sortedCatCounts = map(
    e => e[0],
    sortBy(e => -e[1], catCountsArray)
  )

  return (
    <>
      {map(
        category => (
          <Nav.Item>
            <Nav.Link className={"small-caps"} href={`/category/${category}`}>
              {category}
            </Nav.Link>
          </Nav.Item>
        ),
        take(MAX_CATEGORIES, sortedCatCounts)
      )}
      {sortedCatCounts.length > MAX_CATEGORIES && (
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>more categories</Dropdown.Toggle>
          <Dropdown.Menu>
            {map(
              category => (
                <Dropdown.Item>
                  <Link
                    className={"small-caps"}
                    to={`/category/${category}`}
                  >
                    {category}
                  </Link>
                </Dropdown.Item>
              ),
              drop(MAX_CATEGORIES, sortedCatCounts)
            )}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  )
}
