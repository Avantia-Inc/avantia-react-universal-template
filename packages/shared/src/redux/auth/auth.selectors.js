const getAuthUser = state => {
  return state.auth.authUser;
};

const getAuthError = state => {
  return state.auth.error;
};

export { getAuthUser, getAuthError };
