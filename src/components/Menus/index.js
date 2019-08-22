import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PageTitle from '../PageTitle'
import Container from '../Container'

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
  height:500px;
  display: flex;
`

const HeaderImg = styled.img.attrs({
  src: 'image url here'
})`
  width:auto;
  height:auto;
  margin: auto; 
  border: 1px #ffffff00;
`
// border: 1px solid #ffffff00;

const Header = styled.header`
  background: ${props => props.theme.colors.base};
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
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
  borderBottom: 'solid 1px rgb(237, 153, 62)',
}

const Menu = (props) => {
  console.log(props)
  return (
    <Header>
      <Nav>
        <ul>
          <li>

          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/Careers/" activeStyle={activeLinkStyle}>
              Careers
            </Link>
          </li>
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
            <Link to="/" activeStyle={activeLinkStyle}>
              Sonixccc
            </Link>
          </li>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Experties
            </Link>
          </li>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Case Studies
            </Link>
          </li>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Blog
            </Link>
          </li>
        </ul>
      </Nav>
      <ImageWrapper>
        <HeaderImg src={props.imgSrc}></HeaderImg>
      </ImageWrapper>
    </Header>
  )
}

export default Menu
