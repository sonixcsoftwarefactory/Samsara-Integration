import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import headerImage2 from '../images/applicationDevelopment.png'

const Careers = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout headerImage={headerImage2}>
      <Helmet>
        <title>{`Career - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Career" customTitle />

      <Container>
        <PageTitle>Career Pageeeee</PageTitle>
        <img src={headerImage2} alt="Smiley face" height="42" width="42" />

      </Container>
    </Layout>
  )
}

export default Careers
