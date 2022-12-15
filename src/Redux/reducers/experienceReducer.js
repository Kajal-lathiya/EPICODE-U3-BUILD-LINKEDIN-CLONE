import {
    GET_EXPERIENCE,
    GET_EXPERIENCE_ERROR,
    GET_EXPERIENCE_LOADING,
  } from "../actions";
  
  const initialState = {
    experienceData: [],
    isLoading: true,
    isError: false,
  };
  
  const experienceReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_EXPERIENCE:
        return {
          ...state,
          experienceData: action.payload,
        };
  
      case GET_EXPERIENCE_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
  
      case GET_EXPERIENCE_ERROR:
        return {
          ...state,
          isError: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default experienceReducer;
  