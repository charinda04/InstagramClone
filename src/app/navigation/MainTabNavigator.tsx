import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Discovery from '@src/modules/discovery/screens/Discovery';
import CreatePost from '@src/modules/createPost/CreatePost';
import Notifications from '@src/modules/notifications/Notifications';
import Profile from '@src/modules/profile/screens/Profile';

import HomeStackNavigator from './HomeStackNavigator';

const tabBarOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarAllowFontScaling: false,
  tabBarLabelPosition: 'below-icon',
  tabBarActiveTintColor: '#000',
  tabBarInactiveTintColor: 'gray',
  tabBarShowLabel: false,
};

const MainTabNavigator: React.FC = () => {
  const TabStack = createBottomTabNavigator();

  return (
    <TabStack.Navigator
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        tabBarIcon: ({ color, size }): React.ReactNode => {
          if (route.name === 'Home') {
            return <Foundation name="home" size={size} color={color} />;
          }
          if (route.name === 'Discovery') {
            return <Feather name="search" size={size} color={color} />;
          }
          if (route.name === 'Post') {
            return <Feather name="plus-square" size={size} color={color} />;
          }
          if (route.name === 'Notifications') {
            return <AntDesign name="hearto" size={size} color={color} />;
          }
          if (route.name === 'Profile') {
            return <Ionicons name="person-outline" size={size} color={color} />;
          }
          return <></>;
        },
        ...tabBarOptions,
      })}>
      <TabStack.Screen name="Home" component={HomeStackNavigator} />
      <TabStack.Screen name="Discovery" component={Discovery} />
      <TabStack.Screen name="Post" component={CreatePost} />
      <TabStack.Screen name="Notifications" component={Notifications} />
      <TabStack.Screen name="Profile" component={Profile} />
    </TabStack.Navigator>
  );
};

export default MainTabNavigator;
