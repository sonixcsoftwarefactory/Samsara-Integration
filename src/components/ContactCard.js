import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { css } from '@emotion/core'
import Checkbox from '@material-ui/core/Checkbox';

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

// margin: 0 auto;
const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    border: none;
    outline: none;
    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.base};
    border-radius: 2px;
    padding: 1em;
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
    &:required {
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const FieldLabel = styled.label`
  margin: 0 0 1em 0;
  width: 100%;
  font-weight: bold;
  font-size: 85%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const FullLengthField = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 100%;
  }
`
const SmallLengthField = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const checkText = styled.div`
    margin: 20px 3px 20px 3px !important;
    font-size: 15px !important;
    text-align: justify !important;
    font-weight: 600 !important;
`

const divText = styled.div`
  border: 1px #ffffff00;
  display: flex;
`




// const checkboxField = styled.checkbox`
//   margin: 0 0 1em 0;
//   width: 100%;
//   @media (min-width: ${props => props.theme.responsive.small}) {
//     width: 100%;
//   }
// `


const Message = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 250px;
  resize: vertical;
`

const Submit = styled.input`
  background: ${props => props.theme.colors.base} !important;
  color: white !important;
  cursor: pointer;
  transition: 0.2s;
  width: 113px;
  height: 51px;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #546264;
  &:hover {
    background: ${props => props.theme.colors.highlight} !important;
  }
`

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const Button = styled.div`
  background: ${props => props.theme.colors.base};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
      firstname:'',
      lastname:'',
      phoneno:'',
      telNumber: '',
      company:'',
      jobTitle:'',
      checkBoxSonixcITContact:false,
      checkBoxPersonalDataProcessing:false,
    }
  }

  handleChangeCheckbox = event => {
    const target = event.target
    console.log(target.name)
    console.log(target.checked)
    const name = target.name
    const value = !target.checked
    this.setState({
      [name]: value,
    })
  }


  handleInputChange = event => {
    const target = event.target
    console.log(target.name)
    console.log(target.value)
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      message: '',
      firstname:'',
      lastname:'',
      phoneno:'',
      company:'',
      jobTitle:'',
      email: '',
      telNumber: '',
      showModal: true,
      checkBoxSonixcITContact:false,
      checkBoxPersonalDataProcessing:false,

    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Form
        name="contact"
        method="Post"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
        action="/about/"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>
        <FieldLabel for="email">
          EMAIL ID
        </FieldLabel>
        <FullLengthField
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />

        <FieldLabel for="firstname">
          FIRST NAME
        </FieldLabel>
        <FieldLabel for="lastname">
          LAST NAME
        </FieldLabel>
        <SmallLengthField
          name="firstname"
          type="text"
          placeholder="First Name"
          value={this.state.firstname}
          onChange={this.handleInputChange}
          required
        />
        <SmallLengthField
          name="lastname"
          type="text"
          placeholder="Last Name"
          value={this.state.lastname}
          onChange={this.handleInputChange}
          required
        />


        <FieldLabel for="telNumber">
          PHONE NUMBER
        </FieldLabel>
        <FullLengthField
          name="telNumber"
          type="tel"
          pattern="[0-9]{3}[-][0-9]{3}[-][0-9]{7}[-][0-9]{1}"
          placeholder="049-176-4762885-8"
          title="Follow this pattern, 049-176-4762885-8"
          value={this.state.telNumber}
          onChange={this.handleInputChange}
          required
        />

        <FieldLabel for="company">
          COMPANY
        </FieldLabel>
        <FieldLabel for="jobTitle">
          JOB TITLE
        </FieldLabel>
        <SmallLengthField
          name="company"
          type="text"
          placeholder="Company"
          value={this.state.company}
          onChange={this.handleInputChange}
          required
        />
        <SmallLengthField
          name="jobTitle"
          type="text"
          placeholder="Job Title"
          value={this.state.jobTitle}
          onChange={this.handleInputChange}
          required
        />

        <FieldLabel for="message">
          Message
        </FieldLabel>
        <Message
          name="message"
          type="text"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleInputChange}
          required
        />

        {/*<div className="checkbox">*/}
        {/*  <label>*/}
        {/*    <input*/}
        {/*      type="checkbox"*/}
        {/*    />*/}

        {/*    check to accept*/}
        {/*  </label>*/}
        {/*</div>*/}

        {/*<input name="employed" type="checkbox" value="false"/>*/}
        <label>
          {/*<input*/}
          {/*  name="checkBoxSonixcITContact"*/}
          {/*  type="checkbox"*/}
          {/*  placeholder="Message"*/}
          {/*  checked={this.state.checkBoxSonixcITContact}*/}
          {/*  onChange={this.handleCheckboxInputChange} />*/}
          <Checkbox
            name="checkBoxSonixcITContact"
            checked={this.state.checkBoxSonixcITContact}
            onChange={this.handleChangeCheckbox}
            value="checkBoxSonixcITContact"
            inputProps={{
              'aria-label': 'primary checkbox',
            }}
          />
          {/*vertical-align: super;*/}
          <span css={css`font-size: 14px !important;
                      font-weight: 500 !important;`}>I agree to be included into sonixc IT systems for the purpose of being contacted.</span>
        </label>
        <label>
          {/*<input*/}
          {/*  name="checkBoxPersonalDataProcessing"*/}
          {/*  type="checkbox"*/}
          {/*  placeholder="Message"*/}
          {/*  checked={this.state.checkBoxPersonalDataProcessing}*/}
          {/*  onChange={this.handleCheckboxInputChange} />*/}
          <Checkbox
            name="checkBoxPersonalDataProcessing"
            checked={this.state.checkBoxPersonalDataProcessing}
            onChange={this.handleChangeCheckbox}
            value="checkBoxPersonalDataProcessing"
            inputProps={{
              'aria-label': 'primary checkbox',
            }}
          />
          {/*vertical-align: super;*/}
          <span css={css`font-size: 14px !important;
                      font-weight: 500 !important;`}>I am informed about processing of my personal data and the right to withdraw my consent.</span>
        </label>
        <div css={css`margin: 20px 3px 20px 3px !important;
                      font-size: 15px !important;
                      text-align: justify !important;
                      font-weight: 600 !important;`}>
          As a result of submitting completed “Contact Us” form, your personal data will be processed by sonixc and its subsidiary entities worldwide. Please read our Privacy Notice for more information. If you have any questions or would like to withdraw your consent, please send your request to privacy@sonixc.com
        </div>




        {/*<input*/}
        {/*  name="isGoinasdasdasdg"*/}
        {/*  type="checkbox"*/}
        {/*  placeholder="Messagesadsadasd"*/}
        {/*  checked={this.state.checkBoxSonixcITContac}*/}
        {/*  onChange={this.handleInputChange} />*/}




        {/*<checkbox*/}
        {/*  name="message"*/}
        {/*  type="text"*/}
        {/*  placeholder="Message"*/}
        {/*  checked={this.state.checkBoxSonixcITContac}*/}
        {/*  onChange={this.handleInputChange}*/}
        {/*  required >*/}
        {/*  test test test test test*/}
        {/*</checkbox>*/}

        <div css={css`text-align: right !important;
                      font-weight: 600 !important;`}>
          <Submit name="submit" type="submit" value="SUBMIT" />
        </div>


        <Modal visible={this.state.showModal}>
          <p>
            Thank you for reaching out. I will get back to you as soon as
            possible.
          </p>
          <Button onClick={this.closeModal}>Okay</Button>
        </Modal>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
