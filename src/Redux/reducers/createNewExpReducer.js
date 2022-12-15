import {
    CREATE_NEW_EXPERIENCE,
    CREATE_NEW_EXPERIENCE_ERROR,
    CREATE_NEW_EXPERIENCE_LOADING,
  } from "../actions";
  
  const initialState = {
    createExpData: undefined,
    isLoading: true,
    isError: false,
  };
  
  const createNewExpReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_NEW_EXPERIENCE:
        return {
          ...state,
          createExpData: action.payload,
        };
  
      case CREATE_NEW_EXPERIENCE_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
  
      case CREATE_NEW_EXPERIENCE_ERROR:
        return {
          ...state,
          isError: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default createNewExpReducer;
  