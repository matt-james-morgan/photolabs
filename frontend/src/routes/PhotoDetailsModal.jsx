import React from 'react';
import photos from 'mocks/photos';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  

  const handleClick = () =>{
    const action = {
      type: 'DISPLAY',
      payload:{
        display: false,
        id: 0
      }
  };
    props.modalDispatch(action);
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
