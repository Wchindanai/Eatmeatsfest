import React from 'react'
import { withSiteData } from 'react-static'
import styled from 'styled-components'
import axios from 'axios'

import * as json from '../mock'

const KeyArt = styled.div`
  background-image: url("/img/key-art.jpg");
  background-size: contain;
  background-repeat: no-repeat;
`

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      eventInfo: '',
      imagesList: [],
    }
  }

  async componentDidMount () {
    const url = `http://eatmeatsfest.azurewebsites.net/API/Get_Detail?Language=TH`;
    const data = await axios.get(url);
    console.log(data);
    const {EVENT_INFO} = json
    this.setState({
      eventInfo: EVENT_INFO,
    })
  }

  render () {
    return (
      <div>
        <section>
          <KeyArt className={'image is-16by9'}/>
        </section>
        <section className={'section is-loading'}>
          <div className={'container has-text-centered'}>
            <p className={'title is-3 is-spaced'}>Event Info</p>
            <p dangerouslySetInnerHTML = {{__html: this.state.eventInfo}} className={'subtitle is-5 line-height'}/>
          </div>
        </section>
        <section className={'section'}>
          <div className={'columns'}>
            <div className={'column is-8'}></div>
            <div className={'column is-4'}></div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
