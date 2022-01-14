import React from 'react';
import tailwind from '../../../../../tailwind';
import {BottomLine} from '../../../../sharedComponents';
import {View, Image, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import Svg, {Line, Rect} from 'react-native-svg';
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
      {/* <View style={[tailwind('mx-24')]}>
        <BottomLine />
      </View> */}

      <View
        style={[
          tailwind(
            'bg-white mx-24 border border-black flex-row items-center p-2 justify-between',
          ),
          {borderRadius: 2},
        ]}>
        <Text
          style={[
            tailwind('font-bold text-right text-light'),
            {fontSize: 26, color: '#172338'},
          ]}>
          384.4
        </Text>

        <Svg
          width="3"
          height="24"
          viewBox="0 0 2 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Rect
            x="1.5"
            width="20"
            height="1"
            transform="rotate(90 1.5 0)"
            fill="#172338"
          />
        </Svg>

        <Text
          style={[
            tailwind('font-bold text-right text-light'),
            {fontSize: 26, color: '#172338'},
          ]}>
          499.0
        </Text>
      </View>

      {/* <View style={[tailwind('flex-row justify-center py-2 items-center')]}>
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
      </View> */}
    </View>
  );
}
