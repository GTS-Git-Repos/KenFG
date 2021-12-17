import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function MatchesStats(props: PropTypes) {
  return (
    <View style={[tailwind('mx-2 mb-2 bg-dark-3 py-2  rounded')]}>
      <TopSection opponent="BBL" />
      <MatchData />
    </View>
  );
}

const TopSection = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center px-4 pb-1 justify-between')]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Text style={[tailwind('font-regular text-white font-11')]}>VS</Text>
        <Text style={[tailwind('font-bold text-white px-2 font-12')]}>
          {props.opponent}
        </Text>
        <Text style={[tailwind('font-bold text-dark-1 font-12')]}>
          Dec 25,2021
        </Text>
      </View>
      <Icon name="chevron-down-outline" size={16} color="lightgray" />
    </View>
  );
};

const MatchData = () => {
  return (
    <LinearGradient
      colors={['#0D1320', '#172338']}
      style={[tailwind('flex-row items-center px-4 py-2')]}>
      <View style={[tailwind('items-start'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-11 pb-0.5')]}>
          Selected by
        </Text>
        <Text style={[tailwind('font-regular text-white font-18')]}>
          10.55 %
        </Text>
      </View>
      <View
        style={[
          tailwind('border-l border-gray-400 border-r items-center'),
          {flex: 4},
        ]}>
        <Text style={[tailwind('font-regular text-dark-1 font-11 pb-0.5')]}>
          Points
        </Text>
        <Text style={[tailwind('font-regular text-white font-18')]}>0</Text>
      </View>

      <View style={[tailwind('items-end'), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-11 pb-0.5')]}>
          Credits
        </Text>
        <Text style={[tailwind('font-regular text-white font-18')]}>9.6</Text>
      </View>
    </LinearGradient>
  );
};
