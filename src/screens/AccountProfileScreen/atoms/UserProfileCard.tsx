import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import assets from '../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';

const IMAGESIZE = 90;

interface PropTypes {
  image: string;
  name: string;
  username: string;
  level: string;
  followers: string;
  following: string;
  friends: string;
}

export default function UserProfileCard(props: PropTypes) {
  return (
    <View style={[tailwind('rounded p-1')]}>
      <View style={[tailwind('flex-row')]}>
        <View style={{flex: 1}}>
          <Image source={assets.playerImage} style={[styles.image]} />
        </View>
        <View style={[tailwind('flex-col justify-between px-2'), {flex: 3}]}>
          <View>
            <Text
              numberOfLines={1}
              style={[tailwind('font-semibold pt-2 pb-1 text-light font-16')]}>
              {props.name}
            </Text>
            <Text style={[tailwind('font-regular text-gray-300 font-14')]}>
              {props.username}
            </Text>
          </View>

          <View style={[tailwind('py-2 flex-row items-center')]}>
            <Icon name="medal" size={18} color="#d1b45a" />
            <Text style={[tailwind('font-regular px-2 text-light font-15')]}>
              Level {props.level}
            </Text>
          </View>
        </View>
      </View>
      {/* Followers Section */}
      <View style={[tailwind('flex-row p-3 items-center')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <Text style={[tailwind('font-bold text-light font-16')]}>
            {props.followers}
          </Text>
          <Text style={[tailwind('font-regular px-1 text-light font-15')]}>
            Followers
          </Text>
        </View>

        <View style={[tailwind('flex-row px-3 items-center')]}>
          <Text style={[tailwind('font-bold text-light font-16')]}>
            {props.following}
          </Text>
          <Text style={[tailwind('font-regular px-1 text-light font-15')]}>
            Following
          </Text>
        </View>

        <View style={[tailwind('flex-row items-center')]}>
          <Text style={[tailwind('font-bold text-light font-16')]}>
            {props.friends}
          </Text>
          <Text style={[tailwind('font-regular px-1 text-light font-15')]}>
            Friends
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: IMAGESIZE,
    height: IMAGESIZE,
    borderRadius: IMAGESIZE / 2,
  },
});
