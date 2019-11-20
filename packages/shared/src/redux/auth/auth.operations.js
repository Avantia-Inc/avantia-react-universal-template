import authActions from './auth.actions';

const setUser = user => dispatch => {
  return dispatch(authActions.setUser(user));
};

const setError = error => dispatch => {
  return dispatch(authActions.setError(error));
};

const signout = () => dispatch => {
  return dispatch(authActions.signout());
};

export { setError, setUser, signout };
