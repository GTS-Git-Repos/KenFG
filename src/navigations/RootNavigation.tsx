import React, {useState, useEffect} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';

import ContestListScreen from '../screens/ContestListScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ContentInfoScreen from '../screens/ContentInfoScreen';
import CreateTeamScreen from '../screens/CreateTeamScreen';
import MatchGroundScreen from '../screens/MatchGroundScreen';
import TeamReviewScreen from '../screens/TeamReviewScreen';

const RootNavigator = createNativeStackNavigator();

const StackConfig = {
  headerShown: false,
};

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     background: 'rgb(0, 0, 0)',
//     border: 'rgb(0, 0, 0)',
//     card: 'rgb(0, 0, 0)',
//     notification: 'rgb(0, 0, 0)',
//     primary: 'rgb(0, 0, 0)',
//     text: 'rgb(0, 0, 0)',
//   },
//   dark: true,
// };

// console.log('DarkTheme', DarkTheme);

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
        <RootNavigator.Screen
          component={ContestListScreen}
          name="ContestListScreen"
        />
        <RootNavigator.Screen component={LoginScreen} name="LoginScreen" />
        <RootNavigator.Screen component={SignupScreen} name="SignupScreen" />
        <RootNavigator.Screen
          component={ContentInfoScreen}
          name="ContentInfoScreen"
        />
        <RootNavigator.Screen
          component={CreateTeamScreen}
          name="CreateTeamScreen"
        />
        <RootNavigator.Screen
          component={MatchGroundScreen}
          name="MatchGroundScreen"
        />
         <RootNavigator.Screen
          component={TeamReviewScreen}
          name="TeamReviewScreen"
        />
        
      </RootNavigator.Navigator>
    </NavigationContainer>
  );
}
