import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'

const ExpertTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    publishDate,
  } = data.contentfulExpertise
 //  const heroImage2 = data.contentfulExpertise.heroImage
 //
 //  console.log("asdasd"+ heroImage2)
 // console.log("asdasd"+ heroImage)
  return (
    <Layout>

        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>


      <Container>
        <div>
          {title} title: &ldquo;
          {publishDate} Published Date: &ldquo;
          {title}
          &rdquo;
        </div>
      </Container>
    </Layout>
  )
}



export const query = graphql`
  query($slug: String!) {
    contentfulExpertise(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM DD, YYYY")
    }
  }
`




export default ExpertTemplate
