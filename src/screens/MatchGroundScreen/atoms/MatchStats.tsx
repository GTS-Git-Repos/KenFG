import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  playersCount: number;
  teamname1: string;
  teamname2: string;
  teamcount1: number;
  teamcount2: number;
  creditsLeft: number;
}

export default function MatchStats(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between px-2 pb-1')]}>
      <View style={[tailwind(''), {flex: 3}]}>
        <Text style={[tailwind('font-regular font-15 text-gray-300')]}>
          Players
        </Text>
        <View style={[tailwind('flex-row items-center py-1')]}>
          <Text style={[tailwind('font-bold text-light font-17')]}>
            {props.teamcount1}
          </Text>
          <Text style={[tailwind('font-regular px-2 text-gray-300 font-15')]}>
            / 11
          </Text>
        </View>
      </View>

      {/* team */}
      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 6}]}>
        <Text
          style={[
            tailwind(
              'font-regular bg-secondary text-primary py-1 px-3 rounded font-12',
            ),
            {},
          ]}>
          {props.teamname1}
        </Text>

        <Text
          style={[tailwind('font-bold text-light px-1 rounded font-14'), {}]}>
          {props.teamcount1} : {props.teamcount2}
        </Text>

        <Text
          style={[
            tailwind(
              'font-regular bg-primary text-light py-1 px-3 rounded font-12',
            ),
            {},
          ]}>
          {props.teamname1}
        </Text>
      </View>

      <View style={[tailwind(''), {flex: 3}]}>
        <Text style={[tailwind('font-regular font-15 text-gray-300')]}>
          Credits Left
        </Text>
        <Text
          style={[
            tailwind('font-regular px-2 text-gray-300 text-right font-15'),
          ]}>
          {props.creditsLeft}
        </Text>
      </View>
    </View>
  );
}
