import React, { Fragment } from 'react'
import axios from 'axios';
import Carousel from '../components/Carousel'
import ShopDetail from '../components/ShopDetail'

class ShopList extends React.Component {
  constructor () {
    super();
    this.state = {
      shopDetail: null,
    };
  }
  async componentDidMount() {
    const { search } = this.props.location;
    const shopName = search.split('=')[1];
    const url = `http://api.eatmeatsfest.com/api/API?ShopName=${shopName}&Language=TH`;
    const res = await axios.get(url);
    this.setState({
      shopDetail: res.data,
    })
  }


  render () {
    return(
      <Fragment>
        <Carousel/>
        <ShopDetail shopDetail={this.state.shopDetail} />
      </Fragment>
    )
  }
}

export default ShopList