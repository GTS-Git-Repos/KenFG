import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {
  PanCardIcon,
  MobileIcon,
  EmailIcon,
  BankRoundIcon,
  VerifyTick,
} from '../../../../assets/newIcons';
import clr from '../../../../constants/colors';

type Option = 'mobile' | 'email' | 'pancard' | 'bank';

interface PropTypes {
  type: Option;
  title: string;
  value: string;
  preverifiedvalue: string;
  verified: boolean;
  action(): any;
  dT: boolean;
}

export default function VerifyContent(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[ss.root, dT ? clr.bgd2 : clr.bgw, !dT && ss.lBottom]}>
      {props.type === 'mobile' && <MobileIcon dT={dT} />}
      {props.type === 'email' && <EmailIcon dT={dT} />}
      {props.type === 'pancard' && <PanCardIcon dT={dT} />}
      {props.type === 'bank' && <BankRoundIcon dT={dT} />}
      <View style={[tailwind('px-4 mr-4'), {flex: 7}]}>
        <Text style={[ss.title, dT ? clr.tw : clr.td1]}>{props.title}</Text>

        {props.verified ? (
          <Text style={[ss.value, dT ? clr.tw : clr.td1]}>{props.value}</Text>
        ) : (
          <Text style={[ss.subTitle]}>{props.preverifiedvalue}</Text>
        )}
      </View>
      {props.verified ? (
        <TouchableOpacity style={[ss.button, ss.selectedButton]}>
          <VerifyTick verified={true} dT={false} />
          <Text style={[ss.text]}>Verified</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={props.action}
          style={[ss.button, dT ? clr.bgd1 : clr.bgw]}>
          <VerifyTick verified={false} dT={false} />
          <Text style={[ss.text, dT ? clr.tw : clr.td1]}>VERIFY</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  lBottom: {
    borderBottomColor: 'rgba(31, 41, 55,0.1)',
    borderBottomWidth: 1,
  },
  title: {
    color: '#f5feff',
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
  },
  value: {
    paddingTop: 4,
    color: '#f5feff',
    fontFamily: 'Gadugi-Bold',
    fontSize: 12,
  },
  subTitle: {
    color: '#8797B1',
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
    paddingTop: 4,
  },
  button: {
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 4,
    flex: 3,
    borderColor: 'rgb(31, 41, 55)',
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: '#00513B',
    borderColor: 'transparent',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
    paddingHorizontal: 4,
  },
});
