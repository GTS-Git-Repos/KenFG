import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function LobbyNav(props: PropTypes) {
  return (
    <View style={[tailwind('bg-secondary flex-row justify-between')]}>
      <View style={[tailwind('flex-col items-center justify-end py-2 w-16')]}>
        <Icon name="person" size={25} color="#172339" />
        <Text style={[tailwind('font-regular text-primary font-10')]}>
          Hi, Naveen
        </Text>
      </View>

      <View style={[tailwind('flex-1')]}>
        <View style={[tailwind('flex-row items-center justify-around ')]}>
          <View
            style={[
              tailwind(
                'flex flex-col items-center border-b-2 p-2 mb-1 border-blue-800',
              ),
            ]}>
            <Icon name="tennisball-sharp" size={18} color="#7e6b2d" />
            <Text style={[tailwind('font-regular text-center font-15')]}>
              Cricket
            </Text>
          </View>

          <View style={[tailwind('flex flex-col items-center mb-1 p-2')]}>
            <Icon name="football-sharp" size={18} color="#7e6b2d" />
            <Text style={[tailwind('font-regular text-center font-15')]}>
              FootBall
            </Text>
          </View>
        </View>

        <View
          style={[
            tailwind('flex bg-dark h-5 flex-row'),
            {
              transform: [{rotateZ: '0deg'}],
            },
          ]}></View>
      </View>

      <View style={[tailwind('flex-col items-center justify-end  w-16 py-2 ')]}>
        <Icon name="notifications-outline" size={25} color="#172339" />
      </View>
    </View>
  );
}
