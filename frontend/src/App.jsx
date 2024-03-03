import React, {useReducer} from 'react';
import photos from 'mocks/photos';
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

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} state={state} dispatch={dispatch}/>
      {state.modalDisplay && <PhotoDetailsModal  state={state} dispatch={dispatch}/>}
    </div>
  );
};

export default App;
