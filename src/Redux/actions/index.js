export const GET_PROFILE = "GET_PROFILE";
export const GET_MULT_PROFILES = "GET_MULT_PROFILES";
export const GET_MULT_PROFILES_LOADING = "GET_MULT_PROFILES_LOADING";
export const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";
export const GET_MULT_PROFILES_ERROR = "GET_MULT_PROFILES_ERROR";

export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const GET_EXPERIENCE_LOADING = "GET_EXPERIENCE_LOADING";
export const GET_EXPERIENCE_ERROR = "GET_EXPERIENCE_ERROR";

export const GET_SPECIFIC_EXPERIENCE = "GET_SPECIFIC_EXPERIENCE";
export const GET_SPECIFIC_EXPERIENCE_LOADING = "GET_SPECIFIC_EXPERIENCE_LOADING";
export const GET_SPECIFIC_EXPERIENCE_ERROR = "GET_SPECIFIC_EXPERIENCE_ERROR";

export const EDIT_SPECIFIC_EXPERIENCE = "EDIT_SPECIFIC_EXPERIENCE";
export const EDIT_SPECIFIC_EXPERIENCE_LOADING = "EDIT_SPECIFIC_EXPERIENCE_LOADING";
export const EDIT_SPECIFIC_EXPERIENCE_ERROR = "EDIT_SPECIFIC_EXPERIENCE_ERROR";

export const DELETE_SPECIFIC_EXPERIENCE = "DELETE_SPECIFIC_EXPERIENCE";
export const DELETE_SPECIFIC_EXPERIENCE_LOADING = "DELETE_SPECIFIC_EXPERIENCE_LOADING";
export const DELETE_SPECIFIC_EXPERIENCE_ERROR = "DELETE_SPECIFIC_EXPERIENCE_ERROR";


export const CREATE_NEW_EXPERIENCE = "CREATE_NEW_EXPERIENCE";
export const CREATE_NEW_EXPERIENCE_LOADING = "CREATE_NEW_EXPERIENCE_LOADING";
export const CREATE_NEW_EXPERIENCE_ERROR = "CREATE_NEW_EXPERIENCE_ERROR";


export const getProfilData = (query) => {
  console.log(query);
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8"
      }
    };
    const url = "https://striveschool-api.herokuapp.com/api/profile/me";
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_PROFILE,
          payload: data
        });
        setTimeout(() => {
          dispatch({
            type: GET_PROFILE_LOADING,
            payload: false
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_PROFILE_LOADING,
          payload: false
        });
        dispatch({
          type: GET_PROFILE_ERROR,
          payload: true
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_PROFILE_LOADING,
        payload: false
      });

      dispatch({
        type: GET_PROFILE_ERROR,
        payload: true
      });
    }
  };
};
export const getMuiltiProfileData = (query) => {
  console.log(query);
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8"
      }
    };
    const url = `https://striveschool-api.herokuapp.com/api/profile/`;
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_MULT_PROFILES,
          payload: data
        });
        setTimeout(() => {
          dispatch({
            type: GET_MULT_PROFILES_LOADING,
            payload: false
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_MULT_PROFILES_LOADING,
          payload: false
        });
        dispatch({
          type: GET_MULT_PROFILES_ERROR,
          payload: true
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_MULT_PROFILES_LOADING,
        payload: false
      });

      dispatch({
        type: GET_MULT_PROFILES_ERROR,
        payload: true
      });
    }
  };
};

export const getExperienceData = (query) => {
  console.log(query);
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8"
    }
    };
    const userId = "5fc4ae95b708c200175de88d";
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
    try {
      let response = await fetch(url, options);
      console.log('response:', response);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_EXPERIENCE,
          payload: data
        });
        setTimeout(() => {
          dispatch({
            type: GET_EXPERIENCE_LOADING,
            payload: false
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_EXPERIENCE_LOADING,
          payload: false
        });
        dispatch({
          type: GET_EXPERIENCE_ERROR,
          payload: true
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_EXPERIENCE_LOADING,
        payload: false
      });

      dispatch({
        type: GET_EXPERIENCE_ERROR,
        payload: true
      });
    }
  };
};

