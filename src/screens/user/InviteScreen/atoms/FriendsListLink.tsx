import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/native';
import clr from '../../../../constants/colors';

interface PropTypes {
  text?: string;
  dT: boolean;
}

export default function FriendsListLink(props: PropTypes) {
  const dT = props.dT;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ReferredFriendsListScreen')}
      style={[
        tailwind('mt-4 p-3 flex-row items-center justify-between'),
        dT ? clr.bgd2 : clr.bgw,
        {elevation: 4},
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Image
          resizeMode="contain"
          source={assets.friends}
          style={[tailwind(''), {width: 24, height: 24}]}
        />
        <Text
          style={[
            tailwind('font-regular px-3 font-14'),
            dT ? clr.tw : clr.td1,
          ]}>
          Your referred friends list
        </Text>
      </View>
      <View style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind('font-regular px-2 rounded-full px-2 py-1 font-15'),
            dT ? clr.tw : clr.td1,
          ]}>
          20
        </Text>
        <Icon
          name="chevron-forward-outline"
          size={18}
          color={props.dT ? 'white' : 'black'}
        />
      </View>
    </TouchableOpacity>
  );
}
