import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import HomeRoute from 'routes/HomeRoute';


// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigation>
        <TopicList />
        <FavBadge />
      </TopNavigation>
      <HomeRoute />
    </div>
  );
};

export default App;
