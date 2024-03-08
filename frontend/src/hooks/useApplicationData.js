import { useReducer, useEffect } from "react";



export default function useApplicationData() {

  const initialState = {
    photoData: [],
    topicData: [],
    favePhotos: [],
    displayLikedPhotos: false
  }

  
  

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_PHOTO_DATA":
        return {...state, photoData: action.payload}
      case "SET_TOPIC_DATA":
          return {...state, topicData: action.payload}
      case "GET_PHOTOS_BY_TOPIC":
        return {...state, topicID: action.payload}
      case "SET_TOPIC_PHOTOS":
        return {...state, topicPhotos: action.payload}
      case "SET_FAVE_PHOTOS":
        return { ...state, favePhotos:{...state.favePhotos, [action.id]: action.payload} }
      case "setPhotoSelected":
        return { ...state, modalDisplay: action.payload.modalDisplay, modalId: action.payload.modalId };
      case "onClosePhotoDetailsModal":
        return { ...state, modalDisplay: action.payload.modalDisplay, modalId: action.payload.modalId };
      case "GET_PHOTOS_BY_LIKE":
        return {...state, likedPhotos: action.payload, displayLikedPhotos: action.display};
      default:
        return state;
    }
  }, { ...initialState, modalId: 0, modalDisplay: false });

  useEffect(()=>{
    fetch('http://localhost:8001/api/photos')
    .then((res)=>{return res.json()})
    .then((res)=>{
      dispatch({type:"SET_PHOTO_DATA", payload:res})})
  }, [])

  useEffect(()=>{
    fetch('http://localhost:8001/api/topics')
    .then((res)=>{return res.json()})
    .then((res)=>{
      dispatch({type:"SET_TOPIC_DATA", payload:res})})
  }, [])



useEffect(()=>{

    if(state.topicID){

    fetch(`http://localhost:8001/api/topics/photos/${state.topicID}`)
    .then((res)=>{return res.json()})
    .then((res)=>{
      dispatch({type:"SET_PHOTOS_TOPIC", payload:res})
      dispatch({type:"SET_PHOTO_DATA", payload:res})
    })
  }

}, [state.topicID]);

 
  return { state, dispatch }
}
