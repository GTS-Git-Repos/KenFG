import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teamname: string;
  teamcount: string;
  reverseUI: boolean;
}

export default function Team1(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          `px-1 items-center ${
            props.reverseUI ? 'flex-row-reverse' : 'flex-row'
          }`,
        ),
        {flex: 6},
      ]}>
      <View
        style={[tailwind('flex-row justify-center items-center'), {flex: 8}]}>
        <View style={[tailwind('flex-col items-center')]}>
          <Image
            resizeMode="contain"
            source={props.reverseUI ? assets.ENG : assets.AUS}
            style={[tailwind(''), {aspectRatio: 16 / 9, width: 45, height: 25}]}
          />
          <Text
            allowFontScaling={true}
            adjustsFontSizeToFit={true}
            style={[tailwind('font-bold text-white py-1 font-12')]}>
            {props.teamname}
          </Text>
        </View>
      </View>
      <View
        style={[
          tailwind(
            `flex-row items-center justify-center ${
              props.reverseUI ? 'justify-end' : 'justify-center'
            }`,
          ),
          {flex: 4},
        ]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={
            props.reverseUI ? ['#872525', '#0D1320'] : ['#172338', '#254987']
          }
          style={[tailwind('rounded-full p-0.5 px-2')]}>
          <Text
            style={[
              tailwind(
                `font-bold text-white  font-20 ${
                  props.reverseUI ? 'text-left' : 'text-right'
                }`,
              ),
            ]}>
            {props.teamcount}
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
}
