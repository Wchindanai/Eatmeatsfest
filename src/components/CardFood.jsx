import React from 'react';
import styled from 'styled-components';

const CardContent = styled.div`
  height: 120px;
`;

const CardFood = ({ food }) => (
  <div className="column is-one-third">
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
              { food.NAME }
            </p>
            <p className="subtitle is-6">
              { food.FOOD_NAME }
            </p>
          </div>
        </div>
      </CardContent>
    </div>
  </div>
);

export default CardFood;
