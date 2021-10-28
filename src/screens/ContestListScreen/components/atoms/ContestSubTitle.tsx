import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Text,
  Touchable,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  title: string;
  subText: string;
  actionText?: string;
  discount?: boolean;
}

export default function SubTitle(props: PropTypes) {
  return (
    <View style={[tailwind('p-2')]}>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('flex-grow')]}>
          <Text style={[tailwind('font-bold py-1 text-white font-20')]}>
            {props.title}
          </Text>
          <Text style={[tailwind('font-regular text-white font-15')]}>
            {props.subText}
          </Text>
          {props.discount && (
            <TouchableOpacity
              style={[tailwind('w-24 rounded my-2 bg-secondary p-2')]}>
              <Text
                adjustsFontSizeToFit={true}
                allowFontScaling={true}
                style={[tailwind('font-semibold text-center font-14')]}>
                Discount
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={[tailwind('flex flex-row')]}>
          {props.actionText && (
            <TouchableOpacity>
              <Text style={[tailwind('font-regular font-15')]}>
                {props.actionText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
