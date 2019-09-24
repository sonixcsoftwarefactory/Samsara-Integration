import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../../images/logoBlack.svg'
import backgroundlogo from '../../images/golden_background_factory_software_development.svg'
import { css } from '@emotion/core'
// import PageTitle from '../PageTitle'
// import Container from '../Container'

const userInput = '../../images/golden_background_factory_software_development.svg'
// orange boader button
const LinkButtonTo = props => (
  <a style={{ textDecoration:`none`,color:`#ed993e`,border:`solid 1px #ed993e`,padding:'5px 10px 5px 10px'}}
     href={props.href}
     rel={props.rel}
     target={props.target}
  >
    {props.children}
  </a>
)

const ImageWrapper = styled.div`
  border: 1px #ffffff00;
  display: flex;
`

const logoImg = styled.img.attrs({
  src: 'image url here'
})

const HeaderImg = styled.img.attrs({
  src: 'image url here'
})`
  width:auto;
  height:auto;
  margin: auto; 
  margin-top: -105px !important;
  border: 1px #ffffff00;
  z-index: -1;
`

const logoImage2 = styled.img.attrs({
  src: 'image url here'
})`
  width:auto;
  height:auto;
  margin: auto; 
  border: 1px #ffffff00;
`

// border: 1px solid #ffffff00;

// background: url(${userInput});
// background-repeat: no-repeat !important;
// background-size: cover;
// height: 600px;
// background-position: center !important;
// background: ${props => props.theme.colors.base_white};

const Header = styled.header`
  position: absolute !imortant;
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
    margin-top:10px;
    margin-botton:10px;
  }

  li {
    text-decoration: none !important;
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
    &:not(:first-child) {
    text-align: center;
    white-space: nowrap;
    margin: 5px 10px 5px 10px;
    }
  }

  a {
    text-decoration: none !important;
    color: black;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      color: black;
      border-Bottom: solid 1px rgb(237, 153, 62);
    }
  }
`
// DarkGray
const activeLinkStyle = {
  color: 'black',
  borderBottom: 'solid 1px rgb(237, 153, 62)',
}

const Menu = (props) => {
  console.log(props)
  console.log(props.backgroundlogo)
  console.log(props.imgSrc)
  return (
    <Header>
      {/*css={css`background-image: url(${props.imgSrc})`}*/}
      <Nav>
        <ul>
          <li>

          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About us
            </Link>
          </li>
          {/*<li>*/}
          {/*  <Link to="/" activeStyle={activeLinkStyle}>*/}
          {/*    Events*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link to="/Careers/" activeStyle={activeLinkStyle}>*/}
          {/*    Careers*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li>
            <Link to="/contact/" activeStyle={activeLinkStyle}>
              Contact
            </Link>
          </li>
          <li>
            <LinkButtonTo
              href="/contact/"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              Get in Touch
            </LinkButtonTo>
          </li>
        </ul>

        <ul>
          <li>
            <div to="/" activeStyle={activeLinkStyle}>
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
                  <img src={logo}/>
                </div>
                <div css={css`font-size: 20px;
                  font-weight: bold;`}>
                  Software Factory
                </div>

              </div>
            </div>
            {/*<Link to="/" activeStyle={activeLinkStyle}>*/}
            {/*  <div css={css`display: flex;`}>*/}
            {/*    <string>Sonixc</string>*/}
            {/*    <div css={css` width: 50px;*/}
            {/*      height: 50px;*/}
            {/*      margin-top: -15px;*/}
            {/*      margin-left: 13px;*/}
            {/*      margin-right: 13px;`}>*/}
            {/*      <img src={logo}/>*/}
            {/*    </div>*/}
            {/*    Software Factory*/}
            {/*  </div>*/}
            {/*</Link>*/}
          </li>
          {/*<li>*/}
          {/*  <Link to="/Experts/" activeStyle={activeLinkStyle}>*/}
          {/*    Experties*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link to="/" activeStyle={activeLinkStyle}>*/}
          {/*    Case Studies*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Blog
            </Link>
          </li>
        </ul>
      </Nav>
      {/*<ImageWrapper>*/}
      {/*  <HeaderImg src={backgroundlogo}></HeaderImg>*/}
      {/*</ImageWrapper>*/}
      <ImageWrapper>
        <HeaderImg src={props.imgSrc}></HeaderImg>
      </ImageWrapper>
    </Header>
  )
}

export default Menu
