// external librairies
import React from 'react'
import { graphql } from 'gatsby'

// internal data
import Layout from '../components/layout'
import SEO from '../components/seo'

// style
import "../styles/main.scss"

export default ({ data }) => {
  const page = data.wordpressPage
  return (
    <Layout slug={page.slug}>
      <SEO id={page.title} title={page.title} keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <h1 dangerouslySetInnerHTML= {{ __html: page.title}} />
        <div dangerouslySetInnerHTML= {{ __html: page.content}} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
    }
  }`
