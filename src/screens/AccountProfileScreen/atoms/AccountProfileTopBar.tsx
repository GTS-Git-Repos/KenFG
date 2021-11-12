import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function AccountProfileTopBar(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between p-3')]}>
      <TouchableOpacity>
        <Icon name="arrow-back-outline" size={25} color="white" />
      </TouchableOpacity>
      <View style={[tailwind('flex-row justify-between items-center')]}>
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
        </View>
      </View>
    </View>
  );
}
