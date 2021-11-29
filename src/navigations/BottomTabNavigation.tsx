import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../sharedComponents/atoms/CustomBottomTab';

import {Contest, Home, Auth, Match, MyMatches} from './StackNavigations';

import LiveMatchScreen from '../screens/LiveMatchScreen';

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
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="My Contest" component={MyMatches} />
      <BottomTab.Screen name="LeaderBoard" component={Match} />
      <BottomTab.Screen name="User" component={Auth} />
    </BottomTab.Navigator>
  );
}
