import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, ScrollView, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function MonthDays(props: PropTypes) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Month month="Jan 2" />
      <Month month="Jan 3" />
      <Month month="Jan 4" />
    </ScrollView>
  );
}

const Month = (props: any) => {
  const width = useWindowDimensions('window').width;

  const TABWIDTH = (width - 16) / 3;
  return (
    <View style={[tailwind(''), {width: TABWIDTH}]}>
      <View
      
        style={[
          tailwind('border border-gray-800 rounded py-2'),
          {marginRight: 8},
        ]}>
        <Text style={[tailwind('font-bold text-center text-white font-16')]}>
          {props.month}
        </Text>
      </View>
    </View>
  );
};
