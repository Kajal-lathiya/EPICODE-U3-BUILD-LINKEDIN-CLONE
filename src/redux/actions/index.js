export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

export const getBooksAction = () => {
  return async (dispatch, getState) => {
    console.log("Fetching the books from the API...");
    try {
      //HEAR ADD YOUR CODE...
    } catch (error) {
      console.log(error);
    }
  };
};
