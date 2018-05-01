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
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&appId=122099135013153&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    // const url = `http://eatmeatsfest.azurewebsites.net/API/Get_Detail?Language=TH`
    // const data = await axios.get(url)
    // console.log(data)
    const { FOOD } = json
    this.setState({
      foodList: FOOD,
    })
  }

  render () {
    const {eventInfo} = this.props;
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
              <div className="fb-page"
                   data-href="https://www.facebook.com/EatMeatsFest"
                   data-tabs="timeline" data-small-header="false"
                   data-width="500px"
                   data-height="650px"
                   data-adapt-container-width="true" data-hide-cover="false"
                   data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/EatMeatsFest"
                            className="fb-xfbml-parse-ignore"><a
                  href="https://www.facebook.com/EatMeatsFest">Facebook</a>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouteData(Home);
