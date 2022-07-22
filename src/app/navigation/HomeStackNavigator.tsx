import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import StoryScreen from "../screens/StoryScreen";
import logo from '@assets/images/logo.png';
import Home from '@src/modules/home/screens/Home';

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Instagram',
        headerLeftContainerStyle: {
          marginLeft: 15,
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        headerLeft: () => <Feather name="camera" size={25} color="#000" />,
        headerTitle: () => <Image source={logo} resizeMode="contain" style={{ width: 135, height: 50 }} />,
        headerRight: () => <Ionicons name="paper-plane-outline" size={25} color="#545454" />,
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
