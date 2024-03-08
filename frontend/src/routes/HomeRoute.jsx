import React, {useReducer} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

  

  const isFavPhotoExist = Object.values(props.state.favePhotos).includes(true);
     
  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topics={props.topics} dispatch={props.dispatch} state={props.state}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist} state={props.state} dispatch={props.dispatch}/>
      </TopNavigation>
      {!props.state.displayLikedPhotos && <PhotoList photos={props.photos} dispatch={props.dispatch} state={props.state} />}
      {props.state.displayLikedPhotos && <PhotoList photos={props.state.likedPhotos} dispatch={props.dispatch} state={props.state} />}
    </div>
  );
};

export default HomeRoute;
