import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Menu from '../components/Menu'
import Footer from '../components/Footers'
import Menus from '../components/Menus'
import ContactForm from '../components/ContactForm'

const Template = ( props ) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>
      
      <ThemeProvider theme={theme}>
        <>
          <div className="siteContent">
            <Menus imgSrc={props.headerImage}/>
            {props.children}
          </div>
          <ContactForm />
          <Footer/>
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  )
}

export default Template
