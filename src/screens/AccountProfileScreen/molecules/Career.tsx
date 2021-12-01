import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {BottomLine} from '../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function Career(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 rounded py-3 px-4')]}>
      <WinRate />
      <View>
        <BottomLine />
      </View>
    </View>
  );
}

const WinRate = () => {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <View style={[tailwind(''), {flex: 2}]}>
        <Text
          style={[tailwind('font-regular text-dark-1 text-center font-13')]}>
          Win Rate
        </Text>
        <Text
          style={[
            tailwind('font-regular text-light py-2 text-center font-13'),
          ]}>
          75 %
        </Text>
      </View>
      <View style={[tailwind('bg-dark rounded-full'), {flex: 5, height: 5}]}>
        <View
          style={[
            tailwind('bg-secondary rounded-full'),
            {width: '75%', height: 5},
          ]}></View>
      </View>

      <View style={[tailwind(''), {flex: 3}]}>
        <Text
          style={[
            tailwind('font-regular text-brown-2 uppercase text-center font-13'),
          ]}>
          Total Won
        </Text>
        <Text
          style={[tailwind('font-regular text-light py-2 text-right font-13')]}>
          {'\u20B9'} 19002
        </Text>
      </View>
    </View>
  );
};
