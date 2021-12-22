import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BottomLine, RankIcon} from '../../../sharedComponents/';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  rank: string;
  value: string;
}

export default function WinningListRankings(props: PropTypes) {
  return (
    <View style={[tailwind('py-3 bg-dark-3 border-b border-gray-800')]}>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('pl-4 text-left w-6/12')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <RankIcon golden={false} />
            <Text style={[tailwind('font-bold pl-2 font-14 text-white')]}>
              {props.rank}
            </Text>
          </View>
        </View>

        <View style={[tailwind('pr-4 w-6/12')]}>
          <Text
            style={[
              tailwind('font-semibold text-right text-gray-200 font-15'),
            ]}>
            {'\u20B9 '}
            {props.value}
          </Text>
        </View>
      </View>
      {/* <View style={[tailwind('pt-3')]}>
        <BottomLine />
      </View> */}
    </View>
  );
}
