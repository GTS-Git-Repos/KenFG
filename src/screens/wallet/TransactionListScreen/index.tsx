import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../../sharedComponents';
import DateTransaction from './atoms/date.transaction';
import Transaction from './molecules/Transaction';

import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';
import {useSelector} from 'react-redux';
const log = console.log;

export default function TransactionList() {
  const dT = useSelector(getAppThemeSelector);
  const navigation = useNavigation();

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'Recent Transactions'} />
      <ScrollView>
        <View style={[tailwind('')]}>
          <DateTransaction date={'21 October, 2021'} dT={dT} />

          <Transaction
            amount={'32'}
            plus={true}
            title={'Deposited a Cash'}
            open={true}
            dT={dT}
          />
          <Transaction
            amount={'32'}
            plus={true}
            title={'Won a Contest'}
            open={false}
            dT={dT}
          />
        </View>

        <View style={[tailwind(''), {paddingTop: 18}]}></View>

        <View style={[tailwind('')]}>
          <DateTransaction dT={dT} date={'19 October, 2021'} />

          <Transaction
            amount={'42'}
            plus={false}
            title={'Deposited a Cash'}
            open={false}
            dT={dT}
          />
        </View>
        <View style={[tailwind('h-20')]}></View>
      </ScrollView>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
});
