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

const log = console.log;

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const ipCheckRemote = useQuery('ipCheck', initialRemote);

  const IpState = useSelector((state: any) => state.app.ip);

  useEffect(() => {
    if (ipCheckRemote.data) {
      dispatch(saveIpAction(ipCheckRemote.data));
    }
  }, [ipCheckRemote.data]);

  return (
    <View style={tailwind('bg-white h-full p-3')}>
      <TopBar title="Hello" />
      <Image
        source={assets.react_logo}
        resizeMode="contain"
        style={[tailwind('w-full h-60')]}
      />
      {IpState ? (
        <Text style={[tailwind('text-center text-2xl appBoldFont')]}>
          Hello: {IpState}
        </Text>
      ) : null}
    </View>
  );
}
