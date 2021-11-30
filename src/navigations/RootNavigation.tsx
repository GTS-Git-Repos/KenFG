import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {Host} from 'react-native-portalize';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DrawerNav} from './DrawerNavigation';

import NotificationScreen from '../screens/NotificationScreen';
import ContestListScreen from '../screens/ContestListScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import TeamsListScreen from '../screens/TeamsListScreen';

import MyContestPlayersInfo from '../screens/MyContestPlayersInfo';
import PlayerProfileScreen from '../screens/PlayerProfileScreen';

import {Home} from './StackNavigations';

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
          initialRouteName="ProfileEditScreen"
          screenOptions={StackConfig}>
          <RootNavigator.Screen component={DrawerNav} name="DrawerNav" />
          <RootNavigator.Screen
            component={NotificationScreen}
            name="NotificationScreen"
          />
          <RootNavigator.Screen
            component={ContestListScreen}
            name="ContestListScreen"
          />
          <RootNavigator.Screen component={WalletScreen} name="WalletScreen" />
          <RootNavigator.Screen
            component={ProfileEditScreen}
            name="ProfileEditScreen"
          />
        </RootNavigator.Navigator>
      </Host>
    </NavigationContainer>
  );
}
