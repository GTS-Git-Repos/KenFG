import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BottomLine} from '../../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  title: string;
  actual: string;
  points: string;
}

export default function TableData(props: PropTypes) {
  return (
    <LinearGradient colors={['#0D1320', '#172338']} style={[tailwind('')]}>
      <View style={[tailwind('flex-row px-5 py-3 ')]}>
        <View style={[tailwind(''), {flex: 4}]}>
          <Text
            style={[tailwind('font-regular text-left text-dark-1 font-15')]}>
            {props.title}
          </Text>
        </View>
        <View style={[tailwind(''), {flex: 4}]}>
          <Text
            style={[tailwind('font-regular text-center text-light font-18')]}>
            {props.actual}
          </Text>
        </View>
        <View style={[tailwind(''), {flex: 4}]}>
          <Text
            style={[tailwind('font-regular text-right text-light font-18')]}>
            {props.points}
          </Text>
        </View>
      </View>
      {/* <BottomLine /> */}
    </LinearGradient>
  );
}
