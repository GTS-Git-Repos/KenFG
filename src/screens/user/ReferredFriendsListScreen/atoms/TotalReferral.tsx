import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import ProgressBarRefer from '../molecules/progressbar.refer';
import {AppThemeType} from '../../../../types/app';

interface PropTypes {
  tm: AppThemeType;
}

export default function TotalReferral(props: PropTypes) {
  return (
    <View style={[tailwind('p-4 mb-2'), props.tm.bg2]}>
      <Text style={[tailwind('font-regular font-15'), props.tm.txt2]}>
        34 Friends Joined!
      </Text>
      <ProgressBarRefer completed={false} />
      <View style={[tailwind('flex-row items-center justify-between')]}>
        <View style={[tailwind('')]}>
          <Text style={[tailwind('font-regular font-14'), props.tm.txt2]}>
            Received
          </Text>
          <Text style={[tailwind('font-bold  py-0.5 font-18'), props.tm.txt2]}>
            {'\u20B9'} 2,424
          </Text>
        </View>

        <View style={[tailwind('')]}>
          <Text style={[tailwind('font-regular font-14'), props.tm.txt2]}>
            To be Received
          </Text>
          <Text
            style={[
              tailwind('font-bold text-right py-0.5 font-18'),
              props.tm.txt2,
            ]}>
            {'\u20B9'} 5,424
          </Text>
        </View>
      </View>
    </View>
  );
}
