import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PlayerFilterSheet() {
  return (
    <View style={[tailwind('bg-dark-4')]}>
      {/* Team a */}
      <View style={[tailwind('flex-row items-center justify-between p-4 ')]}>
        <View style={[tailwind('flex-row items-center'), {flex: 8}]}>
          <View style={[tailwind('px-2')]}>
            <Text style={[tailwind('font-bold text-white font-15')]}>
              England
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 font-11')]}>
              Team England
            </Text>
          </View>
        </View>

        <View style={[tailwind(' items-end'), {flex: 2}]}>
          {true ? (
            <Icon name="checkmark-circle-outline" size={20} color="green" />
          ) : (
            <Icon name="ellipse-outline" size={20} color="gray" />
          )}
        </View>
      </View>
      {/* team b */}

      <View style={[tailwind('flex-row items-center justify-between p-4')]}>
        <View style={[tailwind('flex-row items-center'), {flex: 8}]}>
          <View style={[tailwind('px-2')]}>
            <Text style={[tailwind('font-bold text-white font-15')]}>
              Australia
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 font-11')]}>
              Team Australia
            </Text>
          </View>
        </View>

        <View style={[tailwind(' items-end'), {flex: 2}]}>
          {true ? (
            <Icon name="checkmark-circle-outline" size={20} color="green" />
          ) : (
            <Icon name="ellipse-outline" size={20} color="gray" />
          )}
        </View>
      </View>
    </View>
  );
}
