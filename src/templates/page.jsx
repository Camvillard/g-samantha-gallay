//external stuff
import React from 'react'
import { graphql } from 'gatsby'

//internal stuff
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import "../styles/main.scss"

export default ({ data }) => {
  const page = data.wordpressPage
  return (
    <Layout>
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
    }
  }`
