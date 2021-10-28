import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {
  createNativeStackNavigator,
  DarkTheme,
} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';

import ContestListScreen from '../screens/ContestListScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const RootNavigator = createNativeStackNavigator();

const StackConfig = {
  headerShown: false,
  cardStyle: {backgroundColor: 'black'},
  cardStyleInterpolator: ({current: {progress}}) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};

export default function RootNavigation() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootNavigator.Navigator
        initialRouteName="BottomTabNavigation"
        screenOptions={StackConfig}>
        <RootNavigator.Screen
          component={BottomTabNavigation}
          name="BottomTabNavigation"
        />
        <RootNavigator.Screen component={ContestListScreen} name="ContestListScreen" />
        <RootNavigator.Screen component={LoginScreen} name="LoginScreen" />
        <RootNavigator.Screen component={SignupScreen} name="SignupScreen" />
        
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
