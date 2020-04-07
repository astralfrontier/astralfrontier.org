import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { flatten, identity, map, path, pipe, sortBy, uniq } from 'ramda'

/**
 * Find all tags used on the site.
 * Sort alphabetically.
 * TODO: relative font sizes.
 */

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          fields {
            tags
          }
        }
      }
    }
  `)

  const onlyTags = map(path(['fields', 'tags']), data.allMarkdownRemark.nodes)
  const tags = pipe(
      flatten,
      uniq,
      sortBy(identity),
  )(onlyTags)

  return (
      <>
        {map(tag => (<><Link to={`/tags/${tag}`}>{tag}</Link>{' '}</>), tags)}
      </>
  )
}
