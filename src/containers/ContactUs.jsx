import React, { Fragment } from 'react'
import styled from 'styled-components'

const ContactSection = styled.section`
  p {
    font-family: 'Cordia New' ;
  }
  background-color: #B5322F !important;
`

const ContactUsDetail = styled.div`
  margin-top: 3em;
  p {
    color: white;
  }
  a {
    color: white;
    text-decoration: underline;
  }
`

export const KeyArt = styled.div`
  background-image: url("/img/contact-us2.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
`
const Contact = () => (
  <Fragment>
    <KeyArt className={'image is-16by9'} />
  </Fragment>
)

export default Contact