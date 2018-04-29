import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
//
import Routes from 'react-static-routes'

import 'bulma/css/bulma.css'
import './app.css'

const Banner = styled.div`
  background-image: url("/img/banner.jpg");
  background-repeat: no-repeat;
  height: 100px;
`

const App = () => (
  <Router>
    <div>
      <Banner className={'image'}/>
      <nav className={'navbar is-black '}>
        <div className="navbar-menu nav-center">
          <div className={'navbar-start'}>
            <Link className="navbar-item" to="/">HOME</Link>
            <Link className="navbar-item" to="/event">EVENT INFO</Link>
            <Link className="navbar-item" to="/shop_list">SHOP LIST</Link>
            <Link className="navbar-item" to="/food_list">FOOD LIST</Link>
            <Link className="navbar-item" to="/floor_plan">FLOOR PLAN</Link>
            <Link className="navbar-item" to="/contact">CONTACT US</Link>
          </div>
        </div>
      </nav>
      <div className="">
        <Routes/>
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
