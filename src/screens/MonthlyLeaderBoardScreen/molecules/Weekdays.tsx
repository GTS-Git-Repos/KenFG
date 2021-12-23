import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {} from 'react-native-gesture-handler';

interface PropTypes {
  text?: string;
}

export default function WeekDays(props: PropTypes) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={[tailwind('border border-gray-600 rounded py-2 px-3 mr-3')]}>
        <Text style={[tailwind('font-bold text-center text-white font-16')]}>
          Week 2
        </Text>
        <Text
          style={[tailwind('font-regular text-center text-dark-1 font-10')]}>
          18th Oct to 24th Oct
        </Text>
      </View>

      <View style={[tailwind('border border-green-800 rounded py-2 px-3 mr-3')]}>
        <Text style={[tailwind('font-bold text-center text-white font-16')]}>
          Week 2
        </Text>
        <Text
          style={[tailwind('font-regular text-center text-dark-1 font-10')]}>
          18th Oct to 24th Oct
        </Text>
      </View>

      <View style={[tailwind('border border-gray-600 rounded py-2 px-3')]}>
        <Text style={[tailwind('font-bold text-center text-white font-16')]}>
          Week 2
        </Text>
        <Text
          style={[tailwind('font-regular text-center text-dark-1 font-10')]}>
          18th Oct to 24th Oct
        </Text>
      </View>
    </ScrollView>
  );
}
