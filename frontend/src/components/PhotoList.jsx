import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";



const PhotoList = (props) => {
  

  return(<ul className="photo-list">
   {props.photos.map((photo, index) => 
        <PhotoListItem key={index} data={photo}  dispatch={props.dispatch} state={props.state}/>
  )}
  </ul>)
}

export default PhotoList;
