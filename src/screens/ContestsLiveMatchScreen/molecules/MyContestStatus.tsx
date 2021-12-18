import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function MyContestStatus(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 rounded m-2')]}>
      <TopSection />
    </View>
  );
}

const TopSection = () => {
  return (
    <View style={[tailwind('flex-row items-center justify-between p-3')]}>
      <View>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Prize Pool
        </Text>
        <Text style={[tailwind('font-bold text-white font-16 py-0.5')]}>
          {'\u20B9'} 12.43 Lacks
        </Text>
      </View>

      <View style={[tailwind('')]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Spots
        </Text>
        <Text style={[tailwind('font-bold text-dark-1 font-16 py-0.5')]}>
          16,000
        </Text>
      </View>
      <View>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Entry
        </Text>
        <Text style={[tailwind('font-bold text-dark-1 font-16 py-0.5')]}>
          {'\u20B9'} 125
        </Text>
      </View>
    </View>
  );
};

const ContestAttributes = () => {
  return <View></View>;
};
