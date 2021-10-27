import React from 'react';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
const log = console.log;
import TopBarContest from './components/atoms/TopbarContest';

export default function ContestScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBarContest title={'AUS vs SA'} subtitle={'18h 11m left'} />

      <ScrollView></ScrollView>
    </View>
  );
}
