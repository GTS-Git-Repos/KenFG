import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';

const IMAGESIZE = 60;

interface PropTypes {
  image: string;
  name: string;
  username: string;
  gender: any;
  level: string;
  moreOptionSheet: any;
  dT: boolean;
}

export default function UserProfileCard(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[tailwind('p-3 mt-2 mb-3 flex-row items-center')]}>
      <View style={[tailwind(''), {flex: 2}]}>
        <TouchableOpacity
          onPress={() => props.moreOptionSheet?.current?.open()}
          style={[ss.imageContainer]}>
          {/* if image exists */}
          {props.image ? (
            <Image
              resizeMode="cover"
              source={{uri: `http://kenfg.com/uploads/${props.image}`}}
              style={[ss.img]}
            />
          ) : (
            <TempUserImage female={props.gender} />
          )}
        </TouchableOpacity>
      </View>
      <View style={[tailwind(''), {flex: 7}]}>
        <Text numberOfLines={1} style={[ss.name, dT ? clr.tw : clr.td1]}>
          {props.username}
        </Text>
        <Text
          numberOfLines={1}
          style={[ss.fullname, dT ? clr.td2 : clr.tdgray]}>
          {props.name}
        </Text>
        <View style={[tailwind('flex-row items-center')]}>
          <View style={[tailwind('rounded-full'), {width: 16, height: 16}]}>
            <Image
              resizeMode="contain"
              source={assets.levels}
              style={[tailwind('w-full h-full')]}
            />
          </View>
          <Text style={[ss.levelNum, dT ? clr.tw : clr.td1]}>
            Level {props.level}
          </Text>
        </View>
      </View>
    </View>
  );
}

function TempUserImage(props: any) {
  return props.female ? (
    <Image
      resizeMode="cover"
      source={assets.female_profile}
      style={[{width: 60, height: 60}]}
    />
  ) : (
    <Image
      resizeMode="cover"
      source={assets.user_temp_profile}
      style={[{width: 60, height: 60}]}
    />
  );
}

const ss = StyleSheet.create({
  imageContainer: {
    width: IMAGESIZE,
    height: IMAGESIZE,
    borderRadius: IMAGESIZE / 2,
  },
  img: {
    width: IMAGESIZE,
    height: IMAGESIZE,
    borderRadius: IMAGESIZE / 2,
  },
  name: {
    fontFamily: 'gadugi-normal',
    fontSize: 16,
  },
  fullname: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    paddingVertical: 4,
  },
  levelNum: {
    fontFamily: 'gadugi-normal',
    paddingHorizontal: 6,
    fontSize: 13,
  },
});
