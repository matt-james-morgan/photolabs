import React, {useReducer} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';
import photos from 'mocks/photos';

const HomeRoute = (props) => {

  

  const isFavPhotoExist = Object.values(props.state).includes(true);

  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topics={props.topics}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      </TopNavigation>
      <PhotoList photos={props.photos} dispatch={props.dispatch} state={props.state} modalDispatch={props.modalDispatch} modalState={props.modalState}/>
     
    </div>
  );
};

export default HomeRoute;
