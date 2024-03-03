import { useReducer } from "react";
import photos from "../mocks/photos"


export default function useApplicationData (){

   const stateObject = photos.reduce((result, _, index) => {
    result[index + 1] = false;
    return result;
  }, {});
  

  const [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      
      case "updateToFavPhotoIds":
        return {...state, [action.id]: action.payload}
      
      case "setPhotoSelected": 
        return {...state, modalDisplay: action.payload.modalDisplay, modalId: action.payload.modalId};
     case "onClosePhotoDetailsModal":
            return {...state, modalDisplay: action.payload.modalDisplay, modalId: action.payload.modalId};  
      default:
          return state;
    }
  },{...stateObject,modalId: 0, modalDisplay: false} );

 return {state,dispatch}
}
