import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ContestListScreen from '../screens/matches/ContestsLiveMatchScreen/ContestListScreen';
import ContestInfoScreen from '../screens/contests/ContestInfoScreen';
import LiveMatchScreen from '../screens/matches/LiveMatchScreen';
import TeamPreviewScreen from '../screens/contests/TeamPreviewScreen';
import AccountProfileScreen from '../screens/user/AccountProfileScreen';
import CapSelectionScreen from '../screens/contests/CapSelectionScreen';
import TeamsListScreen from '../screens/contests/TeamsListScreen';
import NotificationScreen from '../screens/user/NotificationScreen';
import WalletScreen from '../screens/wallet/WalletScreen';
import TransactionListScreen from '../screens/wallet/TransactionListScreen';
import SignupScreen from '../screens/user/SignupScreen';
import FantasyTeamNameScreen from '../screens/leaderboard/FantasyTeamNameScreen';
import TeamSelectionScreen from '../screens/contests/TeamSelectionScreen';

import CreateTeamScreen from '../screens/contests/CreateTeamScreen';
import CompareTeamsScreen from '../screens/matches/CompareTeamsScreen';

import LoginScreen from '../screens/user/LoginScreen';
import OTPScreen from '../screens/user/OTPScreen';

import MoreScreen from '../screens/app/MoreScreen';
import AboutUsScreen from '../screens/app/AboutUsScreen';
import TermsScreen from '../screens/app/TermsScreen';
import FairPlayScreen from '../screens/app/FairPlayScreen';
import PrivacyPolicyScreen from '../screens/app/PrivacyPolicyScreen';

import MyMatchesScreen from '../screens/matches/MyMatchesScreen';

import {CardStyleInterpolators} from '@react-navigation/stack';

const StackConfig = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const HomeStack = createStackNavigator();
const ContestStack = createStackNavigator();
const MyMatch = createStackNavigator();
const MatchStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MoreStack = createStackNavigator();

export function Home(props: any) {
  return (
    <HomeStack.Navigator screenOptions={StackConfig}>
      <HomeStack.Screen
        name="TeamPreviewScreen"
        component={TeamPreviewScreen}
      />
      <HomeStack.Screen
        name="AccountProfileScreen"
        component={AccountProfileScreen}
      />
      <HomeStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
      <HomeStack.Screen name="LiveMatchScreen" component={LiveMatchScreen} />
      <HomeStack.Screen name="WalletScreen" component={WalletScreen} />
      <HomeStack.Screen
        name="TransactionListScreen"
        component={TransactionListScreen}
      />
    </HomeStack.Navigator>
  );
}

export function MyMatches(props: any) {
  return (
    <MyMatch.Navigator screenOptions={StackConfig}>
      <MyMatch.Screen name="MyMatchesScreen" component={MyMatchesScreen} />
    </MyMatch.Navigator>
  );
}

export function Contest(props: any) {
  return (
    <ContestStack.Navigator screenOptions={StackConfig}>
      <ContestStack.Screen
        name="ContestListScreen"
        component={ContestListScreen}
      />

      <ContestStack.Screen
        component={ContestInfoScreen}
        name="ContestInfoScreen"
      />
      <ContestStack.Screen name="TeamsListScreen" component={TeamsListScreen} />
      <ContestStack.Screen
        name="CreateTeamScreen"
        component={CreateTeamScreen}
      />
      <ContestStack.Screen
        name="CapSelectionScreen"
        component={CapSelectionScreen}
      />

      <ContestStack.Screen
        name="TeamPreviewScreen"
        component={TeamPreviewScreen}
      />
      <ContestStack.Screen
        name="TeamSelectionScreen"
        component={TeamSelectionScreen}
      />
    </ContestStack.Navigator>
  );
}

export function Match(props: any) {
  return (
    <MatchStack.Navigator screenOptions={StackConfig}>
      <MatchStack.Screen name="LiveMatchScreen" component={LiveMatchScreen} />
      <MatchStack.Screen
        name="CompareTeamsScreen"
        component={CompareTeamsScreen}
      />
    </MatchStack.Navigator>
  );
}

export function Auth(props: any) {
  return (
    <AuthStack.Navigator screenOptions={StackConfig}>
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="OTPScreen" component={OTPScreen} />
      <AuthStack.Screen
        name="FantasyTeamNameScreen"
        component={FantasyTeamNameScreen}
      />
    </AuthStack.Navigator>
  );
}

export function More(props: any) {
  return (
    <MoreStack.Navigator
      screenOptions={StackConfig}
      initialRouteName="MoreScreen">
      <MoreStack.Screen name="MoreScreen" component={MoreScreen} />
      <MoreStack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <MoreStack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <MoreStack.Screen name="FairPlayScreen" component={FairPlayScreen} />
      <MoreStack.Screen name="TermsScreen" component={TermsScreen} />
    </MoreStack.Navigator>
  );
}
