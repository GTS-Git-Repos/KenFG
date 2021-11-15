import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  current: string;
}

export default function TeamSwitch(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('bg-primary p-3 flex-row items-center justify-between'),
      ]}>
      <View style={[tailwind('flex-col')]}>
        <Text style={[tailwind('font-regular py-0.5 text-light font-15')]}>
          Current
        </Text>
        <Text style={[tailwind('font-bold font-16 text-light')]}>
          {props.current}
        </Text>
      </View>

      <Icon name="swap-horizontal" size={20} color="#ffff" />

      <View style={[tailwind('flex-col')]}>
        <Text style={[tailwind('font-regular py-0.5 text-light font-15')]}>
          Switch to
        </Text>
        <Text style={[tailwind('font-bold font-16 text-light text-secondary')]}>
          Team 2
        </Text>
      </View>

      <TouchableOpacity style={[tailwind('bg-secondary px-3 py-2 rounded')]}>
        <Text style={[tailwind('font-regular text-center uppercase font-15')]}>
          Switch Team
        </Text>
      </TouchableOpacity>
    </View>
  );
}
