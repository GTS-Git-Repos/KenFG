import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  icon: number;
  title: string;
  value: string;
  preverifiedvalue: string;
  verified: boolean;
}

export default function VerifyContent(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 flex-row items-center px-4 py-2')]}>
      <Image
        resizeMode="contain"
        source={props.icon}
        style={[
          tailwind(''),
          {
            width: 40,
            height: 40,
          },
        ]}
      />
      <View style={[tailwind('px-4 mr-4'), {flex: 7}]}>
        <Text
          style={[
            tailwind(
              `font-regular ${
                props.verified ? 'text-dark-1' : 'text-light'
              } font-12`,
            ),
          ]}>
          {props.title}
        </Text>
        {props.verified ? (
          <Text style={[tailwind('font-bold text-white pt-1 font-12')]}>
            {props.value}
          </Text>
        ) : (
          <Text style={[tailwind('font-regular text-dark-1 pt-1 font-12')]}>
            {props.preverifiedvalue}
          </Text>
        )}
      </View>
      {props.verified ? (
        <TouchableOpacity
          style={[
            tailwind('flex-row p-1 rounded items-center justify-center'),
            {flex: 3, backgroundColor: '#00513B'},
          ]}>
          <Image
            resizeMode="contain"
            source={assets.verified_tick}
            style={[tailwind(''), {width: 13, height: 13}]}
          />
          <Text style={[tailwind('font-regular text-light font-12 px-1')]}>
            Verified
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            tailwind(
              'flex-row p-1 border border-gray-800 rounded items-center justify-center',
            ),
            {flex: 3},
          ]}>
          <Image
            resizeMode="contain"
            source={assets.verify_tick}
            style={[tailwind(''), {width: 13, height: 13}]}
          />
          <Text style={[tailwind('font-regular text-light font-12 px-1')]}>
            VERIFY
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
