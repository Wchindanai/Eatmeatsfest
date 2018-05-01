import React, { Fragment } from 'react'
import styled from 'styled-components'

const ContactSection = styled.section`
  p {
    font-family: 'Cordia New' ;
  }
  background-color: gainsboro;
`

const Background = styled.div`
  height: 500px;
  background-image: url("/img/key-art.jpg");
  background-repeat: no-repeat;
  opacity: 0.2;
`
const Contact = () => (
  <Fragment>
    <ContactSection className={'section'}>
      <div className="container">
        <div className={'columns is-vcentered'}>
          <div className={'column'}>
            <p className={'title is-4'}>โทร.: 02-318-4388</p>
            <p className={'title is-4'}>Email : <a href={'mailto:info@eatmeatsfes.com'}>info@eatmeatsfes.com</a></p>
            <p className={'title is-4'}>Facebook :
              <a href="https://www.facebook.com/EatMeatsFest">https://www.facebook.com/EatMeatsFest</a>
            </p>
          </div>
        </div>
      </div>
    </ContactSection>
  </Fragment>
)

export default Contact