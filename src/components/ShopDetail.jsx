import React from 'react'
import styled from 'styled-components'

const Description = styled.p`
  line-height: 1.5 !important;
`

const ShopDetail = ({shopDetail}) => (
  <section className={'section'}>
    <div className="container">
      <p className={'title is-2 has-text-centered'}> {shopDetail.SHOP_NAME} </p>
      <br/>
      <div className={'columns'}>
        <div className={'column is-4'}>
          <figure className="image is-256x256">
            <img src={shopDetail.LOGO_PATH}/>
          </figure>
        </div>
        <div className={'column'}>
          <Description className={'subtitle is-4'}
                       dangerouslySetInnerHTML={{__html: shopDetail.SHOP_DESCRIPTION}}/>
          <br/>
          {
            shopDetail.SHOP_IMAGE.map((img, index) => {
              if (shopDetail.SHOP_NAME === "SAGAMI" ) {
                return (
                  <Image className={'image is-300'}>
                    <img src={img.IMAGE_PATH}/>
                  </Image>
                );
              }
              return (
                <Image className={'image is-256'}>
                  <img src={img.IMAGE_PATH}/>
                </Image>
              )
            })
          }
        </div>
      </div>
    </div>
  </section>
)

const Image = styled.figure`
  display: inline-block !important;
  margin-right: 10px;
`

export default ShopDetail
