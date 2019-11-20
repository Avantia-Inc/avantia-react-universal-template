import { all, call, takeLatest, put } from 'redux-saga/effects';

import types from './types';

import authActions from '../auth/auth.actions';

/* sign in sagas */
function* loadUserData(action) {
  console.log('loadUserData: ', action);
  yield put(authActions.setUser(action.payload));
}

function* signinUser() {
  console.log('signinUser call');
  yield takeLatest(types.FIREBASE.SIGNIN_USER, loadUserData);
}

/* sign out sagas */
function* unloadUser() {
  yield put(authActions.signout());
}

function* signoutUser() {
  yield takeLatest(types.FIREBASE.SIGNOUT_USER, unloadUser);
}
/* join sagas */
function* firebaseSaga() {
  console.log('firebase saga');
  yield all([call(signinUser), call(signoutUser)]);
}

export default firebaseSaga;
