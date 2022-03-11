import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
import Svg, {Circle, Path, Rect} from 'react-native-svg';
import {GiftIcon} from '../../../../assets/newIcons';

interface PropTypes {
  id: string;
  when: string;
  read: boolean;
  type: string;
  content: string;
}

export default function Notification(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 border-b border-gray-800')]}>
      <View style={[tailwind('flex-row items-center p-3')]}>
        <View>
          <GiftIcon dT={true} />
          <Elipses />
        </View>
        <View style={[tailwind('px-3'), {flex: 6.5}]}>
          <View>
            <Text style={[tailwind('font-bold text-light font-12')]}>
              {props.content}
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 font-12 py-1')]}>
              {props.when}
            </Text>
          </View>
        </View>
        <View style={[tailwind(''), {flex: 2}]}></View>
      </View>
    </View>
  );
}

const Elipses = () => {
  return (
    <View style={[tailwind('absolute right-0 top-1')]}>
      <Svg width="9" height="8" viewBox="0 0 9 8" fill="none">
        <Circle cx="4.66537" cy="4" r="4" fill="#EB5757" />
      </Svg>
    </View>
  );
};
