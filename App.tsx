/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import TabNavigation from './navigation/tabNavigation';
import Splash from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';
const App = () => {
  const Stack = createStackNavigator();
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  useEffect(() => {
    requestUserPermission();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
