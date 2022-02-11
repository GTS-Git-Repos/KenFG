import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function HowToPlayScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'How to Play'} />
      <ScrollView>
        <Text style={[tailwind('font-regular m-3 text-light font-15')]}>
          Comming Soon
        </Text>
      </ScrollView>
    </View>
  );
}
