import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function RowHeader(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center px-4 py-3')]}>
      <View style={[tailwind('flex-row items-center'), {flex: 5}]}>
        <Text
          style={[tailwind('font-regular pr-1 text-dark-1 uppercase font-13')]}>
          CATEGORY
        </Text>
        <Image
          resizeMode="stretch"
          source={assets.arrow_down}
          style={[tailwind(''), {width: 6, height: 14}]}
        />
        <Text
          style={[tailwind('font-regular pl-3 text-dark-1 uppercase font-13')]}>
          POINTS
        </Text>
      </View>
      {/* Point row */}
      <View style={[tailwind('flex-row'), {flex: 5}]}>
        <Text
          style={[
            tailwind(
              'font-regular px-3 text-dark-1 text-center uppercase font-13',
            ),
            {flex: 5},
          ]}>
          % C BY
        </Text>
        <Text
          style={[
            tailwind(
              'font-regular px-3 text-dark-1 text-right uppercase font-13',
            ),
            {flex: 5},
          ]}>
          % VC BY
        </Text>
      </View>
    </View>
  );
}
