import React from 'react';
import { shallow } from 'enzyme';

// Component
import Tab from './Tab';

// Render the component.
it('should render the Tab component', () => {
  expect(shallow(<Tab />)).toMatchSnapshot();
});
