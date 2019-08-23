import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import headerImage from '../images/applicationDevelopment.png'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { css } from '@emotion/core'



const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`


const Post = styled.li`
  position: relative;
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
  img{
  border: 1px solid ${props => props.theme.colors.secondary};
  }
`

const Title = styled.h2`
  text-transform: capitalize;
  margin: 1rem 1rem 0.2rem 1rem;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  font-weight: bold;
`

const Description = styled.h2`
  font-weight: 600;
  text-transform: capitalize;
  margin: 0.2rem 1rem 0.5rem 1rem;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
`
const Date = styled.h3`
  margin: 0.5rem 1rem 0.5rem 1rem;
  color: gray;
  font-size: 14px;
`

const descriptionss = styled.div`
  width: 190px;
  height: 60px;
  font-family: Lato;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  color: #2b1e1e;
  font-weight: bold;
  margin: 0.5rem 1rem 0.5rem 1rem;
`



const Experts =  ({ data, pageContext }) => {
  const experts = data.allContentfulExpertise.edges
  // const imageReference = experts[0].heroImage
  const postNode = {
    title: `Experts - ${config.siteTitle}`,
  }
  console.log(experts)
  return (
    <Layout headerImage={headerImage}>
      <Helmet>
        <title>{`Experts - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="Experts" customTitle />

      <Container>
      </Container>

      <Container>
        <PageTitle>Experts</PageTitle>
        <div>
          <List>



            {experts.map(({ node: expert }) => (
              <Post key={expert.id}>
                <a href={`/${expert.slug}/`}>
                  <Img fluid={expert.heroImage.fluid} backgroundColor={'#eeeeee'} />
                  <Title>{expert.title}</Title>
                  <Description>{expert.body.body}</Description>
                  <Date>{expert.publishDate}</Date>
                </a>
              </Post>
            ))}

            {/*{experts.map(({ node: expert }) => (*/}
            {/*  <Post key={expert.id}>*/}
            {/*    <Link to={`/${expert.slug}/`}>*/}
            {/*      <Img fluid={expert.heroImage.fluid} backgroundColor={'#eeeeee'} />*/}
            {/*      <Title>{expert.title}</Title>*/}
            {/*      <Description>{expert.body.body}</Description>*/}
            {/*      <Date>{expert.publishDate}</Date>*/}
            {/*    </Link>*/}
            {/*  </Post>*/}
            {/*))}*/}
          </List>


          {/*{experts.map(({ node: expert }) => (*/}
          {/*  <div key={expert.id}>*/}
          {/*  <h1>{expert.title}</h1>*/}
          {/*  /!*<img src={expert.heroImage.fluid.src} alt='' height='10px' width='10px'/>*!/*/}
          {/*  </div>*/}
          {/*))}*/}


        </div>
      </Container>
      <Container>

      </Container>
    </Layout>
  )
}


export const query = graphql`
  query {
    allContentfulExpertise(
      sort: { fields: [publishDate], order: DESC }
    )
    {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          body {
            body
            id
          }
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`


export default Experts
