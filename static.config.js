import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  siteRoot: 'https://www.eatmeatsfest.com',
  getSiteData: () => ({
    title: 'EAT MEATS FEST',
    metaDescription: 'Eat Meats Festival'
  }),
  getRoutes: async () => {
    const url = `http://api.eatmeatsfest.com/api/API?Language=TH`
    const data = await axios.get(url)
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          eventInfo: data.data.EVENT_INFO
        }),
      },
      {
        path: '/event',
        component: 'src/containers/EventInfo',
        getData: () => ({
          eventInfo: data.data.EVENT_INFO
        }),
      },
      {
        path: '/shop_list',
        component: 'src/containers/ShopList',
      },
      {
        path: '/shop_detail',
        component: 'src/containers/ShopDetail',
      },
      {
        path: '/food_list',
        component: 'src/containers/FoodList'
      },
      {
        path: '/floor_plan',
        component: 'src/containers/FloorPlan'
      },
      {
        path: '/contact',
        component: 'src/containers/ContactUs'
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta, siteData
      } = this.props

      return (
        <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/*<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />*/}
          <meta property="og:image" content="https://www.eatmeatsfest.com/img/key-art2.jpg" />
          <title>{siteData.title}</title>
          <meta
            name="description"
            content={siteData.metaDescription}
          />
          {renderMeta.styleTags}
        </Head>
        <Body>{children}</Body>
        </Html>
      )
    }
  },
}
