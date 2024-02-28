import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {

  console.log(props);
  
  const photoArray = props.data.map((user)=>{
    return (
      <li key={user.id}>
      <img src={user.imageSource}></img>
      <img src={user.profile}></img>
      <p>{user.username}</p>
      <p><span>{user.location.city}</span><span>{user.location.country}</span></p>
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
