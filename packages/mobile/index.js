import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';

import store from 'shared/src/redux/store';
import { initFirebase } from 'shared/src/components/firebase';

import App from './src/App';

const FirebaseProvider = initFirebase(connect);

AppRegistry.registerComponent('mobile', () => () => (
  <Provider store={store}>
    <PaperProvider>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </PaperProvider>
  </Provider>
));
