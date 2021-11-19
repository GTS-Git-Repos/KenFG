import React, {useState, useEffect} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {Host} from 'react-native-portalize';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';

import ContestListScreen from '../screens/ContestListScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ContentInfoScreen from '../screens/ContentInfoScreen';
import CreateTeamScreen from '../screens/CreateTeamScreen';
import MatchGroundScreen from '../screens/MatchGroundScreen';
import TeamReviewScreen from '../screens/TeamReviewScreen';
import AccountProfileScreen from '../screens/AccountProfileScreen';
import TeamsListScreen from '../screens/TeamsListScreen';
import LiveMatchScreen from '../screens/LiveMatchScreen';
import CompareTeamsScreen from '../screens/CompareTeamsScreen';
import MyContestPlayersInfo from '../screens/MyContestPlayersInfo';
import PlayerProfileScreen from '../screens/PlayerProfileScreen';

const RootNavigator = createNativeStackNavigator();

const StackConfig = {
  headerShown: false,
};

// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     background: 'rgb(0, 0, 0)',P
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
      <Host>
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
          <RootNavigator.Screen
            component={AccountProfileScreen}
            name="AccountProfileScreen"
          />
          <RootNavigator.Screen
            component={TeamsListScreen}
            name="TeamsListScreen"
          />
          <RootNavigator.Screen
            component={LiveMatchScreen}
            name="LiveMatchScreen"
          />
          <RootNavigator.Screen
            component={CompareTeamsScreen}
            name="CompareTeamsScreen"
          />
          <RootNavigator.Screen
            component={MyContestPlayersInfo}
            name="MyContestPlayersInfo"
          />
          <RootNavigator.Screen
            component={PlayerProfileScreen}
            name="PlayerProfileScreen"
          />
        </RootNavigator.Navigator>
      </Host>
    </NavigationContainer>
  );
}
