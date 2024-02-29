import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
    
    return (
      <li  className="photo-list__item">
      <img className="photo-list__image"  src={props.data.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.data.profile}></img>
        <div className="photo-list__user-info">
          <p>{props.data.username}</p>
          <p className="photo-list__user-location">
            <span>{props.data.location.city}</span>, <span>{props.data.location.country}</span>
          </p>
        </div>
      </div>
    </li>
    )
  };

  
;

export default PhotoListItem;
