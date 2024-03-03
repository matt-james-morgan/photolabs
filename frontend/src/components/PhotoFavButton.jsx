import React  from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';



function PhotoFavButton(props) {
  
  console.log("props from fave button", props);

  const handleClick = (state) => {
    const action = {
      type: 'FAVOURITE',
      payload: !state[props.id],
      id: props.id
  };
  props.dispatch(action);
  }

  return (
    <div className="photo-list__fav-icon" onClick={()=>handleClick(props.state)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.selected || false} />
      </div>
    </div>
  );
}

export default PhotoFavButton;