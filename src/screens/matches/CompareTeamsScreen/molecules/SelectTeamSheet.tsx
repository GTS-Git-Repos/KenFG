import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {BottomLine, RankIcon} from '../../../../sharedComponents';

interface PropTypes {
  name: string;
}

export default function SelectTeamSheet(props: PropTypes) {
  return (
    <View style={[tailwind('border-b border-gray-800')]}>
      <View
        style={[
          tailwind('bg-dark-3 flex-row items-center justify-between px-4 py-3'),
        ]}>
        <Text style={[tailwind('font-bold text-white uppercase font-15')]}>
          {props.name}
        </Text>
        <View style={[tailwind('flex-row items-center')]}>
          {/* <Text style={[tailwind('font-regular text-light pr-2 font-15')]}>
            493.32
          </Text> */}
          <RankIcon golden={false} />
          <Text style={[tailwind('font-regular text-dark-1 pl-1 font-15')]}>
            325222
          </Text>
        </View>
      </View>
    </View>
  );
}
