import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {Host} from 'react-native-portalize';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';

import AccountProfileScreen from '../screens/AccountProfileScreen';
import TeamsListScreen from '../screens/TeamsListScreen';

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
            component={AccountProfileScreen}
            name="AccountProfileScreen"
          />
          <RootNavigator.Screen
            component={TeamsListScreen}
            name="TeamsListScreen"
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
