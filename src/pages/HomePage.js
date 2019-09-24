import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactCard'
import ContactCard from '../components/HomePageCards/ContactCardH'
import SEO from '../components/SEO'
import headerImage from '../images/golden_background_factory_software_development.svg'
import { css } from '@emotion/core'

const Contact = ({ data }) => {
  const postNode = {
    title: `Home Page - ${config.siteTitle}`,
  }

  return (
    <Layout  headerImage={headerImage}>
      <Helmet>
        <title>{`Home - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Home" customTitle />


      <Container css={css`background-color:#191919;`}>
        <ContactCard />
      </Container>
    </Layout>
  )
}

export default Contact
