import React from 'react';
import tailwind from '../../../tailwind';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Facebook from '../icons/Facebook';
import GoogleIcon from '../icons/GoogleIcon';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  dT: boolean;
}

export default function SocialLogin(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root]}>
      <TouchableOpacity style={[ss.sec, !props.dT && ss.lBorder]}>
        <Facebook />
        <Text style={[ss.txt, props.dT ? clr.tw : clr.td1]}>Facebook</Text>
      </TouchableOpacity>
      <View style={[ss.space]}></View>

      <TouchableOpacity style={[ss.sec, !props.dT && ss.lBorder]}>
        <GoogleIcon />
        <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'center',
  },
  sec: {
    borderRadius: 28,
    borderColor: 'rgba(31, 41, 55,1)',
    padding: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4.7,
  },
  txt: {
    fontFamily: 'Gadugi-Bold',
    paddingHorizontal: 12,
    fontSize: 14,
  },
  space: {
    flex: 0.6,
  },
  lBorder: {
    borderColor: 'rgba(31, 41, 55,0.2)',
  },
});
