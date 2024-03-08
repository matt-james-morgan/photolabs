import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({isFavPhotoExist, state, dispatch}) => {

  const handleClick = () => {
    const faveIds = Object.keys(state.favePhotos);
 
    const action = {
      type: "GET_PHOTOS_BY_LIKE",
      payload: state.photoData.filter((photo)=>{
        return faveIds.includes(String(photo.id)) && state.favePhotos[photo.id] === true; 
      }),
      display: !state.displayLikedPhotos
    }
    
    dispatch(action);
  }

  return (
    <div className='fav-badge' onClick={handleClick}>
      <FavIcon displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;