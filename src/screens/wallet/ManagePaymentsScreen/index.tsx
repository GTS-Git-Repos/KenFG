import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
// import assets from 'assets';
import {TopBar} from '../../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function ManagePayments() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Manage Payments'} />
      <Text style={[tailwind('font-regular text-white p-2 font-15')]}>
        Comming Soon
      </Text>
    </View>
  );
}
