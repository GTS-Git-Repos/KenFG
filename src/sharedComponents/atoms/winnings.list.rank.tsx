// used in contest info screen

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RankIcon} from '../../assets/newIcons';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  rank: string;
  value: string;
}

export default function WinningListRankings(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[dT ? ss.droot : ss.lroot]}>
      <View style={[ss.container]}>
        <View style={[ss.sec1]}>
          <View style={[ss.container]}>
            <RankIcon golden={false} />
            <Text style={[ss.rank, dT ? clr.tw : clr.tdgray]}>
              {props.rank}
            </Text>
          </View>
        </View>

        <View style={[ss.sec2]}>
          <Text style={[ss.value, dT ? clr.tw : clr.tdgray]}>
            {'\u20B9 '}
            {props.value}
          </Text>
        </View>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  droot: {
    paddingVertical: 12,
    borderColor: 'rgba(31, 41, 55,1)',
    borderBottomWidth: 1,
    backgroundColor: '#172338',
  },
  lroot: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: 'rgba(31, 41, 55,0.1)',
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sec1: {
    paddingLeft: 16,
    width: '50%',
  },
  sec2: {
    paddingRight: 16,
    width: '50%',
  },
  rank: {
    fontFamily: 'gadugi-bold',
    paddingLeft: 8,
    fontSize: 14,
  },
  value: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    textAlign: 'right',
  },
});
