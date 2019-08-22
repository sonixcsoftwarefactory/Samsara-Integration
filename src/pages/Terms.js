import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import headerImage from '../images/applicationDevelopment.png'

const Terms = ({ data }) => {
  const postNode = {
    title: `Term - ${config.siteTitle}`,
  }

  return (
    <Layout headerImage={headerImage}>
      <Helmet>
        <title>{`Term - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Term" customTitle />

      <Container>
        <PageTitle>Term Pageeeee</PageTitle>

      </Container>
    </Layout>
  )
}

export default Terms
