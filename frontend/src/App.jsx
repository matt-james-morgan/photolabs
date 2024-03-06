import React, {useReducer} from 'react';

import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from '../src/hooks/useApplicationData'



// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    dispatch
  } = useApplicationData();
  console.log("state", state);
  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} state={state} dispatch={dispatch}/>
      {state.modalDisplay && <PhotoDetailsModal  state={state} dispatch={dispatch}/>}
    </div>
  );
};

export default App;
