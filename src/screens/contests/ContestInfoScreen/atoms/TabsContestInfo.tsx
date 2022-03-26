import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {log, useAnimatedStyle} from 'react-native-reanimated';
import clr from '../../../../constants/colors';

interface PropTypes {
  tabOffset: any;
  activeIndex: any;
  onTabPressed: any;
  dT: boolean;
}

export default function TabsContestInfo(props: PropTypes) {
  const ai = props.activeIndex;
  const dT = props.dT;
  // const {width} = useWindowDimensions();

  // const rstyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{translateX: props.tabOffset.value / 2}],
  //   };
  // });

  return (
    <View style={[dT ? ss.dRoot : ss.lRoot]}>
      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity
          onPress={() => props.onTabPressed(0)}
          style={[tailwind('w-6/12')]}>
          <Text
            style={[
              ss.txt,
              dT ? clr.td2 : clr.td1,
              ai === 0 && dT ? ss.dActiveTxt : {},
              ai === 0 && !dT ? ss.lActiveTxt : {},
            ]}>
            Winnings
          </Text>
          <View
            style={[
              ss.border,
              ai === 0 && dT ? ss.DBorder : {},
              ai === 0 && !props.dT ? ss.lBorder : {},
            ]}></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.onTabPressed(1)}
          style={[tailwind('w-6/12')]}>
          <Text
            style={[
              ss.txt,
              dT ? clr.td2 : clr.td1,
              ai === 1 && dT ? ss.dActiveTxt : {},
              ai === 1 && !dT ? ss.lActiveTxt : {},
            ]}>
            Leaderboard
          </Text>
          <View
            style={[
              ss.border,
              ai === 1 && dT ? ss.DBorder : {},
              ai === 1 && !props.dT ? ss.lBorder : {},
            ]}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  dRoot: {
    backgroundColor: '#172338',
    borderColor: 'rgba(31, 41, 55,1)',
    borderBottomWidth: 1,
  },
  lRoot: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(31, 41, 55,0.2)',
    borderBottomWidth: 1,
  },
  txt: {
    fontFamily: 'gadugi-normal',
    paddingHorizontal: 8,
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: 15,
    color: '#8797B1',
  },
  dActiveTxt: {
    fontFamily: 'gadugi-bold',
    color: '#FFFFFF',
  },
  lActiveTxt: {
    fontFamily: 'gadugi-bold',
    color: '#9C181E',
  },
  border: {
    height: 2,
  },
  DBorder: {
    backgroundColor: '#816D2E',
  },
  lBorder: {
    backgroundColor: '#9C181E',
  },
});

{
  //
  // <Animated.View
  //   style={[
  //     tailwind('absolute bottom-0'),
  //     {width: width / 2, height: 2},
  //     {backgroundColor: '#816D2E'},
  //     rstyle,
  //   ]}></Animated.View>
}
