import {
    DELETE_SPECIFIC_EXPERIENCE,
    DELETE_SPECIFIC_EXPERIENCE_LOADING,
    DELETE_SPECIFIC_EXPERIENCE_ERROR,
  } from "../actions";
  
  const initialState = {
    deleteExpData: undefined,
    isLoading: true,
    isError: false,
  };
  
  const deleteExpReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_SPECIFIC_EXPERIENCE:
        return {
          ...state,
          deleteExpData: action.payload,
        };
  
      case DELETE_SPECIFIC_EXPERIENCE_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
  
      case DELETE_SPECIFIC_EXPERIENCE_ERROR:
        return {
          ...state,
          isError: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default deleteExpReducer;
  