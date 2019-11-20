import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Tab from '../tab/Tab';

const Tab1 = () => <Tab title="Tab 1" />;
const Tab2 = () => <Tab title="Tab 2" />;
const Tab3 = () => <Tab title="Tab 3" />;

const BottomTabNavigator = createMaterialBottomTabNavigator(
  {
    Tab1: { screen: Tab1 },
    Tab2: { screen: Tab2 },
    Tab3: { screen: Tab3 },
  },
  {
    initialRouteName: 'Tab1',
  }
);

export default BottomTabNavigator;
