import React from 'react';
import tailwind from '../../../tailwind';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomLine, SwitchIcon} from '..';
import assets from '../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  image: string;
  name: string;
  teamCode: string;
  points?: number;
  rank?: number;
  up?: boolean;
  currentUser: boolean;
  hasStatus: boolean;
  matchStarted: boolean;
  navigate(matchStarted: boolean): any;
}
const PROFILEWIDTH = Dimensions.get('window').width / 2;
const SUBTABWIDTH = PROFILEWIDTH / 2;

export default function HorizontalProfile(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={[tailwind('px-4 py-3 bg-dark-3 border-b border-gray-800')]}
      onPress={() => props.navigate(props.matchStarted)}>
      <View style={[tailwind('flex-row items-center')]}>
        <View
          style={[
            tailwind('flex-row justify-between items-center'),
            {width: PROFILEWIDTH},
          ]}>
          <View style={[tailwind('flex-1 px-1 flex-row items-center')]}>
            <Image
              resizeMode="cover"
              // source={{uri: props.image}}
              source={assets.person}
              style={{borderRadius: 100, height: 24, width: 24}}
            />
            <View
              style={[
                tailwind('flex-row items-center px-2'),
                {width: PROFILEWIDTH - 35},
              ]}>
              <Text
                textBreakStrategy="highQuality"
                numberOfLines={1}
                ellipsizeMode="tail"
                style={[tailwind('font-regular flex-1 text-gray-200 font-14')]}>
                {props.name}
              </Text>

              <View
                style={[
                  tailwind('py-0.5 mr-1 mb-1 bg-dark-4'),
                  {borderRadius: 2, paddingHorizontal: 6},
                ]}>
                <Text style={[tailwind('font-regular text-white font-12')]}>
                  {props.teamCode}
                </Text>
              </View>

              {/* <Text
                style={[
                  tailwind('bg-black text-dark-1 font-14 px-1 py-0.5'),
                  {borderRadius: 3},
                ]}>
               
              </Text> */}
            </View>
          </View>
        </View>

        <View style={[tailwind('flex-1'), {width: SUBTABWIDTH}]}>
          <Text
            style={[tailwind('font-regular font-14 text-center text-dark-1')]}>
            {' '}
            {props.points}
          </Text>
        </View>
        <View
          style={[
            tailwind('flex-row flex-1 justify-center items-center'),
            {width: SUBTABWIDTH},
          ]}>
          <View style={[tailwind('px-2')]}>
            <Text
              style={[tailwind('font-bold text-light font-14 items-center')]}>
              {props.rank}
            </Text>
          </View>
          {props.hasStatus ? (
            props.up ? (
              <Icon name="arrow-down" color="red" size={20} />
            ) : (
              <Icon name="arrow-up" color="green" size={20} />
            )
          ) : null}

          {/* Switch */}
          {props.currentUser ? (
            <TouchableOpacity
              onPress={() => {
                ToastAndroid.show(
                  'Team Switch is Not available currently!',
                  ToastAndroid.SHORT,
                );
              }}>
              <SwitchIcon />
            </TouchableOpacity>
          ) : (
            <View style={[tailwind('px-2')]}></View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    borderTopColor: '#8797B140',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
