import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactCard'
import SEO from '../components/SEO'
import headerImage from '../images/golden_background_factory_software_development.svg'
import { css } from '@emotion/core'

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout  headerImage={headerImage}>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Contact Us</PageTitle>
        <div css={css`margin: 0 auto !important; 
                      display: table;`}>
          <ContactForm />
        </div>
      </Container>
    </Layout>
  )
}

export default Contact
