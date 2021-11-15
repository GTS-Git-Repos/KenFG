import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teamName1: string;
  teamName2: string;
}

export default function MatchStat(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center justify-between')]}>
      <View style={[tailwind('flex-col'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-secondary font-15')]}>
          {props.teamName1}
        </Text>
        <View style={[tailwind('flex-row items-center py-2')]}>
          <Text style={[tailwind('font-bold text-light font-17')]}>43/5</Text>
          <Text style={[tailwind('font-regular text-light px-2 font-15')]}>
            (12.3)
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row items-center'), {flex: 2}]}>
        <View style={[tailwind('w-2 h-2 rounded-full bg-red-500')]}></View>
        <Text style={[tailwind('font-bold uppercase text-light font-13 px-1')]}>
          LIVE
        </Text>
      </View>

      <View style={[tailwind('flex-col items-end'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-secondary font-15')]}>
          {props.teamName2}
        </Text>
        <View style={[tailwind('flex-row items-center py-2')]}>
          <Text style={[tailwind('font-regular text-light font-15')]}>
            Yet to Bat
          </Text>
        </View>
      </View>
    </View>
  );
}
