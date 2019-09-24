import React from 'react'
import styled from 'styled-components'
import ContactForm from '../ContactCard'
import Layout from '../Layout'
import Container from '../Container'
import PageTitle from '../PageTitle'
import FaceLogo from '../../images/Facebook_Logo_Software_Factory.svg'
import { css } from '@emotion/core'
import config from '../../utils/siteConfig'
import icon1 from '../../images/Increase_renevenue_Icon.svg'
import icon2 from '../../images/Cut_costs_with_our_developers_Icon.svg'
import icon3 from '../../images/increase_satisfaction_with_our_factory.svg'



const ContactQualityIcons = styled.img.attrs({
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

const HeadingIcons = props => (
  <div  css={css`
      width: 100%;
      height: 30%;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      padding: 20px;
      font-family: Helvetica;
      text-align: center;
      color: #ffffff;`
  } >

    <div css={css`text-align: center;`}>
      <ContactQualityIcons src={props.icon}></ContactQualityIcons>
    </div>
    <div css={css`
  height: 24px;
  font-family: Helvetica;
  font-size: 20px;
  color: #ffffff;`}>
      {props.heading}
    </div>
    <div css={css`
      width: 359px;
  height: 55px;
  font-size: 15px;
  color: #546264;`}>
      <spna>{props.subline1}</spna><br/>
      <span>{props.subline2}</span><br/>
      <span>{props.subline3}</span>
    </div>

  </div>
)


const ContactCardH = () => (
  <div css={css`background-color:#191919;`}>
    <div  css={css`height: 250px;
                  padding: 50px;
                  font-family: Lato;
                  font-size: 40px;
                  font-weight: bold;
                  font-style: normal;
                  font-stretch: normal;
                  line-height: normal;
                  letter-spacing: 0.06px;
                  background-color:#191919;
                    `}>
      <div css={css`color: #e9f0f4;
        letter-spacing: -0.29px;`}>
        Get in contact
      </div>
      <div css={css`color: #546264;
        letter-spacing: -0.29px;`}>
        Just Walkthrough the
      </div>
      <div  css={css`color: #546264;
        letter-spacing: -0.29px;`}>
        Steps to Success<span css={css`color: #f5a623;`}>.</span>
      </div>
    </div>
    <div  css={css`display: flex;`}>
      <div css={css`background-color:#d4d4d4; padding: 40px;`}>
        <ContactForm />
      </div>
      <div>
        <HeadingIcons heading="Increasing revenue" subline1="Change the way you deliver your service" subline2=" and discover new revenue streams."  icon={icon1}>
        </HeadingIcons>
        <HeadingIcons heading="Increase customer satisfaction" subline1="Increase production uptime, first time fix rate," subline2=" resolution time and reduce errors." icon={icon2}>
        </HeadingIcons>
        <HeadingIcons heading="Cut costs" subline1="With the remote work, no expensive excursions" subline2="  are required, which also reduces your CO2"
                      subline3=" footprint." icon={icon3}>
        </HeadingIcons>

      </div>
    </div>
  </div>
)

export default ContactCardH

//
// <Container>
// <PageTitle>Contact Us</PageTitle>
// <ContactForm />
// </Container>