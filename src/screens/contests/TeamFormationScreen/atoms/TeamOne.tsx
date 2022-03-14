// team formation team information, the reverseUI swap the flexRow style

import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet} from 'react-native';
import {TeamFlag} from '../../../../sharedComponents';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  teamname: string;
  teamcount: number;
  reverseUI: boolean;
}

export default function Team1(props: PropTypes) {
  return (
    <View style={[ss.root, props.reverseUI && ss.invert]}>
      <View style={ss.teamc}>
        <View style={[tailwind('flex-col items-center')]}>
          <TeamFlag teamCode={props.teamname || ''} />
          <Text numberOfLines={1} style={[ss.teamName]}>
            {props.teamname}
          </Text>
        </View>
      </View>
      <View
        style={[
          ss.countC,
          props.reverseUI
            ? {justifyContent: 'flex-end'}
            : {justifyContent: 'center'},
        ]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={
            props.reverseUI ? ['#872525', '#0D1320'] : ['#172338', '#254987']
          }
          style={[tailwind('rounded-full p-0.5 px-2')]}>
          <Text
            style={[
              ss.count,
              props.reverseUI ? {textAlign: 'left'} : {textAlign: 'right'},
            ]}>
            {props.teamcount}
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    paddingHorizontal: 4,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 6,
  },
  invert: {
    flexDirection: 'row-reverse',
  },
  teamc: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 8,
  },
  teamName: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    paddingVertical: 6,
    textTransform: 'uppercase',
  },
  countC: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 4,
  },
  count: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-bold',
    fontSize: 20,
  },
});
