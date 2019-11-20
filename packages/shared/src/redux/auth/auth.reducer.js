import AuthActionTypes from './auth.types';

const defaultState = {
  authUser: null,
  error: null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_SUCCESS: {
      return {
        authUser: action.payload,
        error: null,
      };
    }
    case AuthActionTypes.AUTH_FAILURE: {
      return {
        authUser: null,
        error: action.payload,
      };
    }
    case AuthActionTypes.AUTH_SIGNOUT: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
