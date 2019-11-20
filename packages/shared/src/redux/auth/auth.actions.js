import AuthActionTypes from './auth.types';

const setUser = user => ({
  type: AuthActionTypes.AUTH_SUCCESS,
  payload: user,
});

const setError = error => ({
  type: AuthActionTypes.AUTH_FAILURE,
  payload: error,
});

const signout = () => ({
  type: AuthActionTypes.AUTH_SIGNOUT,
});

export default {
  setError,
  setUser,
  signout,
};
