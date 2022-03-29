import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';
import clr from '../../constants/colors';

interface PropTypes {
  text?: string;
  dT: boolean;
}

export default function SocialMediaShare(props: PropTypes) {
  return (
    <View style={[styles.root]}>
      <View
        style={[
          tailwind('flex-row items-center px-4 justify-between'),
          {paddingVertical: 10},
        ]}>
        <Text style={[]}></Text>
        <Text
          style={[
            tailwind('font-regular font-15 uppercase'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          SHARE ON Social Media
        </Text>
        <Icon
          style={[tailwind('')]}
          name="chevron-down-outline"
          size={20}
          color={props.dT ? 'white' : 'gray'}
        />
      </View>
      {/* remove images */}
      <Link icon={assets.whatsapp} dT={props.dT} name="whatsapp" />
      <Link icon={assets.twitter} dT={props.dT} name="twitter" />
      <Link icon={assets.facebook} dT={props.dT} name="Facebook" />
    </View>
  );
}

const Link = (props: any) => {
  return (
    <View
      style={[
        tailwind('flex-row items-center justify-center'),
        {paddingVertical: 10},
        props.dT ? styles.dBorder : styles.lBorder,
        props.dT ? clr.bgd1 : clr.bgw,
        // styles.link,
      ]}>
      {/* remove image */}
      <Image
        resizeMode="contain"
        source={props.icon}
        style={[{width: 18, height: 18}]}
      />
      <Text
        style={[
          tailwind('font-regular px-2 font-15 uppercase'),
          props.dT ? clr.tw : clr.td1,
        ]}>
        {props.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderColor: '#8797B14D',
    borderWidth: 1,
    borderRadius: 2,
  },
  link: {
    borderTopColor: '#8797B14D',
    borderTopWidth: 1,
  },
  dBorder: {
    borderBottomColor: 'rgba(31, 41, 55,1)',
    borderBottomWidth: 1,
  },
  lBorder: {
    borderBottomColor: 'rgba(31, 41, 55,0.1)',
    borderBottomWidth: 1,
    elevation: 3,
  },
});
