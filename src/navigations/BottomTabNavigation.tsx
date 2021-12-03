import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../sharedComponents/atoms/CustomBottomTab';

import {Contest, Home, Auth, Match, MyMatches} from './StackNavigations';

import LobbyScreen from '../screens/LobbyScreen';
import MyMatchesScreen from '../screens/MyMatchesScreen';
import LiveMatchScreen from '../screens/LiveMatchScreen';
import LeaderBoard from '../screens/LeaderBoard';
import LoginScreen from '../screens/LoginScreen';
import MoreScreen from '../screens/MoreScreen';

import BluePrintScreen from '../screens/BluePrintScreen';
import ContainerScreen from '../screens/ContainerScreen';

const BottomTab = createBottomTabNavigator();

const config = {
  headerShown: false,
  cardStyle: {backgroundColor: 'black'},
  cardStyleInterpolator: ({current: {progress}}) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
};

export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
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
        name="LeaderBoard"
        options={{tabBarLabel: 'LeaderBoard'}}
        component={LeaderBoard}
      />
      <BottomTab.Screen
        name="MoreScreen"
        options={{tabBarLabel: 'More'}}
        component={MoreScreen}
      />
    </BottomTab.Navigator>
  );
}
