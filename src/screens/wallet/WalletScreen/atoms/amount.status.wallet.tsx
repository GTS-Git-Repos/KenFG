import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {InfoSquareGrayIcon} from '../../../../assets/newIcons';

interface PropTypes {
  balance: number;
  winnigs: number;
  bonus: number;
  earned: number;
  isVerified: boolean;
}

export default function AmountStatusWallet(props: PropTypes) {
  return (
    <View style={[tailwind('mx-4 my-3 px-3 bg-dark-3 rounded')]}>
      <Balance amount={props.balance} />
      <Section
        text="Amount Added (unutilised)"
        verified={true}
        amount={props.balance}
      />
      <Section text="Winnings" verified={false} amount={props.winnigs} />
      <Section text="Cash Bonus" verified={true} amount={props.bonus} />
      <Section text="Earned" verified={false} amount={props.earned} />
    </View>
  );
}

const Balance = (props: any) => {
  return (
    <View style={[tailwind('py-3 border-b border-gray-800')]}>
      <Text style={[tailwind('font-regular text-dark-1 text-center font-12')]}>
        Current Balance
      </Text>
      <Text
        style={[tailwind('font-bold text-white text-center'), {fontSize: 24}]}>
        {'\u20B9 '}
        {props.amount}
      </Text>
    </View>
  );
};

const Section = (props: any) => {
  return (
    <View
      style={[
        tailwind(
          'py-4 flex-row items-center justify-between border-b border-gray-800',
        ),
      ]}>
      <View>
        <Text style={[tailwind('font-regular text-dark-1 font-12 pb-1')]}>
          {props.text}
        </Text>
        <Text style={[tailwind('font-regular text-white font-18')]}>
          {'\u20B9'} {props.amount}
        </Text>
      </View>
      <View style={[tailwind('flex-row items-center')]}>
        {!props.verified && <VerifyNow />}
        <InfoSquareGrayIcon />
      </View>
    </View>
  );
};

const VerifyNow = () => {
  return (
    <View style={[tailwind('rounded py-1 px-2 mr-3'), styles.border]}>
      <Text style={[tailwind('font-regular text-white font-14')]}>
        Verify Now
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    borderTopColor: '#00513B',
    borderLeftColor: '#00513B',
    borderRightColor: '#00513B',
    borderBottomColor: '#00513B',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
