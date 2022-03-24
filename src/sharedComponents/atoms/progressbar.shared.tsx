import React from 'react';
import tailwind from '../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  spots: string;
  left: string;
}

export default function ProgressBarShared(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View>
      <View style={[tailwind('my-2')]}>
        <View style={[{backgroundColor: '#8797B14D', height: 2.5}]}>
          <View
            style={[
              {height: 2.5, width: '20%'},
              dT ? clr.bgg : clr.bgGreen,
            ]}></View>
        </View>
      </View>
      <View style={[tailwind('flex-row items-center justify-between')]}>
        <Text style={[ss.spottxt, dT ? clr.tgl : clr.tgreen]}>
          {props.left} Spots left
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
          {props.spots} Spots
        </Text>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  spottxt: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
  },
});
