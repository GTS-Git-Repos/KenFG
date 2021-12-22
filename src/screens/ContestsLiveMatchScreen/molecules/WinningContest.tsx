import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function WinningContest(props: PropTypes) {
  return (
    <View style={[tailwind('m-2 bg-dark-3'),{}]}>
      <TopSection />
    </View>
  );
}

const TopSection = () => {
  return (
    <View style={[tailwind('flex-row items-center p-3')]}>
      <View style={[tailwind(''), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Prize Pool
        </Text>
        <Text style={[tailwind('font-bold text-white font-16 py-0.5')]}>
          {'\u20B9'} 12.43 Lacks
        </Text>
      </View>

      <View style={[tailwind('flex-row  justify-center'), {flex: 4}]}>
        <View>
          <Text
            style={[tailwind('font-regular text-center text-dark-1 font-14')]}>
            Spots
          </Text>
          <Text style={[tailwind('font-bold text-dark-1 font-16 py-0.5')]}>
            16,000
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row justify-end'), {flex: 4}]}>
        <View>
          <Text
            style={[tailwind('font-regular text-right text-dark-1 font-14')]}>
            Entry
          </Text>
          <Text style={[tailwind('font-bold text-dark-1 font-16 py-0.5')]}>
            {'\u20B9'} 125
          </Text>
        </View>
      </View>
    </View>
  );
};
