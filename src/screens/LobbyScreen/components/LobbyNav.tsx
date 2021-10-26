import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function LobbyNav(props: PropTypes) {
  const {width, height} = useWindowDimensions();

  return (
    <View style={[tailwind('pt-1 flex-row justify-between')]}>
      <View
        style={[
          tailwind('flex-col items-center justify-end py-1'),
          {width: width / 5.5},
        ]}>
        <Icon name="person" size={20} color="#172339" />
        <Text style={[tailwind('font-regular text-primary font-10')]}>
          Hi, Naveen
        </Text>
      </View>

      <View style={[tailwind('flex-1')]}>
        <View style={[tailwind('flex-row items-center justify-around ')]}>
          <View
            style={[
              tailwind(
                'flex flex-col items-center border-b-2 mb-0.5 border-blue-800',
              ),
            ]}>
            <Icon name="tennisball-sharp" size={15} color="#7e6b2d" />
            <Text
              style={[
                tailwind(
                  'font-semibold text-center uppercase text-xs font-11 tracking-widest',
                ),
              ]}>
              Cricket
            </Text>
          </View>

          <View style={[tailwind('flex flex-col items-center mb-0.5')]}>
            <Icon name="football-sharp" size={15} color="#7e6b2d" />
            <Text
              style={[
                tailwind(
                  'font-semibold text-center text-secondary uppercase text-xs font-11 tracking-widest',
                ),
              ]}>
              FootBall
            </Text>
          </View>
        </View>
        <View style={[tailwind('flex-row')]}>
          <View
            style={[
              tailwind('w-full bg-dark'),
              {
                height: 10,
                borderStyle: 'solid',
                borderLeftWidth: 20,
                borderRightWidth: 20,
                borderTopWidth: 0,
                borderBottomWidth: 10,
                borderRightColor: '#bd9e4d',
                borderLeftColor: '#bfa04e',
                borderTopColor: 'transparent',
                borderBottomColor: '#0c1320',
              },
            ]}></View>
        </View>
      </View>

      <View
        style={[
          tailwind('flex-col items-center justify-end py-2 '),
          {width: width / 5.5},
        ]}>
        <Icon name="notifications-outline" size={25} color="#172339" />
      </View>
    </View>
  );
}

{
  /* <View
            style={{
              width: 0,
              height: 4,
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderRightWidth: 20,
              borderTopWidth: 10,
              borderRightColor: '#172339',
              borderTopColor: 'transparent',
            }}></View> */
}
