import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {InfoSquareGrayIcon} from '../../../../assets/newIcons';
import {useNavigation} from '@react-navigation/core';
import clr from '../../../../constants/colors';

interface PropTypes {
  balance: number;
  winnigs: number;
  bonus: number;
  earned: number;
  isVerified: boolean;
  dT: boolean;
}

export default function AmountStatusWallet(props: PropTypes) {
  return (
    <View style={[ss.root, props.dT ? clr.bgd2 : clr.bgw]}>
      <View style={[ss.balRoot]}>
        <Text
          style={[
            ss.subtxt,
            props.dT ? clr.tgray : clr.tdgray,
            {textAlign: 'center'},
          ]}>
          Current Balance
        </Text>
        <Text style={[ss.txt, props.dT ? clr.tw : clr.td1]}>
          {'\u20B9 '}
          {props.balance}
        </Text>
      </View>
      <Section
        text="Amount Added (unutilised)"
        verified={null}
        amount={props.balance}
        dT={props.dT}
      />
      <Section
        text="Winnings"
        verified={true}
        amount={props.winnigs}
        dT={props.dT}
      />
      <Section
        text="Cash Bonus"
        verified={null}
        amount={props.bonus}
        dT={props.dT}
      />
      <Section
        text="Earned"
        verified={true}
        amount={props.earned}
        dT={props.dT}
      />
    </View>
  );
}

const Section = (props: any) => {
  return (
    <View style={[ss.sectionRoot]}>
      <View>
        <Text style={[ss.subtxt, props.dT ? clr.tgray : clr.tdgray]}>
          {props.text}
        </Text>
        <Text style={[ss.baltxt, props.dT ? clr.tw : clr.td1]}>
          {'\u20B9'} {props.amount}
        </Text>
      </View>
      <View style={[tailwind('flex-row items-center')]}>
        {props.verified === true && <Withdrawal dT={props.dT} />}
        {props.verified === false && <VerifyNow dT={props.dT} />}
        <InfoSquareGrayIcon />
      </View>
    </View>
  );
};
const VerifyNow = (props: any) => {
  return (
    <TouchableOpacity  style={[ss.btn]}>
      <Text style={[ss.subtxt, props.dT ? clr.tw : clr.tdgray]}>
        Verify Now
      </Text>
    </TouchableOpacity>
  );
};

const Withdrawal = (props: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('WithdrawelScreen')}
      style={[ss.btn]}>
      <Text style={[ss.subtxt, props.dT ? clr.tw : clr.tdgray]}>
        Instant Withdrawal
      </Text>
    </TouchableOpacity>
  );
};

const ss = StyleSheet.create({
  root: {
    paddingHorizontal: 12,
    marginVertical: 12,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  balRoot: {
    borderColor: 'rgba(31, 41, 55, 0.1)',
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  subtxt: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    paddingBottom: 6,
  },
  txt: {
    fontFamily: 'gadugi-bold',
    textAlign: 'center',
    fontSize: 24,
  },
  sectionRoot: {
    alignItems: 'center',
    borderColor: 'rgba(31, 41, 55, 0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  baltxt: {
    fontFamily: 'gadugi-normal',
    fontSize: 18,
  },
  btn: {
    borderRadius: 4,
    marginRight: 12,
    paddingHorizontal: 8,
    paddingTop: 6,
    borderColor: '#00513B',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
