import React from 'react';
import styled from 'styled-components';
const Description = styled.p`
  line-height: 1.5 !important;
`

const ShopDetail = ({ shopDetail }) => (
  <section className={'section'}>
    <div className="container">
      <div className={'columns'}>
        <div className={'column is-4'}>
          <figure className="image is-256x256">
            <img src={shopDetail.LOGO_PATH} />
          </figure>
        </div>
        <div className={'column'}>
          <Description className={'subtitle is-3' } dangerouslySetInnerHTML={{ __html: shopDetail.SHOP_DESCRIPTION }}/>
          <br />
          {
            shopDetail.SHOP_IMAGE.map((img) => (
              <Image className={'image is-256'}>
                <img src={img.IMAGE_PATH} />
              </Image>
            ))
          }
        </div>
      </div>
    </div>
  </section>
);

const Image = styled.figure`
  display: inline-block !important;
  margin-right: 10px;
`;

export default ShopDetail;
