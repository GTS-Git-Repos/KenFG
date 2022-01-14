import React, {useEffect} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {Host} from 'react-native-portalize';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import {CardStyleInterpolators} from '@react-navigation/stack';

import {DrawerNav} from './DrawerNavigation';
import {Auth, More, Contest} from './StackNavigations';

import InitialScreen from '../screens/app/InitialScreen';
import NotificationScreen from '../screens/user/NotificationScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
import ProfileEditScreen from '../screens/user/ProfileEditScreen';
import AccountProfileScreen from '../screens/user/AccountProfileScreen';

import LiveMatchScreen from '../screens/matches/LiveMatchScreen';
import CompareTeamsScreen from '../screens/matches/CompareTeamsScreen';
import HowToPlayScreen from '../screens/app/HowToPlayScreen';
import DailyLeaderBoardScreen from '../screens/leaderboard/DailyLeaderBoardScreen';
import TransactionListScreen from '../screens/wallet/TransactionListScreen';
import VerifyAccountScreen from '../screens/wallet/VerifyAccountScreen';
import ManagePaymentsScreen from '../screens/wallet/ManagePaymentsScreen';
import ContestsLiveMatchScreen from '../screens/matches/ContestsLiveMatchScreen';
import CompletedMatchScreen from '../screens/matches/CompletedMatchScreen';
import MonthlyLeaderBoardScreen from '../screens/leaderboard/MonthlyLeaderBoardScreen';
import CreateContestScreen from '../screens/contests/CreateContestScreen';

import TeamsListScreen from '../screens/contests/TeamsListScreen';

import MyContestPlayersScreen from '../screens/contests/MyContestPlayersScreen';
import PlayerProfileScreen from '../screens/contests/PlayerProfileScreen';

import InviteScreen from '../screens/user/InviteScreen';
import ReferredFriendsListScreen from '../screens/user/ReferredFriendsListScreen';
import UserGoalsScreen from '../screens/user/UserGoalsScreen';
import LeaderProfileScreen from '../screens/leaderboard/LeaderProfileScreen';
import AffliatedScreen from '../screens/user/AffliatedScreen';
import AchievementsScreen from '../screens/user/AchievementsScreen';
import LeaderBoardListsScreen from '../screens/leaderboard/LeaderBoardListsScreen';

const RootNavigator = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const StackConfig = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export default function RootNavigation() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Host>
        <RootNavigator.Navigator
          screenOptions={StackConfig}
          initialRouteName="InitialScreen">
          <RootNavigator.Screen
            component={InitialScreen}
            name="InitialScreen"
          />
          <RootNavigator.Screen component={Auth} name="Auth" />
          <RootNavigator.Screen component={DrawerNav} name="DrawerNav" />
          <RootNavigator.Screen component={More} name="More" />
          <RootNavigator.Screen component={Contest} name="Contest" />

          <RootNavigator.Screen
            component={CreateContestScreen}
            name="CreateContestScreen"
          />

          <RootNavigator.Screen
            component={NotificationScreen}
            name="NotificationScreen"
          />
          <RootNavigator.Screen
            component={ManagePaymentsScreen}
            name="ManagePaymentsScreen"
          />
          <RootNavigator.Screen
            component={LeaderBoardListsScreen}
            name="LeaderBoardListsScreen"
          />
          <RootNavigator.Screen
            component={MonthlyLeaderBoardScreen}
            name="MonthlyLeaderBoardScreen"
          />

          <RootNavigator.Screen
            component={CompletedMatchScreen}
            name="CompletedMatchScreen"
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
            component={AffliatedScreen}
            name="AffliatedScreen"
          />
          <RootNavigator.Screen
            component={AchievementsScreen}
            name="AchievementsScreen"
          />
          <RootNavigator.Screen
            component={LeaderProfileScreen}
            name="LeaderProfileScreen"
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
            component={HowToPlayScreen}
            name="HowToPlayScreen"
          />
          <RootNavigator.Screen
            component={ReferredFriendsListScreen}
            name="ReferredFriendsListScreen"
          />

          <RootNavigator.Screen
            component={DailyLeaderBoardScreen}
            name="DailyLeaderBoardScreen"
          />
          <RootNavigator.Screen
            component={TransactionListScreen}
            name="TransactionListScreen"
          />
          <RootNavigator.Screen
            component={TeamsListScreen}
            name="TeamsListScreen"
          />
          <RootNavigator.Screen
            component={ContestsLiveMatchScreen}
            name="ContestsLiveMatchScreen"
          />

          <RootNavigator.Screen
            component={UserGoalsScreen}
            name="UserGoalsScreen"
          />

          <RootNavigator.Screen
            component={MyContestPlayersScreen}
            name="MyContestPlayersScreen"
          />
          <RootNavigator.Screen
            component={PlayerProfileScreen}
            name="PlayerProfileScreen"
          />
          <RootNavigator.Screen component={InviteScreen} name="InviteScreen" />
          <RootNavigator.Screen
            component={VerifyAccountScreen}
            name="VerifyAccountScreen"
          />
        </RootNavigator.Navigator>
      </Host>
    </NavigationContainer>
  );
}
