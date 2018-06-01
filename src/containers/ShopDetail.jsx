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
    const url = `https://api.eatmeatsfest.com/api/API?ShopName=${shopName}&Language=${lang}`
    const res = await axios.get(url)
    this.setState({
      shopDetail: res.data,
    })
  }

  render () {
    return (
      <Fragment>
        {this.state.shopDetail && <ShopDetail shopDetail={this.state.shopDetail}/>}
      </Fragment>
    )
  }
}

export default ShopList