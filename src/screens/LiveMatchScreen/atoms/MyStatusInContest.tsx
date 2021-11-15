import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function MyStatusConestInfo(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row items-center px-2 py-3')]}>
      <View style={[tailwind(''), {flex: 6}]}>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <Text
            numberOfLines={1}
            style={[
              tailwind('font-regular text-light font-15'),
              {width: '80%'},
            ]}>
            The Fantasy Player Name
          </Text>
          <Text
            style={[tailwind('font-bold bg-secondary p-0.5 rounded font-12')]}>
            T1
          </Text>
        </View>

        <Text
          style={[
            tailwind('font-regular text-green-500 uppercase py-1 font-15'),
          ]}>
          in winning zone
        </Text>
      </View>
      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <View style={[tailwind(''), {flex: 6}]}>
          <Text
            style={[tailwind('font-regular text-light text-center font-15')]}>
            189.7
          </Text>
        </View>
        <View
          style={[tailwind('flex-row items-center justify-end'), {flex: 6}]}>
          <Text
            style={[tailwind('font-bold px-1 text-light text-center font-15')]}>
            <Text style={[tailwind('font-regular font-15')]}>#</Text>
            80
          </Text>
          <Icon name="arrow-down-outline" size={20} color="green" />
        </View>
      </View>
    </View>
  );
}
