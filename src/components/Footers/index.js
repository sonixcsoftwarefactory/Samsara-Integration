import React from 'react'
import styled from 'styled-components'
import { css } from '@emotion/core'
// import config from '....../utils/siteConfig'
import config from '../../utils/siteConfig'
import logoWhite from '../../images/logoWhite.svg'
import Twitterlogo from '../../images/Twitter_Logoe_Software_Factory.svg'
import InstaLogo from '../../images/Instagram_Logo_Software_Factory.svg'
import LinkedlnLogo from '../../images/LinkedIn_Logo_Software_Factory.svg'
import FaceLogo from '../../images/Facebook_Logo_Software_Factory.svg'
import { Link } from 'gatsby'

const KnowledgeBaseBtn = props => (
  <a style={{ textDecoration:`none`,color:`rgb(255, 255, 255)`,border:`solid 1px rgb(255, 255, 255)`,padding:'9px 15px 9px 15px', borderRadius:'0px 0px 15px 0px'}}
     href={props.href}
     rel={props.rel}
     target={props.target}
  >
    {props.children}
  </a>
)



const SocialMediaLogoStyle = styled.img.attrs({
  src: 'image url here'
})`
  width: 14%;
  display: inline-block;
  height:auto;
  margin: auto;
  margin-left:0px;
  margin-right:7px;
  margin-top:25px;
`

const FooterWrapper = styled.footer`
  display: flow-root;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  width: 100%;
  color: ${props => props.theme.colors.footerListItem};  
  border-top: 1px solid ${props => props.theme.colors.secondary};
  background-color: black;
  margin-top: 10px;
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  margin-top:10px;
  margin-bottom:20px;
  margin-top: 200px;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const SubFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  margin-top:10px;
  margin-bottom:20px;
  border-top: solid 1px #979797;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: wrap-reverse;;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.footerListItem};
    &:hover {
      color: ${props => props.theme.colors.footerListItemHover};
    }
    &:visited {
      color: ${props => props.theme.colors.footerListHeading};
    }
  }
`
// width: 70px;
// height: 21px;
// font-family: LucidaGrande;
// font-size: 18px;
// font-weight: normal;
// font-style: normal;
// font-stretch: normal;
// line-height: normal;
// letter-spacing: -1.26px;
// color: #ffffff;
// style={{ marginRight: `1rem` }}
//

const LinkTo = props => (
  <a style={{ textDecoration:`none`}}
     href={props.href}
     rel={props.rel}
     target={props.target}
  >
    {props.children}
  </a>
)


const NavItems = props => (
  <li  css={css`
          margin-right:1rem;
          margin-top: 0.5rem;
          text-align: left;
          width: 100%;
          height: 100%;
          font-size: 18px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: -1.26px;
          ${styled => styled.theme.greaterThan(`xlarge`)} {
            margin: 0;
          }`} >
    <LinkTo
      href={props.href}
      rel={props.rel}
      target={props.target}
    >
      {props.children}
    </LinkTo>
  </li>
)

const NavItemHeading = props => (
  <div  css={css`
  width: 100%;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.02px;
  margin-bottom: 5px;
  color: #434f53;`
  } >
    {props.children}
  </div>
)


const NavItemHeading2 = props => (
  <div  css={css`
    letter-spacing: -1.16px;
    width: 267px;
    height: 39px;
    /* font-family: LucidaGrande; */
    font-size: 30px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    margin-bottom: 10px;
    color: #546264;`
  } >
    {props.children}
  </div>
)




