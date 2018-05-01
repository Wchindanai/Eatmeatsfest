import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  height: 500px;
 
`

const ComingSoon = () => (
  <Section>
    <div className={'has-text-centered container'}>
      <p className={'title'} style={{paddingTop: '200px'}}>Coming Soon</p>
    </div>
  </Section>
)

export default ComingSoon