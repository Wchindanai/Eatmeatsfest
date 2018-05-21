import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import axios from 'axios'

import * as json from '../mock'
import CardFood from '../components/CardFood'
import FacebookProvider, { Page } from 'react-facebook'

export const KeyArt = styled.div`
  background-image: url("/img/key-art2.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
`

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoading: true,
      eventInfo: '',
      foodList: [],
    }
  }

  async componentDidMount () {
    let lang = window.localStorage.getItem('language');
    if (!lang) {
      lang = "TH";
    }
    const url = `https://api.eatmeatsfest.com/api/API?Language=${lang}`
    const data = await axios.get(url)
    const { FOOD, EVENT_INFO } = data.data;
    this.setState({
      foodList: FOOD,
      eventInfo: EVENT_INFO
    })
  }

  render () {
    const {eventInfo} = this.state;
    let listFoodCard;
    if (this.state.foodList.length) {
      listFoodCard = this.state.foodList.map((food, index) => (
        <CardFood key={index} food={food} />
      ));
    }
    return (
      <div>
        <section>
          <KeyArt className={'image is-16by9'}/>
        </section>
        <section className={'section is-gray margin-top'}>
          <div className={'container has-text-centered'}>
            <p className={'title is-3 is-spaced'}>Event Info</p>
            <p dangerouslySetInnerHTML={{__html: eventInfo}}
               className={'subtitle is-5 line-height'}/>
          </div>
        </section>
        <section className={'section'}>
          <div className={'columns'}>
            <div className={'column is-8 '}>
              <div className={'columns is-multiline'}>
                { listFoodCard }
              </div>
            </div>
            <div className={'column is-4'}>
              <FacebookProvider appId="122099135013153">
                <Page href="https://www.facebook.com/EatMeatsFest" tabs="timeline" height={'850px'} width={'500px'} />
              </FacebookProvider>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouteData(Home);
