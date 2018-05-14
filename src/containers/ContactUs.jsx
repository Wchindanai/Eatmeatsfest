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
const Contact = () => (
  <Fragment>
    <ContactSection className={'section contact-banner'}>
      <div className="container">
        <div className={'columns'}>
          <ContactUsDetail className={'column has-text-centered'}>
            <div>
              <p className={'title is-3 is-white'}>โทร : 02-318-4388</p>
              <p className={'title is-3'}>E-mail : <a href={'mailto:info@eatmeatsfest.com'}>info@eatmeatsfest.com</a></p>
              <p className={'title is-3'}>Facebook : <a href="https://www.facebook.com/EatMeatsFest">@EatMeatsFest</a>
              </p>
            </div>
          </ContactUsDetail>
        </div>
      </div>
    </ContactSection>
  </Fragment>
)

export default Contact