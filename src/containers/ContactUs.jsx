import React, { Fragment } from 'react'
import styled from 'styled-components'

const ContactSection = styled.section`
  p {
    font-family: 'Cordia New' ;
  }
  background-image: url("/img/contact-us.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
`

const ContactUsDetail = styled.div`
  margin-top: 150px; 
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
    <ContactSection className={'section'}>
      <div className="container">
        <div className={'columns'}>
          <ContactUsDetail className={'column has-text-centered'}>
            <p className={'title is-3 is-white'}>โทร : 02-318-4388</p>
            <p className={'title is-3'}>E-mail : <a href={'mailto:info@eatmeatsfest.com'}>info@eatmeatsfest.com</a></p>
            <p className={'title is-3'}>Facebook : <a href="https://www.facebook.com/EatMeatsFest">@EatMeatsFest</a>
            </p>
          </ContactUsDetail>
        </div>
      </div>
    </ContactSection>
  </Fragment>
)

export default Contact