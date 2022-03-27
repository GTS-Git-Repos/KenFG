import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {TopBar} from '../../../sharedComponents';
import EarningsTitle from './components/earnings.title';
import OptionEarnings from './components/option.withdrawal';
import BankInfo from './components/bankinfo.withdraw';
import WithDrawInput from './components/withdraw.input';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

const log = console.log;

interface PropTypes {
  selectedOption: number;
  setSelectedOption(val: number): any;
}

export default function withdrawelScreen(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  const [amount, setAmount] = useState(0);

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'Earnings'} />
      <View style={[tailwind(' px-3')]}>
        <EarningsTitle dT={dT} text={'Your Earnings'} amount={4000} />
        <View style={[tailwind('flex-row')]}>
          <TouchableOpacity
            onPress={() => props.setSelectedOption(0)}
            style={[ss.wrapper1, !dT && ss.lborder]}>
            <OptionEarnings
              dT={dT}
              text={'Move to Wallet'}
              isSelected={props.selectedOption === 0}
            />
          </TouchableOpacity>
          <View style={{flex: 0.5}}></View>
          <TouchableOpacity
            onPress={() => props.setSelectedOption(1)}
            style={[ss.wrapper1, !dT && ss.lborder]}>
            <OptionEarnings
              dT={dT}
              text={'Withdraw'}
              isSelected={props.selectedOption === 1}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            tailwind('my-3 rounded-lg p-3'),
            !dT && ss.lborder,
            dT ? clr.bgd2 : clr.bgw,
          ]}>
          <BankInfo
            dT={dT}
            bankname={'City Union Bank Limited'}
            last3digits={'767'}
          />
        </TouchableOpacity>
      </View>

      <WithDrawInput dT={dT} amount={amount} setAmount={setAmount} />
    </View>
  );
}

const ss = StyleSheet.create({
  wrapper1: {
    borderRadius: 8,
    padding: 16,
    flex: 4.5,
  },
  lborder: {
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderWidth: 1,
  },
  root: {
    height: '100%',
  },
});
