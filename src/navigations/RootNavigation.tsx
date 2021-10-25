import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomTabNavigation';

const RootNavigator = createNativeStackNavigator();

const StackConfig = { headerShown: false };

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <RootNavigator.Navigator
                initialRouteName="BottomTabNavigation"
                screenOptions={StackConfig}>
                <RootNavigator.Screen component={BottomTabNavigation} name="BottomTabNavigation" />
            </RootNavigator.Navigator>
        </NavigationContainer>
    );
}