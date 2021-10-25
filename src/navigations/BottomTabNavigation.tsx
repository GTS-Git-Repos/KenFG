import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../sharedComponents/atoms/CustomBottomTab';

import HomeScreen from '../screens/HomeScreen';
import BluePrintScreen from '../screens/BluePrintScreen';

const BottomTab = createBottomTabNavigator();

const config = {headerShown: false};

export default function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={config}
      tabBar={props => <CustomBottomTab {...props} />}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Matches" component={BluePrintScreen} />
      <BottomTab.Screen name="LeaderBoard" component={BluePrintScreen} />
      <BottomTab.Screen name="More" component={BluePrintScreen} />
    </BottomTab.Navigator>
  );
}
