import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  count: number;
}

export default function SelectedIndcator(props: PropTypes) {
  return (
    <View style={[tailwind(''), {flex: 4}]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Text style={[tailwind('font-bold text-white'), {fontSize: 26}]}>
          {props.count}
        </Text>
        <Text style={[tailwind('font-bold text-brown-2 px-1 font-12')]}>
          /11
        </Text>
      </View>
      <Text style={[tailwind('font-bold text-dark-1 font-12')]}>
        PLAYERS SELECTED
      </Text>
    </View>
  );
}