const CopyRight = props => (
  <div css={css` margin-top: 0.5rem; text-align: center; ${styled => styled.theme.greaterThan(`xlarge`)} { margin: 0; } `} >
    <span>Copyright ©</span>
    <span css={css` padding: 0 0.5rem; `} >
          {props.yearOfCreation}-
      {new Date().getFullYear()}
        </span>
    <span> <a css={css` text-decoration: none; color: ${props => props.theme.colors.footerListItem}; `}
              href={props.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
    > {props.children}</a>
        </span>
  </div>
)






const Footer = () => (
  <FooterWrapper>

    <Wrapper>
      <div css={css`display: flex;`}>
        <div css={css`font-size: 20px;
    font-weight: bold;`}>
          SONIXC
        </div>
        <div css={css` width: 50px;
                  height: 50px;
                  margin-top: -15px;
                  margin-left: 13px;
                  margin-right: 13px;`}>
          <img src={logoWhite}/>
        </div>
        Software Factory
      </div>
      <List>
        <Item>
          <ul style={{ listStyle: `none` }}>
            {/*<NavItems  href="https://www.contentful.com/"*/}
            {/*        rel="nofollow noopener noreferrer"*/}
            {/*        target="_blank">Experties</NavItems>*/}
            {/*<NavItems  href="https://www.contentful.com/"*/}
            {/*           rel="nofollow noopener noreferrer"*/}
            {/*           target="_blank">Case Studies</NavItems>*/}
            <NavItems  href="https://www.contentful.com/"
                       rel="nofollow noopener noreferrer"
                       target="_blank">Blog</NavItems>
            <NavItems  href="/about/"
                       rel="nofollow noopener noreferrer"
                       target="_blank">About us</NavItems>
            {/*<NavItems  href="https://www.contentful.com/"*/}
            {/*           rel="nofollow noopener noreferrer"*/}
            {/*           target="_blank">Careers</NavItems>*/}
            {/*<NavItems  href="https://www.contentful.com/"*/}
            {/*           rel="nofollow noopener noreferrer"*/}
            {/*           target="_blank">Events</NavItems>*/}
            <NavItems  href="/contact/"
                       rel="nofollow noopener noreferrer"
                       target="_blank">Contact</NavItems>
            {/*<NavItems  href="https://www.contentful.com/"*/}
            {/*           rel="nofollow noopener noreferrer"*/}
            {/*           target="_blank">Development Centers</NavItems>*/}
            {/*<NavItems  href="https://www.contentful.com/"*/}
            {/*           rel="nofollow noopener noreferrer"*/}
            {/*           target="_blank">Book a project</NavItems>*/}
          </ul>
        </Item>
        <Item>
          <div style={{width:`73px !important`, color: `black`}}>
            test code remove this in the end.
          </div>
          <NavItemHeading>

          </NavItemHeading>
          <ul style={{ listStyle: `none`}}>
            {/*<NavItems  href="https://www.sonixc.com"*/}
            {/*           rel="noopener noreferrer"*/}
            {/*           target="_blank"></NavItems>*/}
            {/*<NavItems  href="https://www.sonixc.com"*/}
            {/*           rel="noopener noreferrer"*/}
            {/*           target="_blank"> Application Development</NavItems>*/}
            {/*<NavItems  href="https://www.sonixc.com"*/}
            {/*           rel="noopener noreferrer"*/}
            {/*           target="_blank"> Research & Development</NavItems>*/}
            {/*<NavItems  href="https://www.sonixc.com"*/}
            {/*           rel="noopener noreferrer"*/}
            {/*           target="_blank"> Support Services</NavItems>*/}
            {/*<NavItems  href="https://www.sonixc.com"*/}
            {/*           rel="noopener noreferrer"*/}
            {/*           target="_blank"> Big Data & Analytics</NavItems>*/}
            {/*<NavItems  href="https://www.sonixc.com"*/}
            {/*           rel="noopener noreferrer"*/}
            {/*           target="_blank"> QA & Software Testing</NavItems>*/}
            {/*<NavItems  href="https://www.sonixc.com"*/}
            {/*           rel="noopener noreferrer"*/}
            {/*           target="_blank"> Internet of Things</NavItems>*/}
          </ul>



        </Item>
        <Item>
          <div css={css` width: 138px;
                height: 20px;
                font-family: Helvetica;
                font-size: 17px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                letter-spacing: normal;
                line-height: normal;
                letter-spacing: 0px;
                color: #ffffff;`}>
            +49.89.21231.460 </div>

          <div css={css` width: 104px;
            height: 19px;
            font-family: Helvetica;
            font-size: 16px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0px;
            color: #e9f0f4;`}
          >
            sonixc GmbH</div>
          <div css={css`width: 151px;
              font-family: Helvetica;
              font-size: 14px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: normal;
              letter-spacing: 0px;
              color: #929fa2;`}>
            <div>Agnes-Pockels-Bogen</div>
            <div>80992 Munich, Bavaria</div>
            <div>Germany</div>
          </div>
          <a  css={css` text-decoration: none; color: ${props => props.theme.colors.squash} !important; `}
              href={"mailto:"+config.siteEmail}
              rel="_blank"
              target="noopener noreferrer"
          >
            {config.siteEmail}
          </a>
        </Item>
        <Item>
          <NavItemHeading2>
            CLIENT SUPPORT
          </NavItemHeading2>
          <div css={css`width: 190px;
              font-family: Helvetica;
              font-size: 11px;
              font-weight: normal;
              font-style: normal;
              font-stretch: normal;
              line-height: normal;
              letter-spacing: 0px;
              margin-bottom:10px;
              color: #929fa2;`}>
            <div>Don't forget that you can always talk to</div>
            <div>your client success coach directly</div>
            <div>Germany</div>
          </div>
          <div css={css` width: 190px;
            height: 19px;
            font-family: Helvetica;
            font-size: 15px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0px;
            margin-bottom:25px;
            color: #e9f0f4;`}
          >
            Drop us a line</div>
          <KnowledgeBaseBtn
            href="/contact/"
            rel="nofollow noopener noreferrer"
            target="_blank"
          >
            Knowledge Base  ➝
          </KnowledgeBaseBtn>
          <div>
            <SocialMediaLogoStyle src={Twitterlogo}/>
            <SocialMediaLogoStyle src={InstaLogo}/>
            <SocialMediaLogoStyle src={LinkedlnLogo}/>
            <SocialMediaLogoStyle src={FaceLogo}/>
          </div>

        </Item>
      </List>

    </Wrapper>



    <SubFooter>
      <strong  css={css` margin: 10px;`} ><CopyRight yearOfCreation={config.yearOfCreation}
                                                     siteUrl={config.siteUrl}>{config.siteTitle}
      </CopyRight></strong>
      <ul >
        <li css={css` display:inline-block; margin: 10px; color:white;`}>
          <a
            css={css` text-decoration:none; color:white;`}
            href='/Terms/'
            rel="_blank"
            target="noopener noreferrer"
          >
            Terms of Use
          </a>
        </li>
        <li css={css` display:inline-block; margin: 10px;`}>
          <a
            css={css` text-decoration:none; color:white;`}
            href='/Terms/'
            rel="_blank"
            target="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li css={css` display:inline-block; margin: 10px;`}>
          <a
            css={css` text-decoration:none; color:white;`}
            href='/Terms/'
            rel="_blank"
            target="noopener noreferrer"
          >
            SiteMap
          </a>
        </li>
      </ul>
    </SubFooter>


  </FooterWrapper>

)

export default Footer
