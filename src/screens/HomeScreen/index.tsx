import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import tailwind from '../../../tailwind';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import assets from '../../constants/assets_manifest';
import {TopBar} from '../../sharedComponents';

import {useQuery} from 'react-query';
import {initialRemote} from '../../remote/appRemote';
import {saveIpAction} from '../../store/actions/appActions';

import LobbyTopBar from './components/LobbyTopBar';
import LobbyNav from './components/LobbyNav';

const log = console.log;

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <LobbyTopBar amount={1000} />
      <LobbyNav/>
    </View>
  );
}
