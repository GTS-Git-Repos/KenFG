import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../sharedComponents/atoms/CustomBottomTab';

import LobbyScreen from '../screens/LobbyScreen';
import BluePrintScreen from '../screens/BluePrintScreen';

const BottomTab = createBottomTabNavigator();

const config = {headerShown: false};

export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={config}
      tabBar={props => <CustomBottomTab {...props} />}>
      <BottomTab.Screen name="Home" component={LobbyScreen} />
      <BottomTab.Screen name="My Contest" component={BluePrintScreen} />
      <BottomTab.Screen name="LeaderBoard" component={BluePrintScreen} />
      <BottomTab.Screen name="More" component={BluePrintScreen} />
    </BottomTab.Navigator>
  );
}
