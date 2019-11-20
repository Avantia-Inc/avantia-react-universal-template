import React from 'react';
import { operations } from '../../redux/firebase';

import Firebase from './firebase';

const FirebaseContext = React.createContext(null);

export const initFirebase = connect => {
  return connect(() => ({}), {
    signinUser: operations.signinUser,
    signoutUser: operations.signoutUser,
  })(FirebaseProvider);
};

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

const FirebaseProvider = props => {
  return (
    <FirebaseContext.Provider value={new Firebase(props)}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
