import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import ProgressBar from '../molecules/ProgressBar';
interface PropTypes {
  text?: string;
}

export default function TotalReferral(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 p-4 mb-2')]}>
      <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
        34 Friends Joined!
      </Text>
      <ProgressBar />
      <View style={[tailwind('flex-row items-center justify-between')]}>
        <View style={[tailwind('')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
            Received
          </Text>
          <Text style={[tailwind('font-bold text-white py-0.5 font-18')]}>
            {'\u20B9'} 2,424
          </Text>
        </View>

        <View style={[tailwind('')]}>
          <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
            To be Received
          </Text>
          <Text
            style={[
              tailwind('font-bold text-white text-right py-0.5 font-18'),
            ]}>
            {'\u20B9'} 5,424
          </Text>
        </View>
      </View>
    </View>
  );
}
