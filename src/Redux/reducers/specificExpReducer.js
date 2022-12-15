import {
    GET_SPECIFIC_EXPERIENCE,
    GET_SPECIFIC_EXPERIENCE_LOADING,
    GET_SPECIFIC_EXPERIENCE_ERROR,
  } from "../actions";
  
  const initialState = {
    getSpecificExpData: undefined,
    isLoading: true,
    isError: false,
  };
  
  const getSpecificExpReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SPECIFIC_EXPERIENCE:
        return {
          ...state,
          getSpecificExpData: action.payload,
        };
  
      case GET_SPECIFIC_EXPERIENCE_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
  
      case GET_SPECIFIC_EXPERIENCE_ERROR:
        return {
          ...state,
          isError: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default getSpecificExpReducer;
  