import React, {useReducer, useState} from 'react';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  

  const [state, dispatch] = useReducer((state, action)=>{
    console.log(action);
    switch(action.type){
      
      case "FAVOURITE":
        return {...state, [action.id]: action.payload}
      default:
        return state;
      
    }
  },{1: false, 2: false, 3:false, 4:false, 5: false, 6: false, 7:false, 8: false, 9: false});

  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList topics={props.topics}/>
        <FavBadge />
      </TopNavigation>
      <PhotoList photos={props.photos} dispatch={dispatch} state={state}/>
    </div>
  );
};

export default HomeRoute;
