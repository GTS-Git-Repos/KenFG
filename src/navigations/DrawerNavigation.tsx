import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../sharedComponents/molecules/CustomDrawer';

import Bottomtab from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

export function DrawerNav(props: any) {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Bottomtab" component={Bottomtab} />
    </Drawer.Navigator>
  );
}
