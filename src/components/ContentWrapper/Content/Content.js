
import './Content.css';
//import { useState, useEffect } from 'react'


function Content(props) {


  return (

    <div className='content'>
      <div className="card-content">
        <div className="card-body">
          <div className="info-col">
            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.title}</div>
            <div className="h5 mb-0 font-weight-bold text-gray-800"> {props.count}</div>
          </div>
          <div className="icon-col">
            <i className={`fas fa-${props.icon} fa-2x text-gray-300`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;