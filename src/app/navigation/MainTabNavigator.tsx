import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@src/modules/home/screens/Home';
import Cards from '@src/modules/cards/screens/Cards';
import Profile from '@src/modules/profile/screens/Profile';

import { CARDS, HOME, PROFILE } from './route.actions';

const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarAllowFontScaling: false,
  // tabBarLabelStyle: styles.labelStyles,
  // tabBarActiveTintColor: colors.colorPalette.black,
  // tabBarStyle: styles.generalStyles,
  tabBarLabelPosition: 'below-icon',
};

const MainTabNavigator: React.FC = () => {
  const TabStack = createBottomTabNavigator();

  return (
    <TabStack.Navigator screenOptions={tabBarOptions}>
      <TabStack.Screen name={HOME} component={Home} />
      <TabStack.Screen name={CARDS} component={Cards} />
      <TabStack.Screen name={PROFILE} component={Profile} />
    </TabStack.Navigator>
  );
};

export default MainTabNavigator;
