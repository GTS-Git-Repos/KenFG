import React from 'react';
import {View, Text} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents';
import Date from './atoms/Date';
import Transaction from './molecules/Transaction';
// import assets from 'assets';
// import {TopBar} from 'components';
// import Icon from 'react-native-vector-icons/Ionicons';

const log = console.log;

export default function TransactionList() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Recent Transactions'} />
      <View style={[tailwind('')]}>
        <Date date={'10 December 2021'} />

        <Transaction amount={'32'} plus={true} title={'Deposited a Cash'} />
        <Transaction amount={'20'} plus={false} title={'Joined a Contest'} />
        <Transaction amount={'20'} plus={true} title={'Winning from Contest'} />
        <Transaction amount={'20'} plus={true} title={'Winning from Contest'} />
        <Date date={'12 December 2021'} />
        <Transaction amount={'20'} plus={false} title={'Joined a Contest'} />
      </View>
    </View>
  );
}
