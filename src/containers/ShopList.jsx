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
      foodList: [],
      dessertList:[],
      drinkList:[],
      mode: 'SHOP_LIST',
    }
  }

  async componentDidMount () {
    let lang = localStorage.getItem('language')
    if (!lang) {
      lang = 'TH'
    }
    const url = `https://api.eatmeatsfest.com/api/API?Language=${lang}`
    const res = await axios.get(url)
    console.log(res);
    const foodList = res.data.FOOD.filter((item) => {
      console.log(item);
      if (item.GROUP_TYPE === "FOOD") {
        return item;
      }
    });
    const dessertList = res.data.FOOD.filter((item) => {
      console.log(item);
      if (item.GROUP_TYPE === "DESSERT") {
        return item;
      }
    });
    const drinkList = res.data.FOOD.filter((item) => {
      console.log(item);
      if (item.GROUP_TYPE === "DRINK") {
        return item;
      }
    });
    this.setState({
      foodList,
      dessertList,
      drinkList,
    })
  }

  render () {
    if (!this.state.foodList.length) {
      return (
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      )
    }
    return (
      <Fragment>
        <section className={'section'}>
          <div className={'columns'}>
            <div className={'column'}>
              <div className={'title is-2'}>Highlight Menu</div>
              <hr className={'background-black'}/>
              <div className={'columns is-multiline'}>
                {this.state.foodList.map((food, index) => (
                  <CardFood key={index} food={food}/>
                ))}
              </div>
              { this.state.dessertList.length ?
                <Fragment>
                  <div className={'title is-2'}>DESSERT</div>
                  <hr className={'background-black'}/>
                </Fragment> : ""
              }

              <div className={'columns is-multiline'}>
                {this.state.dessertList.map((food, index) => (
                  <CardFood key={index} food={food}/>
                ))}
              </div>
              { this.state.drinkList.length ?
                <Fragment>
                  <div className={'title is-2'}>DRINK</div>
                  <hr className={'background-black'}/>
                </Fragment> : ""}

              <div className={'columns is-multiline'}>
                {this.state.drinkList.map((food, index) => (
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