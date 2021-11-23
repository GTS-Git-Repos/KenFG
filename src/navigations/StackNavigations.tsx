import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LobbyScreen from '../screens/LobbyScreen';
import ContestListScreen from '../screens/ContestListScreen';
import ContentInfoScreen from '../screens/ContentInfoScreen';
import LiveMatchScreen from '../screens/LiveMatchScreen';
import MatchGroundScreen from '../screens/MatchGroundScreen';

import CreateTeamScreen from '../screens/CreateTeamScreen';

const StackConfig = {headerShown: false};

const HomeStack = createNativeStackNavigator();
const ContestStack = createNativeStackNavigator();

export function Home(props: any) {
  return (
    <HomeStack.Navigator screenOptions={StackConfig}>
      <HomeStack.Screen name="LobbyScreen" component={LobbyScreen} />

      <HomeStack.Screen
        name="MatchGroundScreen"
        component={MatchGroundScreen}
      />
      <HomeStack.Screen name="CreateTeamScreen" component={CreateTeamScreen} />
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
    </ContestStack.Navigator>
  );
}
