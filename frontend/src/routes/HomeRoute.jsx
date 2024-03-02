import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList />
        <FavBadge />
      </TopNavigation>
      <PhotoList />
    </div>
  );
};

export default HomeRoute;
