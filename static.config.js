import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
import  * as data from './src/mock';

export default {
  siteRoot: 'https://www.eatmeatsfest.com',
  getSiteData: () => ({
    title: 'Eat Meats Fest',
    metaDescription: 'Eat Meats Festival'
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          eventInfo: data.EVENT_INFO
        }),
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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
