import actions from './actions';

export const signinUser = user => dispatch => {
  console.log('dispatch signin');
  return dispatch(actions.signinUser(user));
};
export const signoutUser = () => dispatch => dispatch(actions.signoutUser());
