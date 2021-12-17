import React from 'react';
import tailwind from '../../../../tailwind';
import {BottomLine} from '../../../sharedComponents';
import {View, Image, Text} from 'react-native';
import assets from '../../../constants/assets_manifest';
import Svg, {Line} from 'react-native-svg';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function Points(props: PropTypes) {
  return (
    <View style={[tailwind('')]}>
      <Text
        style={[
          tailwind('font-regular pt-1 pb-2 text-center text-dark-1 font-14'),
        ]}>
        Total Points
      </Text>
      <View style={[tailwind('mx-24')]}>
        <BottomLine />
      </View>
      <View style={[tailwind('flex-row justify-center py-2 items-center')]}>
        <View style={[tailwind(''), {flex: 10 / 3}]}>
          <Text
            style={[
              tailwind('font-bold text-right text-light'),
              {fontSize: 26},
            ]}>
            384.4
          </Text>
        </View>
        <View style={[tailwind('flex-row justify-center'), {flex: 1}]}>
          <Svg width={'1'} height={'26'}>
            <Line
              x1="0"
              y1="0"
              x2="0"
              y2="100"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          </Svg>
        </View>

        <View style={[tailwind(''), {flex: 10 / 3}]}>
          <Text
            style={[
              tailwind('font-bold text-left text-light'),
              {fontSize: 26},
            ]}>
            499
          </Text>
        </View>
      </View>
      <View style={[tailwind('mx-12')]}>
        <BottomLine />
      </View>
    </View>
  );
}
