import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../sharedComponents/atoms/CustomBottomTab';

import {More} from './StackNavigations';

import LobbyScreen from '../screens/LobbyScreen';
import MyMatchesScreen from '../screens/MyMatchesScreen';
import LiveMatchScreen from '../screens/LiveMatchScreen';

import LoginScreen from '../screens/LoginScreen';

import BluePrintScreen from '../screens/BluePrintScreen';
import ContainerScreen from '../screens/ContainerScreen';
import LeaderBoardListsScreen from '../screens/LeaderBoardListsScreen';

const BottomTab = createBottomTabNavigator();

const config = {
  headerShown: false,
  // cardStyle: {backgroundColor: 'black'},
  // cardStyleInterpolator: ({current: {progress}}) => ({
  //   cardStyle: {
  //     opacity: progress.interpolate({
  //       inputRange: [0, 1],
  //       outputRange: [0, 1],
  //     }),
  //   },
  //   overlayStyle: {
  //     opacity: progress.interpolate({
  //       inputRange: [0, 1],
  //       outputRange: [0, 0.5],
  //       extrapolate: 'clamp',
  //     }),
  //   },
  // }),
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
        name="LeaderBoardListsScreen"
        options={{tabBarLabel: 'LeaderBoard'}}
        component={LeaderBoardListsScreen}
      />
      <BottomTab.Screen
        name="More"
        options={{tabBarLabel: 'More'}}
        component={More}
      />
    </BottomTab.Navigator>
  );
}
