import React from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  text?: string;
  cricket: boolean;
  setCricket(arg: boolean): void;
}

export default function LobbyNav(props: PropTypes) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation<any>();

  return (
    <View style={[tailwind('pt-1 flex-row justify-between')]}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('User', {
            screen: 'SignupScreen',
          })
        }
        style={[
          tailwind('flex-col items-center relative bottom-1 py-1'),
          {width: width / 5.5},
        ]}>
        <Image
          resizeMode="contain"
          source={assets.profile_round}
          style={[tailwind('w-7 h-7 relative bottom-1')]}
        />
        <Text style={[tailwind('font-regular text-primary font-10')]}>
          Hi, Naveen
        </Text>
      </TouchableOpacity>

      <View style={[tailwind('flex-1')]}>
        <View style={[tailwind('flex-row items-center justify-around ')]}>
          <TouchableOpacity
            onPress={() => props.setCricket(true)}
            style={[
              tailwind('flex flex-col items-center border-b-2 mb-0.5'),
              {borderBottomColor: props.cricket ? '#162238' : 'transparent'},
            ]}>
            <Image
              resizeMode="contain"
              source={props.cricket ? assets.cricket_icon : assets.cricket_off}
              style={[tailwind('w-5 h-5')]}
            />
            <Text
              style={[
                tailwind(
                  `font-bold text-center px-2 uppercase text-xs font-11 tracking-widest`,
                ),
                {color: props.cricket ? '#172339' : '#695023'},
              ]}>
              Cricket
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.setCricket(false)}
            style={[
              tailwind('flex flex-col items-center border-b-2 mb-0.5'),
              {borderBottomColor: !props.cricket ? '#162238' : 'transparent'},
            ]}>
            <Image
              resizeMode="contain"
              source={props.cricket ? assets.football_icon : assets.footbal_on}
              style={[tailwind('w-5 h-5')]}
            />
            <Text
              style={[
                tailwind(
                  'font-bold text-center px-2 uppercase text-xs font-11 tracking-widest',
                ),
                {color: !props.cricket ? '#172339' : '#695023'},
              ]}>
              FootBall
            </Text>
          </TouchableOpacity>
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
                borderRightColor: '#BCA14D',
                borderLeftColor: '#C5A959',
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
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}
          style={[tailwind('relative bottom-2'), {left: 4}]}>
          <Image
            resizeMode="contain"
            source={assets.topBarbell}
            style={[tailwind('w-7 h-7')]}
          />
          <View
            style={[
              tailwind(
                'w-3 h-3 absolute right-0 top-0 rounded-full bg-red-500',
              ),
            ]}></View>
        </TouchableOpacity>
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
