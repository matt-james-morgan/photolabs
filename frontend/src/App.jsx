import React, {useReducer} from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import {state, dispatch, modalDispatch, modalState} from '../src/hooks/useApplicationData'



// Note: Rendering a single component to build components in isolation
const App = () => {

  const stateObject = photos.reduce((result, _, index) => {
    result[index + 1] = false;
    return result;
  }, {});
  

  const [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      
      case "FAVOURITE":
        return {...state, [action.id]: action.payload}
      
      case "DISPLAY": 
        return {...state, modalDisplay: action.payload.modalDisplay, modalId: action.payload.modalId};
      default:
          return state;
    }
  },{...stateObject,modalId: 0, modalDisplay: false} );

  const [modalState, modalDispatch ] = useReducer((modalState, action)=>{

    switch(action.type){
      
    }

  },{});

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} state={state} dispatch={dispatch}/>
      {state.modalDisplay && <PhotoDetailsModal modalState={modalState} modalDispatch={modalDispatch} state={state} dispatch={dispatch}/>}
    </div>
  );
};

export default App;
