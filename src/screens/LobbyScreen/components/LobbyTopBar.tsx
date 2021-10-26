import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  amount: number;
}

export default function LobbyTopBar(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row justify-between')]}>
      <View
        style={[
          tailwind('pt-3 bg-primary px-5 pb-3'),
          {
            borderStyle: 'solid',
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRightColor: 'blue',
            borderLeftColor: 'green',
            borderTopColor: 'red',
            borderBottomColor: 'pink',
            transform: [{rotate: '0deg'}],
          },
        ]}>
        <View style={[tailwind('flex flex-row items-center')]}>
          <Text style={[tailwind('font-bold app-white'), {fontSize: 24}]}>
            KEN
          </Text>
          <Text style={[tailwind('font-bold text-red-500'), {fontSize: 24}]}>
            FG
          </Text>
        </View>
        <Text
          style={[
            tailwind(
              'font-regular text-white border-t border-gray-500 font-10',
            ),
          ]}>
          Ken Fantasy Games
        </Text>
      </View>

      <View style={[tailwind('flex-row items-end justify-end px-2')]}>
        <View style={[tailwind('px-2')]}>
          <Text
            style={[tailwind('font-regular text-primary font-10 uppercase')]}>
            Cash Balance
          </Text>
          <Text style={[tailwind('font-medium text-primary font-14')]}>
            Rs. {props.amount}
          </Text>
        </View>
        <Icon name="wallet" size={30} color="#172339" />
      </View>
    </View>
  );
}
