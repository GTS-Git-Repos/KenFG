import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  title: string;
  subtitle: string;
}

export default function TopBarContest(props: PropTypes) {
  return (
    <View
      style={[
        tailwind('bg-primary p-3 flex-row items-center justify-between'),
      ]}>
      <View style={[tailwind('flex flex-row items-center')]}>
        <Icon name="arrow-back" size={20} color="white" />
        <View style={[tailwind('px-7')]}>
          <Text style={[tailwind('font-bold text-gray-200 font-15')]}>
            {props.title}
          </Text>
          <Text style={[tailwind('font-regular text-gray-200 font-12')]}>
            {props.subtitle}
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex flex-row items-center')]}>
        <Icon
          name="trophy-outline"
          style={[tailwind('px-2')]}
          size={25}
          color="white"
        />
        <Icon
          style={[tailwind('px-2')]}
          name="notifications-outline"
          size={25}
          color="white"
        />
        <Icon
          style={[tailwind('px-2')]}
          name="wallet-outline"
          size={25}
          color="white"
        />
      </View>
    </View>
  );
}
