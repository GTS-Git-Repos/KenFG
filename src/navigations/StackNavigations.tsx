import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LobbyScreen from '../screens/LobbyScreen';
import ContestListScreen from '../screens/ContestListScreen';
import ContentInfoScreen from '../screens/ContentInfoScreen';
import LiveMatchScreen from '../screens/LiveMatchScreen';
import MatchGroundScreen from '../screens/MatchGroundScreen';
import AccountProfileScreen from '../screens/AccountProfileScreen';
import CapSelectionScreen from '../screens/CapSelectionScreen';
import TeamsListScreen from '../screens/TeamsListScreen';
import NotificationScreen from '../screens/NotificationScreen';
import WalletScreen from '../screens/WalletScreen';

import CreateTeamScreen from '../screens/CreateTeamScreen';
import CompareTeamsScreen from '../screens/CompareTeamsScreen';

import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';

const StackConfig = {headerShown: false};

const HomeStack = createNativeStackNavigator();
const ContestStack = createNativeStackNavigator();
const MatchStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

export function Home(props: any) {
  return (
    <HomeStack.Navigator screenOptions={StackConfig}>
      <HomeStack.Screen name="LobbyScreen" component={LobbyScreen} />

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
    </HomeStack.Navigator>
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
        name="ContentInfoScreen"
        component={ContentInfoScreen}
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
    </AuthStack.Navigator>
  );
}
