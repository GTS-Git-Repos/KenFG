import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';

interface PropTypes {
  text?: string;
}

export default function SocialMediaShare(props: PropTypes) {
  return (
    <View style={[styles.root]}>
      <View
        style={[
          tailwind('flex-row items-center px-4 justify-between'),
          {paddingVertical: 10},
        ]}>
        <Text style={[tailwind('font-regular text-light font-15')]}></Text>
        <Text style={[tailwind('font-regular text-white font-15 uppercase')]}>
          SHARE ON Social Media
        </Text>
        <Icon
          style={[tailwind('')]}
          name="chevron-down-outline"
          size={20}
          color="white"
        />
      </View>
      <Link icon={assets.whatsapp} name="whatsapp" />
      <Link icon={assets.twitter} name="twitter" />
      <Link icon={assets.facebook} name="Facebook" />
    </View>
  );
}

const Link = (props: any) => {
  return (
    <View
      style={[
        tailwind('flex-row bg-dark-4 items-center justify-center'),
        {paddingVertical: 10},
        styles.link,
      ]}>
      <Image
        resizeMode="contain"
        source={props.icon}
        style={[{width: 18, height: 18}]}
      />
      <Text
        style={[tailwind('font-regular px-2 text-white font-15 uppercase')]}>
        {props.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderTopColor: '#8797B1',
    borderLeftColor: '#8797B1',
    borderRightColor: '#8797B1',
    borderBottomColor: '#8797B1',
    borderWidth: 1,
    borderRadius: 2,
  },
  link: {
    borderTopColor: '#8797B1',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderWidth: 1,
  },
});
