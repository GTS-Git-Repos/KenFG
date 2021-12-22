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
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import TransactionListScreen from '../screens/TransactionListScreen';
import VerifyAccountScreen from '../screens/VerifyAccountScreen';
import ManagePaymentsScreen from '../screens/ManagePaymentsScreen';
import ContestsLiveMatchScreen from '../screens/ContestsLiveMatchScreen';

import TeamsListScreen from '../screens/TeamsListScreen';

import MyContestPlayersScreen from '../screens/MyContestPlayersScreen';
import PlayerProfileScreen from '../screens/PlayerProfileScreen';
import MoreScreen from '../screens/MoreScreen';
import InviteScreen from '../screens/InviteScreen';
import ReferredFriendsListScreen from '../screens/ReferredFriendsListScreen';
import UserGoalsScreen from '../screens/UserGoalsScreen';
import LeaderProfileScreen from '../screens/LeaderProfileScreen';
import AffliatedScreen from '../screens/AffliatedScreen';
import AchievementsScreen from '../screens/AchievementsScreen';

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
  const forFade = (args: any) => {
    console.log(args);
    return {
      opacity: 0.5,
    };
  };

  // const forFade = ({current}) => ({
  //   cardStyle: {
  //     opacity: current.progress,
  //   },
  // });

  return (
    <NavigationContainer theme={DarkTheme}>
      <Host>
        <RootNavigator.Navigator
          // screenOptions={{...TransitionPresets.SlideFromRightIOS}}
          // screenOptions={{
          //   cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // }}
          screenOptions={StackConfig}
          // screenOptions={{StackConfig}}
          initialRouteName="InitialScreen">
          <RootNavigator.Screen
            component={InitialScreen}
            name="InitialScreen"
          />

          {/* transitionSpec: {
              open: {
                animation: 'spring',
                config: {
                  stiffness: 1000,
                  damping: 500,
                  mass: 3,
                  overshootClamping: true,
                  restDisplacementThreshold: 0.01,
                  restSpeedThreshold: 0.01,
                }
              },
              close: {
                animation: 'spring',
                config: {
                  stiffness: 1000,
                  damping: 500,
                  mass: 3,
                  overshootClamping: true,
                  restDisplacementThreshold: 0.01,
                  restSpeedThreshold: 0.01,
                },
            }
          } */}

          <RootNavigator.Screen component={Auth} name="Auth" />
          <RootNavigator.Screen
            // options={{cardStyleInterpolator: forFade}}
            // options={StackConfig}
            component={DrawerNav}
            name="DrawerNav"
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
            // options={{cardStyleInterpolator: forFade}}
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
            component={AffliatedScreen}
            name="AffliatedScreen"
          />
          <RootNavigator.Screen
            component={AchievementsScreen}
            name="AchievementsScreen"
          />

          <RootNavigator.Screen
            component={ContestInfoScreen}
            name="ContestInfoScreen"
          />
          <RootNavigator.Screen
            component={LeaderProfileScreen}
            name="LeaderProfileScreen"
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
          <RootNavigator.Screen
            component={ReferredFriendsListScreen}
            name="ReferredFriendsListScreen"
          />

          <RootNavigator.Screen component={MoreScreen} name="MoreScreen" />
          <RootNavigator.Screen
            component={LeaderBoardScreen}
            name="LeaderBoardScreen"
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
