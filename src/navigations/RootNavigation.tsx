import React, {useEffect} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {Host} from 'react-native-portalize';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';

import {DrawerNav} from './DrawerNavigation';
import {Home, Auth, More, Contest} from './StackNavigations';

import InitialScreen from '../screens/InitialScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ContestListScreen from '../screens/ContestListScreen';
import WalletScreen from '../screens/WalletScreen';
import ProfileEditScreen from '../screens/ProfileEditScreen';
import AccountProfileScreen from '../screens/AccountProfileScreen';
import ContestInfoScreen from '../screens/ContestInfoScreen';
import CreateTeamScreen from '../screens/CreateTeamScreen';
import LiveMatchScreen from '../screens/LiveMatchScreen';
import TeamPreviewScreen from '../screens/TeamPreviewScreen';
import CapSelectionScreen from '../screens/CapSelectionScreen';
import CompareTeamsScreen from '../screens/CompareTeamsScreen';
import HowToPlayScreen from '../screens/HowToPlayScreen';
import DailyLeaderBoardScreen from '../screens/DailyLeaderBoardScreen';
import TransactionListScreen from '../screens/TransactionListScreen';
import VerifyAccountScreen from '../screens/VerifyAccountScreen';
import ManagePaymentsScreen from '../screens/ManagePaymentsScreen';
import ContestsLiveMatchScreen from '../screens/ContestsLiveMatchScreen';
import CompletedMatchScreen from '../screens/CompletedMatchScreen';
import MonthlyLeaderBoardScreen from '../screens/MonthlyLeaderBoardScreen';
import CreateContestScreen from '../screens/CreateContestScreen';

import TeamsListScreen from '../screens/TeamsListScreen';

import MyContestPlayersScreen from '../screens/MyContestPlayersScreen';
import PlayerProfileScreen from '../screens/PlayerProfileScreen';

import InviteScreen from '../screens/InviteScreen';
import ReferredFriendsListScreen from '../screens/ReferredFriendsListScreen';
import UserGoalsScreen from '../screens/UserGoalsScreen';
import LeaderProfileScreen from '../screens/LeaderProfileScreen';
import AffliatedScreen from '../screens/AffliatedScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import LeaderBoardListsScreen from '../screens/LeaderBoardListsScreen';

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

          {/* <RootNavigator.Screen
            component={ContestListScreen}
            name="ContestListScreen"
          /> */}
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

          {/* <RootNavigator.Screen
            component={ContestInfoScreen}
            name="ContestInfoScreen"
          /> */}
          <RootNavigator.Screen
            component={LeaderProfileScreen}
            name="LeaderProfileScreen"
          />

          {/* <RootNavigator.Screen
            component={CreateTeamScreen}
            name="CreateTeamScreen"
          /> */}
          <RootNavigator.Screen
            component={LiveMatchScreen}
            name="LiveMatchScreen"
          />
          {/* <RootNavigator.Screen
            component={TeamPreviewScreen}
            name="TeamPreviewScreen"
          /> */}
          {/* <RootNavigator.Screen
            component={CapSelectionScreen}
            name="CapSelectionScreen"
          /> */}
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
