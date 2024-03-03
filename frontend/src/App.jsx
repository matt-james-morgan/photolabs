import React, {useReducer} from 'react';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



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
      default:
        return state;
      
    }
  },stateObject);

  const [modalState, modalDispatch ] = useReducer((modalState, action)=>{

    switch(action.type){
      case "DISPLAY": 
        return {...modalState, display: action.payload.display, id: action.payload.id};
    }

  },{id: 0, display: false});

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} modalDispatch={modalDispatch} modalState={modalState}  state={state} dispatch={dispatch}/>
      {modalState.display && <PhotoDetailsModal modalState={modalState} modalDispatch={modalDispatch} state={state} dispatch={dispatch}/>}
    </div>
  );
};

export default App;
