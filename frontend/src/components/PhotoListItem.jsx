import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {


  const photoArray = props.data.map((user)=>{
    return (
      <li key={user.id} className="photo-list__item">
      <img className="photo-list__img"  src={user.imageSource}></img>
      <div className="photo-list__user-profile " >
      <img  className="photo-list__user-info"src={user.profile}></img>
      <p>{user.username}</p>
      <p className="photo-list__user-location"><span>{user.location.city}</span>, <span>{user.location.country}</span></p>
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
