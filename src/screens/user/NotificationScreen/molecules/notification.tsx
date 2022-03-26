import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Circle, Path, Rect} from 'react-native-svg';
import {GiftIcon} from '../../../../assets/newIcons';
import clr from '../../../../constants/colors';

interface PropTypes {
  id: string;
  when: string;
  read: boolean;
  type: string;
  content: string;
  dT: boolean;
}

export default function Notification(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[dT ? ss.dRoot : ss.lRoot]}>
      <View style={[ss.space]}>
        <View>
          <GiftIcon dT={dT} />
          <Elipses />
        </View>
        <View style={[ss.content]}>
          <View>
            <Text style={[ss.title, dT ? clr.tw : clr.td1]}>
              {props.content}
            </Text>
            <Text style={[ss.time, clr.td2]}>{props.when}</Text>
          </View>
        </View>
        <View style={[{flex: 2}]}></View>
      </View>
    </View>
  );
}

const Elipses = () => {
  return (
    <View style={[tailwind('absolute right-0 top-1')]}>
      <Svg width="9" height="8" viewBox="0 0 9 8" fill="none">
        <Circle cx="4.66537" cy="4" r="4" fill="#EB5757" />
      </Svg>
    </View>
  );
};

const ss = StyleSheet.create({
  dRoot: {
    backgroundColor: '#172338',
    borderColor: 'rgba(31, 41, 55,1)',
    // elevation: 3,
  },
  lRoot: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(31, 41, 55,0.2)',
    // elevation: 3,
  },
  space: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  content: {
    paddingHorizontal: 12,
    flex: 6.5,
  },

  title: {
    fontFamily: 'gadugi-bold',
    paddingVertical: 4,
    fontSize: 12,
  },
  time: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    paddingVertical: 4,
  },
});
