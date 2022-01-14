import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {SwitchIcon} from '../../../../sharedComponents';

interface PropTypes {
  current: string;
}

export default function TeamSwitch(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('bg-dark-3 px-3 py-2 flex-row items-center justify-between'),
      ]}>
      <View style={[tailwind('flex-col')]}>
        <Text style={[tailwind('font-regular py-0.5 text-dark-1 font-14')]}>
          Current
        </Text>
        <Text style={[tailwind('font-bold font-16 text-white')]}>
          {props.current}
        </Text>
      </View>

      <SwitchIcon />

      <View style={[tailwind('flex-col')]}>
        <Text style={[tailwind('font-regular py-0.5 text-dark-1 font-14')]}>
          Switch to
        </Text>
        <Text style={[tailwind('font-bold font-14 text-white')]}>-</Text>
      </View>

      <TouchableOpacity style={[tailwind('px-3 py-2 rounded bg-green')]}>
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
