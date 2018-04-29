import React from 'react';

const CardFood = ({ food }) => (
  <div className="column is-one-third">
    <div className={'card'}>
      <div className="card-image">
        <figure className={'image is-4by3'}>
          <img src={ food.IMAGE_PATH } alt=""/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">
              ร้าน: { food.NAME }
            </p>
            <p className="subtitle is-6">
              ชื่ออาหาร: { food.FOOD_NAME }
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardFood;
