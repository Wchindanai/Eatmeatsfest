import React from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import axios from 'axios'

import * as json from '../mock'
import CardFood from '../components/CardFood'

const KeyArt = styled.div`
  background-image: url("/img/key-art.jpg");
  background-size: contain;
  background-repeat: no-repeat;
`

class Home extends React.Component {
  constructor (props) {
    super(props);
    console.log(this.props);
    this.state = {
      isLoading: true,
      eventInfo: '',
      foodList: [],
    }
  }

  // async componentDidMount () {
  //   // const url = `http://eatmeatsfest.azurewebsites.net/API/Get_Detail?Language=TH`
  //   // const data = await axios.get(url)
  //   // console.log(data)
  //   const {EVENT_INFO, FOOD} = json
  //   this.setState({
  //     eventInfo: EVENT_INFO,
  //     foodList: FOOD,
  //   })
  // }

  render () {
    const {EVENT_INFO, FOOD} = this.props.data;
    let listFoodCard;
    if (FOOD.length) {
      listFoodCard = FOOD.map((food, index) => (
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
            <p dangerouslySetInnerHTML={{__html: EVENT_INFO}}
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
            <div className={'column is-4 is-gray'}></div>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouteData(Home);
