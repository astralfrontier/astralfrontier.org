/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { append, keys, mergeRight, reduce } from 'ramda'

function SEO({ description, lang, meta, title, featuredImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const metadata = mergeRight({
    'description': metaDescription,
    'og:title': title,
    'og:description': metaDescription,
    'og:type': 'website',
    'twitter:card': 'summary',
    'twitter:creator': site.siteMetadata.author,
    'twitter:title': title,
    'twitter:description': metaDescription
  }, meta || {})

  if (featuredImage) {
    const imageUrl = new URL(featuredImage.childImageSharp.fluid.src, site.siteMetadata.siteUrl).toString()
    metadata['og:image'] = imageUrl
    metadata['twitter:image'] = imageUrl
  }

  const metadataArray = reduce((a,name) => append({
    name,
    content: metadata[name]
  }, a), [], keys(metadata))

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metadataArray}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO