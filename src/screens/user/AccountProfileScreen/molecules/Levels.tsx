import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import {BottomLine} from '../../../../sharedComponents';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  nextReward: string;
}

export default function LevelCard(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <View style={[tailwind('rounded bg-dark-3 my-2 py-3 px-4 ')]}>
      <View
        style={[
          tailwind('flex-row items-center pb-3 border-t border-gray-800'),
        ]}>
        <View style={[tailwind('rounded-full'), {width: 15, height: 15}]}>
          <Image
            resizeMode="contain"
            source={assets.levels}
            style={[tailwind('w-full h-full')]}
          />
        </View>
        <Text style={[tailwind('font-regular px-2 text-light font-13')]}>
          Next Rewards :
        </Text>
        <Text style={[tailwind('font-bold text-brown-3 pr-2 font-14')]}>
          {props.nextReward}
        </Text>
        <Text style={[tailwind('font-bold text-white font-14')]}>
          Cash Bonus
        </Text>
      </View>
      {/* <View style={[tailwind('py-2')]}>
        <BottomLine />
      </View> */}
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate('UserGoalsScreen')}
        style={[tailwind('flex-row justify-between items-center')]}>
        <Text style={[tailwind('font-regular text-light font-12')]}>
          View Upcomming Rewards and Levels
        </Text>
        <Icon name="chevron-forward-outline" size={17} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  shadow: {
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
});
