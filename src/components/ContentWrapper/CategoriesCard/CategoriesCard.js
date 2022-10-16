
import React from 'react'
import './CategoriesCard.css';

function CategoriesCard(props) {
  return (
    <div className='categories'>
      <div className="categories-content">
        <div className="category-card">
          <div className="category-name">
            <div className="name">{props.name}</div>
          </div>
          <div className="category-count">
            {props.count}
          </div>
        </div>
      </div>


    </div>

  );
}

export default CategoriesCard;