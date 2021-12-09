import React, {useEffect} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {Host} from 'react-native-portalize';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DrawerNav} from './DrawerNavigation';
import {Home, Auth} from './StackNavigations';

import InitialScreen from '../screens/InitialScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ContestListScreen from '../screens/ContestListScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import AccountProfileScreen from '../screens/AccountProfileScreen';
import ContestInfoScreen from '../screens/ContestInfoScreen';
import CreateTeamScreen from '../screens/CreateTeamScreen';
import LiveMatchScreen from '../screens/LiveMatchScreen';
import MatchGroundScreen from '../screens/MatchGroundScreen';
import CapSelectionScreen from '../screens/CapSelectionScreen';
import CompareTeamsScreen from '../screens/CompareTeamsScreen';
import HowToPlayScreen from '../screens/HowToPlayScreen';
import LeaderBoard from '../screens/LeaderBoard';
import TransactionListScreen from '../screens/TransactionListScreen';

import TeamsListScreen from '../screens/TeamsListScreen';

import MyContestPlayersInfo from '../screens/MyContestPlayersInfo';
import PlayerProfileScreen from '../screens/PlayerProfileScreen';
import MoreScreen from '../screens/MoreScreen';

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
          initialRouteName="CreateTeamScreen"
          screenOptions={StackConfig}>
          <RootNavigator.Screen
            component={InitialScreen}
            name="InitialScreen"
          />

          <RootNavigator.Screen component={Auth} name="Auth" />
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
          <RootNavigator.Screen
            component={AccountProfileScreen}
            name="AccountProfileScreen"
          />
          <RootNavigator.Screen
            component={ContestInfoScreen}
            name="ContestInfoScreen"
          />
          <RootNavigator.Screen
            component={CreateTeamScreen}
            name="CreateTeamScreen"
          />
          <RootNavigator.Screen
            component={LiveMatchScreen}
            name="LiveMatchScreen"
          />
          <RootNavigator.Screen
            component={MatchGroundScreen}
            name="MatchGroundScreen"
          />
          <RootNavigator.Screen
            component={CapSelectionScreen}
            name="CapSelectionScreen"
          />
          <RootNavigator.Screen
            component={CompareTeamsScreen}
            name="CompareTeamsScreen"
          />
          <RootNavigator.Screen
            component={HowToPlayScreen}
            name="HowToPlayScreen"
          />
          <RootNavigator.Screen component={MoreScreen} name="MoreScreen" />
          <RootNavigator.Screen component={LeaderBoard} name="LeaderBoard" />
          <RootNavigator.Screen
            component={TransactionListScreen}
            name="TransactionListScreen"
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
