import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick={()=>props.dispatch({type: 'GET_PHOTOS_BY_TOPIC', payload: props.data.id})}>
      <span >{props.data.title}</span>
    </div>
  );
};

export default TopicListItem;
