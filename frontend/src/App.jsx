import React, {useReducer} from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modalState, dispatch ] = useReducer((modalState, action)=>{

    switch(action.type){
      case "DISPLAY": 
        return {...modalState, display: action.payload.display, id: action.payload.id};
    }

  },{id: 0, display: false});

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} modalDispatch={dispatch} modalState={modalState}/>
      {modalState.display && <PhotoDetailsModal photoData={modalState} modalDispatch={dispatch} />}
    </div>
  );
};

export default App;
