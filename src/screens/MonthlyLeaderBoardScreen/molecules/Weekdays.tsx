import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, ScrollView, Text, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {} from 'react-native-gesture-handler';

interface PropTypes {
  text?: string;
}

export default function WeekDays(props: PropTypes) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Weak info="18th Oct to 24th Oct" />
      <Weak info="18th Oct to 24th Oct" />
      <Weak info="18th Oct to 24th Oct" />
      <Weak info="18th Oct to 24th Oct" />
    </ScrollView>
  );
}

const Weak = (props: any) => {
  const width = useWindowDimensions('window').width;

  const TABWIDTH = (width - 16) / 3;

  return (
    <View style={[{width: TABWIDTH}]}>
      <View
        style={[
          tailwind('border border-gray-800 rounded py-2'),
          {marginRight: 8},
        ]}>
        <Text style={[tailwind('font-bold text-center text-white font-16')]}>
          Week {props.count}
        </Text>
        <Text
          style={[tailwind('font-regular text-center text-dark-1 font-10')]}>
          {props.info}
        </Text>
      </View>
    </View>
  );
};
