import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import store from 'shared/src/redux/store';
import { initFirebase } from 'shared/src/components/firebase';

import App from './app';
import ErrorBoundary from './ErrorBoundary';

const FirebaseProvider = initFirebase(connect);

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
);
