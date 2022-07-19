import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import LoggingService from '@src/services/loggingService';
// import {setDeviceOrientation} from '@utils/appUtils';
// import {DEVICE_ORIENTATION_TYPES} from '@src/shared/enums';

import { navigationRef } from './rootNavigation';
import { MAIN_STACK_NAVIGATOR } from './route.actions';
import MainStackNavigator from './MainStackNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
  useEffect(() => {
    // LoggingService.init();
    // if (isTablet()) {
    //   setDeviceOrientation(DEVICE_ORIENTATION_TYPES.LANDSCAPE);
    // } else {
    //   setDeviceOrientation(DEVICE_ORIENTATION_TYPES.PORTRAIT);
    // }
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <>
        <Stack.Navigator>
          <Stack.Screen name={MAIN_STACK_NAVIGATOR} component={MainStackNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
      </>
    </NavigationContainer>
  );
};

export default AppNavigator;
