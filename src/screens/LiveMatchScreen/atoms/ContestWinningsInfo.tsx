import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function ContestWinningsInfo(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center p-4')]}>
      <View style={[tailwind(''), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Prize pool
        </Text>
        <Text style={[tailwind('font-bold text-white py-1 font-16')]}>
          {'\u20B9'} 12.50 Lakhs
        </Text>
      </View>

      <View style={[tailwind('flex-row  justify-center'), {flex: 4}]}>
        <View>
          <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
            Spots
          </Text>
          <Text style={[tailwind('font-bold text-dark-1 py-1 font-16')]}>
            16,000
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row justify-end'), {flex: 4}]}>
        <View>
          <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
            Entry
          </Text>
          <Text style={[tailwind('font-bold text-dark-1 py-1 font-16')]}>
            {'\u20B9'} 125
          </Text>
        </View>
      </View>
    </View>
  );
}
