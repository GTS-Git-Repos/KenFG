import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BottomLine} from '../../../sharedComponents/';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  rank: string;
  amount: string;
}

export default function WinningListRankings(props: PropTypes) {
  return (
    <LinearGradient colors={['#25385A', '#172338']} style={[tailwind('pt-3')]}>
      <View
        style={[tailwind('flex-row items-center border-b border-gray-800')]}>
        <View style={[tailwind('pl-4 text-left w-6/12')]}>
          <Text style={[tailwind('font-semibold text-dark-1 font-14')]}>
            <Text style={[tailwind('font-regular font-14 text-white')]}>#</Text>
            {props.rank}
          </Text>
        </View>

        <View style={[tailwind('pr-4 w-6/12')]}>
          <Text
            style={[
              tailwind('font-semibold text-right text-gray-200 font-15'),
            ]}>
            {'\u20B9 '}
            {props.amount}
          </Text>
        </View>
      </View>
      <View style={[tailwind('pt-3')]}>
        <BottomLine />
      </View>
    </LinearGradient>
  );
}
