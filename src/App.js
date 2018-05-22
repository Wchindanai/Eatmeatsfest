import React from 'react'
import { Router, Link, Head } from 'react-static'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
//
import Routes from 'react-static-routes'

import 'flag-icon-css/css/flag-icon.css';
import 'bulma/css/bulma.css'
import './app.css'

import ComingSoon from './components/ComingSoon'

const Banner = styled.div`
  background-image: url("/img/banner-1.jpg");
  background-repeat: no-repeat;
  height: 100px;
  width: 100%;
  background-size: cover;
`

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      language: "TH",
      toggleMenu: false,
    }
  }

  componentDidMount() {
    let lang = localStorage.getItem('language');
    if (lang) {
      lang = "TH";
    }
    window.localStorage.setItem('language', lang);
    this.setState({ language: lang });
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      toggleMenu: !prevState.toggleMenu
    }))
  }

  changeLanguage(lang){
    this.setState({
      language: lang,
    });
    window.localStorage.setItem('language', lang);
    window.location.reload();
  }

  render () {
    return (
      <Router>
        <div>
          <Banner className={'image'}>
            <div className="buttons has-addons is-right" style={{paddingTop: '15px'}}>
              <div className={`button ${this.state.language === 'TH' ? 'is-danger is-selected' : ''}`} onClick={() => this.changeLanguage("TH")}>
                <i className={'flag-icon flag-icon-th'}/>
                <span>&nbsp; TH</span>
              </div>
              <div className={`button ${this.state.language === 'JP' ? 'is-danger is-selected' : ''}`} onClick={() => this.changeLanguage("JP")}>
                <i className={'flag-icon flag-icon-jp'}/>
                <span>&nbsp; JP</span>
              </div>
              <div className={`button ${this.state.language === 'EN' ? 'is-danger is-selected' : ''}`} onClick={() => this.changeLanguage("EN")}>
                <i className={'flag-icon flag-icon-us'}/>
                <span>&nbsp; EN</span>
              </div>
            </div>
          </Banner>
          <nav className={'navbar is-black'}>
            <div className="navbar-brand">
              <a className="navbar-burger white-color" onClick={this.toggleMenu} aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className={`navbar-menu nav-center ${this.state.toggleMenu ? 'is-active' : ''}`}>
              <div className={'navbar-start'}>
                <Link className="navbar-item" exact to="/">HOME</Link>
                <Link className="navbar-item" to="/event">EVENT INFO</Link>
                <Link className="navbar-item" onClick={() => location.reload()} to="/shop_list">SHOP LIST</Link>
                {/*<Link className="navbar-item" to="/food_list">FOOD LIST</Link>*/}
                {/*<Link className="navbar-item" to="/floor_plan">FLOOR PLAN</Link>*/}
                <Link className="navbar-item" to="/contact">CONTACT US</Link>
              </div>
            </div>
          </nav>
          <div className="">
            <Routes/>
          </div>
          <section className={'section'} style={{ backgroundColor:'gray' }}>
            <div className={'has-text-centered'}>
              <div className="container">
                <p className={'title'} style={{ color: 'white'}}>Coming Soon</p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <input type="hidden" id={'language'} value={this.state.language}/>
        </div>
      </Router>
    );
  }
}


export default hot(module)(App)
