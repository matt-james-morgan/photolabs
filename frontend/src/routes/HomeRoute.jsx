import React, {useReducer, useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import photos from 'mocks/photos';

const HomeRoute = (props) => {

  const stateObject = photos.reduce((result, _, index) => {
    result[index] = false;
    return result;
  }, {});

  const [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      
      case "FAVOURITE":
        return {...state, [action.id]: action.payload}
      default:
        return state;
      
    }
  },stateObject);

  const isFavPhotoExist = Object.values(state).includes(true);

  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topics={props.topics}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      </TopNavigation>
      <PhotoList photos={props.photos} dispatch={dispatch} state={state}/>
    </div>
  );
};

export default HomeRoute;
