import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  active: number;
  onTabPressed(index: number): any;
}

export default function Tabs(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row bg-dark-3 items-center')]}>
      {['Upcomming', 'Live', 'Completed'].map((item: string, index: number) => {
        return (
          <TouchableOpacity
            onPress={() => props.onTabPressed(index)}
            key={item}
            style={[
              tailwind(
                `py-4 ${
                  props.active === index ? 'border-b-2 border-yellow-400' : ''
                }`,
              ),
              {flex: 4},
            ]}>
            <Text
              style={[
                tailwind(`font-bold text-center uppercase font-13`),
                {
                  color: props.active === index ? '#FFFF' : '#8797B1',
                },
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
