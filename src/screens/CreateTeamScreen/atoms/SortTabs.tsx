import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function SortTabs(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between py-1')]}>
      <Text style={[tailwind('font-regular font-15')]}></Text>
      <View style={[tailwind('flex-row justify-between items-center')]}>
        <Text style={[tailwind('font-regular font-13 px-2 text-light')]}>
          SELECTED BY
        </Text>
        <Text style={[tailwind('font-regular font-13 px-2 text-light')]}>
          POINTS
        </Text>
        <View style={[tailwind('flex-row items-center px-2')]}>
          <Text style={[tailwind('font-regular font-13 text-light')]}>
            CREDITS
          </Text>
          <Icon name="arrow-up" color="green" size={20} />
        </View>
      </View>
    </View>
  );
}
