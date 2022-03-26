// used in contest card my contest card

import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  total_spots: any;
  filled_spots: any;
  occupaid_cent: number;
}

export default function ProgressBarContestCard(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  const cent = props.occupaid_cent || 0;
  const PGBARWIDTH = `${cent}%`;
  return (
    <View>
      <View style={ss.root}>
        <View
          style={[
            {
              backgroundColor: `${dT ? '#B2933D' : '#00513B'}`,
              width: PGBARWIDTH,
              height: 2.5,
            },
          ]}></View>
      </View>
      <View style={[ss.container]}>
        <Text style={[ss.txt, dT ? clr.tgl : clr.tgreen]}>
          {props.total_spots - props.filled_spots} spots left
        </Text>
        <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>
          {props.total_spots} Spots
        </Text>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    width: '100%',
    borderRadius: 10,
    height: 2.5,
    backgroundColor: '#8797B14D',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
  },
  txt: {
    fontFamily: 'gadugi-normal',
    fontSize: 14,
  },
});
