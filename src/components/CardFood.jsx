import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-static';

const CardContent = styled.div`
  height: 120px;
`;

const CardFood = ({ food }) => (
  <Link to={`/shop_list?shop=${food.SHOP_KEY}`} className="column is-half">
    <div className={'card'}>
      <div className="card-image">
        <figure className={'image is-4by3'}>
          <img src={ food.IMAGE_PATH } alt=""/>
        </figure>
      </div>
      <CardContent className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              { food.SHOP_NAME }
            </p>
            <p className="subtitle is-6">
              { food.FOOD_NAME }
            </p>
          </div>
        </div>
      </CardContent>
    </div>
  </Link>
);

export default CardFood;
