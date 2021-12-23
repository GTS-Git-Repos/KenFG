import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function MonthDays(props: PropTypes) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={[tailwind('border border-gray-800 rounded py-2 px-7 mr-3')]}>
        <Text style={[tailwind('font-bold text-center text-white font-16')]}>
          Jan 2
        </Text>
      </View>

      <View
        style={[tailwind('border border-green-800 rounded py-2 px-7 mr-3')]}>
        <Text style={[tailwind('font-bold text-center text-white font-16')]}>
          Feb 2
        </Text>
      </View>

      <View style={[tailwind('border border-gray-800 rounded py-2 px-7')]}>
        <Text style={[tailwind('font-bold text-center text-white font-16')]}>
          Mar 2
        </Text>
      </View>
    </ScrollView>
  );
}
