import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import {SwitchIcon} from '../../../../sharedComponents';
import clr from '../../../../constants/colors';

interface PropTypes {
  old: string;
  current: string;
  onPressSwitchTeam(): any;
  dT: boolean;
}

export default function TeamSwitch(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('px-3 py-2 flex-row items-center justify-between'),
        props.dT ? clr.bgd1 : clr.bgw,
      ]}>
      <View style={[tailwind('flex-col')]}>
        <Text style={[tailwind('font-regular py-0.5 text-dark-1 font-14')]}>
          Current
        </Text>
        <Text
          style={[
            tailwind('font-bold font-16 uppercase'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          {props.old}
        </Text>
      </View>

      <SwitchIcon dT={props.dT} />

      <View style={[tailwind('flex-col')]}>
        <Text style={[tailwind('font-regular py-0.5 text-dark-1 font-14')]}>
          Switch to
        </Text>
        <Text
          style={[
            tailwind('font-bold font-14 uppercase'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          {props.current}
        </Text>
      </View>

      <TouchableOpacity
        onPress={props.onPressSwitchTeam}
        style={[tailwind('px-3 py-2 rounded bg-green')]}>
        <Text
          style={[
            tailwind('font-bold text-center text-white uppercase font-12'),
          ]}>
          Switch Team
        </Text>
      </TouchableOpacity>
    </View>
  );
}
