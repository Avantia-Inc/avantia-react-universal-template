import React from 'react';
import { shallow } from 'enzyme';

// Component
import Home from './Home';

// Render the compnonent.
it('should render the Home component', () => {
  expect(shallow(<Home />)).toMatchSnapshot();
});
