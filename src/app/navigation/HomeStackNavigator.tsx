import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import StoryScreen from "../screens/StoryScreen";
import logo from '@assets/images/logo.png';
import Home from '@src/modules/home/screens/Home';

const styles = StyleSheet.create({
  logoStyle: {
    width: 135,
    height: 50,
  },
});

const HomeStack = createStackNavigator();

const HomeStackNavigator: React.FC = () => (
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
        headerTitle: () => <Image source={logo as ImageSourcePropType} resizeMode="contain" style={styles.logoStyle} />,
        headerRight: () => <Ionicons name="paper-plane-outline" size={25} color="#545454" />,
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackNavigator;
