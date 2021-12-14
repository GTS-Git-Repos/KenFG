import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/native';

interface PropTypes {
  text?: string;
}

export default function FriendsListLink(props: PropTypes) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ReferredFriendsListScreen')}
      style={[
        tailwind('mt-4 bg-dark-3 p-4 flex-row items-center justify-between'),
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <Image
          resizeMode="contain"
          source={assets.friends}
          style={[tailwind(''), {width: 24, height: 24}]}
        />
        <Text style={[tailwind('font-regular px-3 text-white font-12')]}>
          Your referred friends list
        </Text>
      </View>
      <View style={[tailwind('flex-row items-center')]}>
        <Text
          style={[
            tailwind(
              'font-regular px-2 bg-black rounded-full px-2 py-1 text-light font-15',
            ),
          ]}>
          20
        </Text>
        <Icon name="chevron-forward-outline" size={18} color="white" />
      </View>
    </TouchableOpacity>
  );
}
