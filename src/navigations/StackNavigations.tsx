import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ContestListScreen from '../screens/ContestListScreen';
import ContestInfoScreen from '../screens/ContestInfoScreen';
import LiveMatchScreen from '../screens/LiveMatchScreen';
import MatchGroundScreen from '../screens/MatchGroundScreen';
import AccountProfileScreen from '../screens/AccountProfileScreen';
import CapSelectionScreen from '../screens/CapSelectionScreen';
import TeamsListScreen from '../screens/TeamsListScreen';
import NotificationScreen from '../screens/NotificationScreen';
import WalletScreen from '../screens/WalletScreen';
import TransactionListScreen from '../screens/TransactionListScreen';
import SignupScreen from '../screens/SignupScreen';
import FantasyTeamNameScreen from '../screens/FantasyTeamNameScreen';

import CreateTeamScreen from '../screens/CreateTeamScreen';
import CompareTeamsScreen from '../screens/CompareTeamsScreen';

import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';

import MyMatchesScreen from '../screens/MyMatchesScreen';
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

export function Home(props: any) {
  return (
    <HomeStack.Navigator screenOptions={StackConfig}>
      <HomeStack.Screen
        name="MatchGroundScreen"
        component={MatchGroundScreen}
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
        name="CreateTeamScreen"
        component={CreateTeamScreen}
      />
      <ContestStack.Screen
        name="CapSelectionScreen"
        component={CapSelectionScreen}
      />

      <ContestStack.Screen
        name="MatchGroundScreen"
        component={MatchGroundScreen}
      />
      <ContestStack.Screen
        name="CompareTeamsScreen"
        component={CompareTeamsScreen}
      />
      <ContestStack.Screen name="TeamsListScreen" component={TeamsListScreen} />
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
