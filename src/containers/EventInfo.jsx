import React, { Fragment } from 'react';
import { withRouteData } from 'react-static';
import ComingSoon from '../components/ComingSoon'
import { KeyArt } from './Home'
import  axios from 'axios'

class EventInfo extends React.Component {

  constructor () {
    super();
    this.state = {
      eventInfo: ''
    };
  }

  async componentDidMount() {
    let lang = localStorage.getItem('language');
    if (!lang) {
      lang = "TH";
    }
    const url = `https://api.eatmeatsfest.com/api/API?Language=${lang}`;
    const res = await axios(url);
    this.setState({
      eventInfo: res.data.EVENT_INFO,
    })
  }

  render() {
    return (
      <Fragment>
        <section>
          <KeyArt className={'image is-16by9'}/>
        </section>
        <section className={'section is-gray margin-top'}>
          <div className={'container has-text-centered'}>
            <p className={'title is-2 is-spaced'}>Event Info</p>
            <p dangerouslySetInnerHTML={{__html: this.state.eventInfo}}
               className={'subtitle is-4 line-height'}/>
          </div>
        </section>
        <section className={'section'} style={{ backgroundColor:'gray' }}>
          <div className={'has-text-centered'}>
            <div className="container">
              <p className={'title'} style={{ color: 'white'}}>Coming Soon</p>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default EventInfo;