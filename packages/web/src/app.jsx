/* eslint-disable react/no-array-index-key */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import routes from './util/routes';

const App = (/* props */) => {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Switch>
          {routes.map((r, i) => (
            <Route
              key={`page-${i}`}
              path={r.path}
              exact={r.exact}
              component={r.page}
            />
          ))}
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
