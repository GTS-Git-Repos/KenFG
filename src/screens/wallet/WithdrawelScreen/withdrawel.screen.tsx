import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {TopBar} from '../../../sharedComponents';
import {useNavigation} from '@react-navigation/native';
import EarningsTitle from './components/earnings.title';
import OptionEarnings from './components/option.withdrawal';
import BankInfo from './components/bankinfo.withdraw';
import WithDrawInput from './components/withdraw.input';

const log = console.log;

interface PropTypes {
  selectedOption: number;
  setSelectedOption(val: number): any;
}

export default function withdrawelScreen(props: PropTypes) {
  const [amount, setAmount] = useState(0);

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Earnings'} />
      <View style={[tailwind(' px-3')]}>
        <EarningsTitle text={'Your Earnings'} amount={4000} />
        <View style={[tailwind('flex-row')]}>
          <TouchableOpacity
            onPress={() => props.setSelectedOption(0)}
            style={[styles.wrapper1]}>
            <OptionEarnings
              text={'Move to Wallet'}
              isSelected={props.selectedOption === 0}
            />
          </TouchableOpacity>
          <View style={{flex: 0.5}}></View>
          <TouchableOpacity
            onPress={() => props.setSelectedOption(1)}
            style={styles.wrapper1}>
            <OptionEarnings
              text={'Withdraw'}
              isSelected={props.selectedOption === 1}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={[tailwind('my-3 bg-dark-3 rounded-lg p-3')]}>
          <BankInfo bankname={'City Union Bank Limited'} last3digits={'767'} />
        </TouchableOpacity>
      </View>

      <WithDrawInput amount={amount} setAmount={setAmount} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper1: {
    backgroundColor: '#172338',
    borderRadius: 8,
    padding: 16,
    flex: 4.5,
  },
});