export const getSpecificExperience = (query) => {
  console.log(query);
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8"
    }
    };
    const userId = "5fc4ae95b708c200175de88d";
    const expId = 3;
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;
    try {
      let response = await fetch(url, options);
      console.log('response:', response);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_SPECIFIC_EXPERIENCE,
          payload: data
        });
        setTimeout(() => {
          dispatch({
            type: GET_SPECIFIC_EXPERIENCE_LOADING,
            payload: false
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_SPECIFIC_EXPERIENCE_LOADING,
          payload: false
        });
        dispatch({
          type: GET_SPECIFIC_EXPERIENCE_ERROR,
          payload: true
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_SPECIFIC_EXPERIENCE_LOADING,
        payload: false
      });

      dispatch({
        type: GET_SPECIFIC_EXPERIENCE_ERROR,
        payload: true
      });
    }
  };
};

export const editSpecificExperience = (query) => {
  console.log(query);
  return async (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8"
    }
    };
    const userId = "5fc4ae95b708c200175de88d";
    const expId = 3;
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;
    try {
      let response = await fetch(url, options);
      console.log('response:', response);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: EDIT_SPECIFIC_EXPERIENCE,
          payload: data
        });
        setTimeout(() => {
          dispatch({
            type: EDIT_SPECIFIC_EXPERIENCE_LOADING,
            payload: false
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: EDIT_SPECIFIC_EXPERIENCE_LOADING,
          payload: false
        });
        dispatch({
          type: EDIT_SPECIFIC_EXPERIENCE_ERROR,
          payload: true
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: EDIT_SPECIFIC_EXPERIENCE_LOADING,
        payload: false
      });

      dispatch({
        type: EDIT_SPECIFIC_EXPERIENCE_ERROR,
        payload: true
      });
    }
  };
};

export const deleteSpecificExperience = (query) => {
  console.log(query);
  return async (dispatch) => {
    const options = {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8"
    }
    };
    const userId = "5fc4ae95b708c200175de88d";
    const expId = 3;
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`;
    try {
      let response = await fetch(url, options);
      console.log('response:', response);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: DELETE_SPECIFIC_EXPERIENCE,
          payload: data
        });
        setTimeout(() => {
          dispatch({
            type: DELETE_SPECIFIC_EXPERIENCE_LOADING,
            payload: false
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: DELETE_SPECIFIC_EXPERIENCE_LOADING,
          payload: false
        });
        dispatch({
          type: DELETE_SPECIFIC_EXPERIENCE_ERROR,
          payload: true
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: DELETE_SPECIFIC_EXPERIENCE_LOADING,
        payload: false
      });

      dispatch({
        type: DELETE_SPECIFIC_EXPERIENCE_ERROR,
        payload: true
      });
    }
  };
};

export const createNewExperience = (data) => {
  console.log(data);
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8"
      },
      body: JSON.stringify(data),
    };
    const userId = "5fc4ae95b708c200175de88d";
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
    try {
      let response = await fetch(url, options);
      console.log('response:', response);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: CREATE_NEW_EXPERIENCE,
          payload: data
        });
        setTimeout(() => {
          dispatch({
            type: CREATE_NEW_EXPERIENCE_LOADING,
            payload: false
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: CREATE_NEW_EXPERIENCE_LOADING,
          payload: false
        });
        dispatch({
          type: CREATE_NEW_EXPERIENCE_ERROR,
          payload: true
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: CREATE_NEW_EXPERIENCE_LOADING,
        payload: false
      });

      dispatch({
        type: CREATE_NEW_EXPERIENCE_ERROR,
        payload: true
      });
    }
  };
};