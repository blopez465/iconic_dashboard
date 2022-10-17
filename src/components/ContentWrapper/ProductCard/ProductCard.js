
import React from 'react'
import './ProductCard.css';

function ProductCard(props) {
  return (
    <div className='product'>
      <div className="product-content">
        <div className="product-card">
         
          <div className="product-img">
                <img src={props.img}/>
            </div>
            <div className="product-name">
            {props.name}
          </div>
          <div className="product-description">
            {props.description}
          </div>
          <div className="product-detail">
            <button><a href={props.detail}/> DETALLE</button>
          </div>
        </div>
      </div>


    </div>

  );
}

export default ProductCard;