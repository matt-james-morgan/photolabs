import React from 'react';
import photos from 'mocks/photos';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  
  console.log('these are the props', props.modalState.id, "state", props.state);

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

  const photolink = props.modalState.id > 0 ? photos.find(photo => photo.id === props.modalState.id) : null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton selected={props.state[props.modalState.id]} dispatch={props.dispatch} id={props.modalState.id} state={props.state}/>
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
      <PhotoList photos={Object.values(photolink.similar_photos)} dispatch={props.dispatch} state={props.state} modalDispatch={props.modalDispatch} modalState={props.modalState}/>
    </div>
  )
};

export default PhotoDetailsModal;
