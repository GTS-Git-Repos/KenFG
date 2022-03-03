import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../sharedComponents/atoms/CustomBottomTab';

import {More,Leaderboard} from './StackNavigations';

import LobbyScreen from '../screens/app/LobbyScreen';
import MyMatchesScreen from '../screens/matches/MyMatchesScreen';
import LeaderBoardListsScreen from '../screens/leaderboard/LeaderBoardListsScreen';

const BottomTab = createBottomTabNavigator();

const config = {
  headerShown: false,
};

export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      detachInactiveScreens={true}
      screenOptions={config}
      initialRouteName="Home"
      tabBar={props => <CustomBottomTab {...props} />}>
      <BottomTab.Screen
        name="LobbyScreen"
        options={{tabBarLabel: 'Home'}}
        component={LobbyScreen}
      />
      <BottomTab.Screen
        name="MyMatchesScreen"
        options={{tabBarLabel: 'My Matches'}}
        component={MyMatchesScreen}
      />
      <BottomTab.Screen
        name="Leaderboard"
        options={{tabBarLabel: 'LeaderBoard'}}
        component={Leaderboard}
      />
      <BottomTab.Screen
        name="More"
        options={{tabBarLabel: 'More'}}
        component={More}
      />
    </BottomTab.Navigator>
  );
}
