import React from 'react';
import { Title } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const Tab1 = () => <Title>Tab 1</Title>;
const Tab2 = () => <Title>Tab 2</Title>;
const Tab3 = () => <Title>Tab 3</Title>;

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
