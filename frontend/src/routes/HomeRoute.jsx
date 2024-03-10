import React, {useReducer} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

  
  //checks the state to see if photo is favourited, if true sets notification in nav bar 
  const isFavPhotoExist = Object.values(props.state).includes(true);

  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topics={props.topics} dispatch={props.dispatch} state={props.state}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist}/>
      </TopNavigation>
      <PhotoList photos={props.photos} dispatch={props.dispatch} state={props.state} />
     
    </div>
  );
};

export default HomeRoute;
