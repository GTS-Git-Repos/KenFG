import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';
import {ScrollView} from 'react-native-gesture-handler';
import LeaderProfileCard from './atoms/LeaderProfileCard';
import Header from './atoms/Header';
import StateData from './molecules/StatData';

const log = console.log;

export default function LeaderProfileScreen() {
  const navigation = useNavigation();
  const route = useRoute<any>();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'User Stats'} />
      <ScrollView>
        <LeaderProfileCard type={route.params?.type} />
        <Header />
        <StateData points={'423.4'} type={route.params?.type} />
        <StateData points={'223.4'} type={route.params?.type} />
        <StateData points={'563.2'} type={route.params?.type} />
        <StateData points={'423.4'} type={route.params?.type} />
        <StateData points={'223.4'} type={route.params?.type} />
        <StateData points={'563.2'} type={route.params?.type} />
      </ScrollView>
    </View>
  );
}

// type = 0 is weekly
// type = 1 is monthly
