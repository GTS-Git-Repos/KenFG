import React from 'react';
import tailwind from '../../../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../../constants/assets_manifest';

interface PropTypes {
  countDown: string;
}

export default function Teams(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row'), {paddingTop: 3}]}>
      <View style={[tailwind('flex-row'), {flex: 4}]}>
        <View
          style={[
            tailwind('bg-blue-900'),
            {width: 10, height: 14, top: 25 / 4},
          ]}></View>
        <View>
          <View
            style={[
              tailwind(''),
              {width: 45, height: 25, aspectRatio: 16 / 9},
            ]}>
            <Image
              resizeMode="contain"
              source={assets.AUS}
              style={{aspectRatio: 16 / 9}}
            />
          </View>
          <Text
            style={[
              tailwind('font-bold text-center py-0.5 text-light font-12'),
            ]}>
            AUS
          </Text>
        </View>
      </View>

      {/* Count down */}

      <View style={[tailwind('justify-between items-center'), {flex: 4}]}>
        <View style={[tailwind('flex-row pt-2')]}>
          <Image
            resizeMode="contain"
            source={assets.running_clock}
            style={[tailwind(''), {width: 16, height: 16}]}
          />
          <Text style={[tailwind('font-bold text-white font-13 px-1')]}>
            {props.countDown}
          </Text>
        </View>
        {/* <IsLive /> */}
      </View>

      <View style={[tailwind('flex-row justify-end'), {flex: 4}]}>
        <View>
          <View style={[tailwind(''), {width: 45, height: 25}]}>
            <Image
              resizeMode="contain"
              source={assets.ENG}
              style={{aspectRatio: 16 / 9}}
            />
          </View>
          <Text
            style={[
              tailwind('font-bold text-center py-0.5 text-light font-12'),
            ]}>
            ENG
          </Text>
        </View>
        <View
          style={[
            tailwind('bg-red-700'),
            {width: 10, height: 14, top: 25 / 4},
          ]}></View>
      </View>
    </View>
  );
}

const IsLive = () => {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <Text
        style={[
          tailwind('font-regular text-center pr-1 font-10'),
          {fontSize: 14, color: '#FEFEFF'},
        ]}>
        LIVE
      </Text>
      <View
        style={[
          tailwind('rounded-full'),
          {backgroundColor: 'green', width: 5, height: 5},
        ]}></View>
    </View>
  );
};
