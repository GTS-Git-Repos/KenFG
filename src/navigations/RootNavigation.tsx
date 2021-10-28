import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';

import ContestScreen from '../screens/ContestScreen';

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
    <NavigationContainer>
      <RootNavigator.Navigator
        initialRouteName="BottomTabNavigation"
        screenOptions={StackConfig}>
        <RootNavigator.Screen
          component={BottomTabNavigation}
          name="BottomTabNavigation"
        />
        <RootNavigator.Screen component={ContestScreen} name="ContestScreen" />
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
