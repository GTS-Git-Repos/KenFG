import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  name: string;
  text?: string;
  cricket: boolean;
  setCricket(arg: boolean): void;
}

export default function NewLobbyNav(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 '), {paddingHorizontal: 16}]}>
      <View style={[tailwind('pt-3 rounded-t-2xl flex-row items-center')]}>
        {/* Profile */}
        <View
          style={[
            tailwind('flex-col items-center box justify-center'),
            {flex: 3},
          ]}>
          <TouchableOpacity
            // onPress={() => navigation.openDrawer()}
            style={[tailwind('flex-col'), {left: 13}]}>
            <Image
              resizeMode="contain"
              source={assets.profile_round}
              style={[tailwind('w-7 h-7 relative bottom-1')]}
            />
            <Text
              numberOfLines={1}
              style={[tailwind('font-regular text-light font-10')]}>
              {/* Hi, {props.name} */}
              Hi, Naveen how fjoqopj
            </Text>
          </TouchableOpacity>
        </View>

        {/* Nav Links */}
        <View style={[tailwind('box'), {flex: 6}]}></View>

        {/* Notifications */}
        <View style={[tailwind('box'), {flex: 3}]}>
          <TouchableOpacity
            // onPress={() => navigation.openDrawer()}
            style={[tailwind('flex-col items-center'), {left: 12}]}>
            <Image
              resizeMode="contain"
              source={assets.notify}
              style={[tailwind('w-6 h-6')]}
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
    </View>
  );
}
