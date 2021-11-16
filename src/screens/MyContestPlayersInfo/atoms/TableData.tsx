import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  title: string;
  actual: string;
  points: string;
}

export default function TableData(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row p-3 border-b border-gray-200')]}>
      <View style={[tailwind(''), {flex: 4}]}>
        <Text style={[tailwind('font-bold text-left text-light font-15')]}>
          {props.title}
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 4}]}>
        <Text style={[tailwind('font-bold text-center text-light font-15')]}>
          {props.actual}
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 4}]}>
        <Text style={[tailwind('font-bold text-right text-light font-15')]}>
          {props.points}
        </Text>
      </View>
    </View>
  );
}
