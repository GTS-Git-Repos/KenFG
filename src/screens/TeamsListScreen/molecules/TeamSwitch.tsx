import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  current: string;
}

export default function TeamSwitch(props: PropTypes) {
  return (
    <View
      style={[tailwind('bg-dark-3 p-3 flex-row items-center justify-between')]}>
      <View style={[tailwind('flex-col')]}>
        <Text style={[tailwind('font-regular py-0.5 text-light font-12')]}>
          Current
        </Text>
        <Text style={[tailwind('font-bold font-14 text-light')]}>
          {props.current}
        </Text>
      </View>

      <Icon name="swap-horizontal" size={20} color="#ffff" />

      <View style={[tailwind('flex-col')]}>
        <Text style={[tailwind('font-regular py-0.5 text-light font-12')]}>
          Switch to
        </Text>
        <Text style={[tailwind('font-bold font-14 text-light text-secondary')]}>
          Team 2
        </Text>
      </View>

      <LinearGradient
        end={{x: 0.0, y: 0.5}}
        start={{x: 0.8, y: 2.0}}
        locations={[0.6, 0.5]}
        style={[tailwind('flex-row rounded')]}
        colors={['#B2933D', '#C5A858']}>
        <TouchableOpacity style={[tailwind('px-3 py-2 rounded')]}>
          <Text
            style={[
              tailwind('font-bold text-center text-brown-5 uppercase font-12'),
            ]}>
            Switch Team
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
