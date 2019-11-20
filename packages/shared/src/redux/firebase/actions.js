import types from './types';

const signinUser = user => ({
  type: types.FIREBASE.SIGNIN_USER,
  payload: user,
});

const signoutUser = () => ({
  type: types.FIREBASE.SIGNOUT_USER,
});

export default {
  signinUser,
  signoutUser,
};
