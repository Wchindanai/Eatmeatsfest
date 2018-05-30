import React, { Fragment } from 'react'
import axios from 'axios'
import ShopDetail from '../components/ShopDetail'
import CardFood from '../components/CardFood'

class ShopList extends React.Component {
  constructor () {
    super()
    this.state = {
      shopDetail: null,
      shopList: [],
      mode: 'SHOP_LIST',
    }
  }

  async componentDidMount () {
    const {search} = this.props.location
    const shopName = search.split('=')[1]
    let lang = localStorage.getItem('language')
    if (!lang) {
      lang = 'TH'
    }
    const url = `https://api.eatmeatsfest.com/api/API?Language=${lang}`
    const res = await axios.get(url)
    this.setState({
      shopList: res.data.FOOD,
    })
  }

  render () {
    return (
      <Fragment>
        <section className={'section'}>
          <div className={'columns'}>
            <div className={'column'}>
              <div className={'columns is-multiline'}>
                {this.state.shopList.map((food, index) => (
                  <CardFood key={index} food={food}/>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default ShopList