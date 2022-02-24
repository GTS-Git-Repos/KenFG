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

type Option = 'mobile' | 'email' | 'pancard' | 'bank';

interface PropTypes {
  type: Option;
  title: string;
  value: string;
  preverifiedvalue: string;
  verified: boolean;
  action(): any;
}

export default function VerifyContent(props: PropTypes) {

  return (
    <View style={[ss.root]}>
      {props.type === 'mobile' && <MobileIcon />}
      {props.type === 'email' && <EmailIcon />}
      {props.type === 'pancard' && <PanCardIcon />}
      {props.type === 'bank' && <BankRoundIcon />}
      <View style={[tailwind('px-4 mr-4'), {flex: 7}]}>
        <Text style={[ss.title]}>{props.title}</Text>

        {props.verified ? (
          <Text style={[ss.value]}>{props.value}</Text>
        ) : (
          <Text style={ss.subTitle}>{props.preverifiedvalue}</Text>
        )}
      </View>
      {props.verified ? (
        <TouchableOpacity style={[ss.button, ss.selectedButton]}>
          <VerifyTick verified={true} />
          <Text style={[ss.text]}>Verified</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={props.action} style={ss.button}>
          <VerifyTick verified={false} />
          <Text style={[ss.text]}>VERIFY</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#172338',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {color: '#f5feff', fontFamily: 'gadugi-normal', fontSize: 12},
  value: {
    paddingTop: 4,
    color: '#f5feff',
    fontFamily: 'gadugi-bold',
    fontSize: 12,
  },
  subTitle: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
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
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    paddingHorizontal: 4,
  },
});
