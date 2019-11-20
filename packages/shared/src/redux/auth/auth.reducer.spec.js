import authReducer from './auth.reducer';
import AuthActionTypes from './auth.types';

const defaultState = {
  authUser: null,
  error: null,
};

describe('authReducer', () => {
  // Return default state.
  it('should return the default state', () => {
    expect(authReducer(undefined, {})).toEqual(defaultState);
  });

  // Set current user on auth success.
  it('should set current user on setUser action', () => {
    const mockAuthUser = { authUser: 1 };

    expect(
      authReducer(defaultState, {
        payload: mockAuthUser,
        type: AuthActionTypes.AUTH_SUCCESS,
      }).authUser
    ).toBe(mockAuthUser);
  });

  // Set the current user to null on sign out.
  it('should reset the state on signout action', () => {
    expect(
      authReducer(defaultState, {
        type: AuthActionTypes.AUTH_SIGNOUT,
      })
    ).toEqual(defaultState);
  });

  // Set error message on failure.
  it('should set the error to payload on setError action', () => {
    const mockError = {
      code: 404,
      message: 'error',
    };

    expect(
      authReducer(defaultState, {
        payload: mockError,
        type: AuthActionTypes.AUTH_FAILURE,
      }).error
    ).toBe(mockError);
  });
});
