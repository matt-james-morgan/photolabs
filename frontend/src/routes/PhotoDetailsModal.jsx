import React from 'react';
import photos from 'mocks/photos';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  

  const handleClick = () =>{
    const action = {
      type: 'onClosePhotoDetailsModal',
      payload:{
        modalDisplay: false,
        modalId: 0
      }
  };
    props.dispatch(action);
  }

  const photolink = props.state.modalId > 0 ? props.state.photoData.find(photo => photo.id === props.state.modalId) : null;
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
      <PhotoFavButton selected={props.state[props.state.modalId]} dispatch={props.dispatch} id={props.state.modalId} state={props.state}/>
      <img className="photo-details-modal__image"  src={photolink.urls.regular}></img>
      <div className="photo-details-modal__header">
        <img className="photo-list__user-profile" src={photolink.user.profile}></img>
        <div className="photo-list__user-info">
          <p>{photolink.user.username}</p>
          <p className="photo-list__user-location">
            <span>{photolink.location.city}</span>, <span>{photolink.location.country}</span>
          </p>
        </div>
      </div>
      <PhotoList photos={Object.values(photolink.similar_photos)} dispatch={props.dispatch} state={props.state} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
