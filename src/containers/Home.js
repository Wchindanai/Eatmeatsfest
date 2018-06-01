import React, { Fragment } from 'react'
import { withRouteData } from 'react-static'
import styled from 'styled-components'
import axios from 'axios'
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
    super(props)
    this.state = {
      isLoading: true,
      eventInfo: '',
      foodList: [],
      dessertList: [],
      drinkList: [],
    }
  }

  async componentDidMount () {

    let lang = localStorage.getItem('language')
    if (!lang) {
      lang = 'TH'
    }
    const url = `https://api.eatmeatsfest.com/api/API?Language=${lang}`
    const res = await axios.get(url)
    const foodList = res.data.FOOD.filter((item) => {
      if (item.GROUP_TYPE === 'FOOD') {
        return item
      }
    })
    const dessertList = res.data.FOOD.filter((item) => {
      if (item.GROUP_TYPE === 'DESSERT') {
        return item
      }
    })
    const drinkList = res.data.FOOD.filter((item) => {
      if (item.GROUP_TYPE === 'DRINK') {
        return item
      }
    })
    const {EVENT_INFO} = res.data
    this.setState({
      eventInfo: EVENT_INFO,
      foodList,
      dessertList,
      drinkList,
    })
  }

  render () {
    const {eventInfo} = this.state
    let listFoodCard
    if (this.state.foodList.length) {
      listFoodCard = (
        <div>
          <div className={'title'}>Highlight Menu</div>
          <hr className={'background-black'}/>
          <div className={'columns is-multiline'}>
            {this.state.foodList.map((food, index) => (
              <CardFood key={index} food={food}/>
            ))}
          </div>
          {this.state.dessertList.length ?
            <Fragment>
              <div className={'title'}>DESSERT</div>
              <hr className={'background-black'}/>
            </Fragment> : ''
          }

          <div className={'columns is-multiline'}>
            {this.state.dessertList.map((food, index) => (
              <CardFood key={index} food={food}/>
            ))}
          </div>
          {this.state.drinkList.length ?
            <Fragment>
              <div className={'title'}>DRINK</div>
              <hr className={'background-black'}/>
            </Fragment> : ''}

          <div className={'columns is-multiline'}>
            {this.state.drinkList.map((food, index) => (
              <CardFood key={index} food={food}/>
            ))}
          </div>
        </div>
      )
    }
    return (
      <div>
        <section>
          <KeyArt className={'image is-16by9'}/>
        </section>
        <section className={'section is-gray margin-top'}>
          <div className={'container has-text-centered'}>
            <p className={'title is-2 is-spaced'}>Event Info</p>
            <p dangerouslySetInnerHTML={{__html: eventInfo}}
               className={'subtitle is-4 line-height'}/>
          </div>
        </section>
        <section className={'section'}>
          <div className={'columns'}>
            <div className={'column is-8'}>
              {listFoodCard}
            </div>
            <div className={'column is-4'}>
              <FacebookProvider appId="122099135013153">
                <Page href="https://www.facebook.com/EatMeatsFest"
                      tabs="timeline" height={'850px'} width={'500px'}/>
              </FacebookProvider>
            </div>
          </div>
        </section>
        <section className={'section'} style={{backgroundColor: 'gray'}}>
          <div className={'has-text-centered'}>
            <div className="container">
              <p className={'title'} style={{color: 'white'}}>Coming Soon</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouteData(Home)
