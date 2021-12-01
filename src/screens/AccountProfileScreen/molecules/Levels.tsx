import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomLine} from '../../../sharedComponents';

interface PropTypes {
  nextReward: string;
}

export default function LevelCard(props: PropTypes) {
  return (
    <View style={[tailwind('rounded bg-dark-3 my-2 py-3 px-4 ')]}>
      <View style={[tailwind('flex-row items-center')]}>
        <View
          style={[
            tailwind('bg-blue-500 rounded-full'),
            {width: 15, height: 15},
          ]}></View>
        <Text style={[tailwind('font-regular px-2 text-light font-13')]}>
          Next Rewards :
        </Text>
        <Text style={[tailwind('font-bold text-brown-4 pr-2 font-14')]}>
          {props.nextReward}
        </Text>
        <Text style={[tailwind('font-bold text-white font-14')]}>
          Cash Bonus
        </Text>
      </View>
      <View style={[tailwind('py-2')]}>
        <BottomLine />
      </View>
      <View style={[tailwind('flex-row justify-between items-center')]}>
        <Text style={[tailwind('font-regular text-light font-12')]}>
          View Upcomming Rewards and Levels
        </Text>
        <Icon name="chevron-forward-outline" size={17} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
