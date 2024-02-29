import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {


  const photoArray = props.data.map((user)=>{
    return (
      <li key={user.id} className="photo-list__item">
      <img className="photo-list__image"  src={user.imageSource}></img>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile}></img>
        <div className="photo-list__user-info">
          <p>{user.username}</p>
          <p className="photo-list__user-location">
            <span>{user.location.city}</span>, <span>{user.location.country}</span>
          </p>
        </div>
      </div>
    </li>
    )
  });

  return (
    <>
    {photoArray}
    </>
  )
};

export default PhotoListItem;
