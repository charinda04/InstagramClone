import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN } from '@src/app/navigation/route.actions';
import * as React from 'react';
import Login from '../screens/Login';


const AuthStackNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name={LOGIN} component={Login} />
      {/* <Stack.Screen name={FORGET_PASSWORD} component={ForgotPassword} /> */}
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
