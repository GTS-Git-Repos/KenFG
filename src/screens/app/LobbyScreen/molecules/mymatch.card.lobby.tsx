// my match card used in lobby screen

import React, {useEffect, useRef, useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Teams from '../atoms/my.matches.teams';
import {useNavigation} from '@react-navigation/core';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  match_key: string;
  team_a: any;
  team_b: any;
  tournament_name: string;
  start_time: Date;
  teamCount: any;
  contestCount: any;
  status: string;
  onPressMyMatchCard(match_key: string): any;
}

export default function MyMatchesCard(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  const isMounted = useRef(true);

  const [countDown, setCountDown] = useState<any>('00:00:00');

  useEffect(() => {
    const interval: any = null;
    try {
      if (isMounted.current) {
        // count down logic yet to be implemented
      }
    } catch (err) {
      console.log(err);
    }
    return () => {
      // log('Unmounted');
      isMounted.current = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        props.onPressMyMatchCard(props.match_key);
      }}
      style={[ss.matchroot, dT ? clr.bgd2 : clr.bgw]}>
      {/* Top Section */}
      <View style={ss.root}>
        <View style={ss.wrapper}>
          <Text style={[ss.matchName, dT ? clr.td2 : clr.td1]}>
            {props.tournament_name}
          </Text>
          <View style={ss.metawrapper}>
            <Text style={[ss.metaValue, dT ? clr.tw : clr.td1]}>
              {props.teamCount}
            </Text>
            <Text style={[ss.metaText, dT ? clr.td2 : clr.td1]}>Team</Text>
            <Text style={[ss.metaSeperator, dT ? clr.td2 : clr.td1]}>|</Text>
            <Text style={[ss.metaValue, dT ? clr.tw : clr.td1]}>
              {props.contestCount}
            </Text>
            <Text style={[ss.metaText, dT ? clr.td2 : clr.td1]}>Contest</Text>
          </View>
        </View>
      </View>

      <Teams
        dT={dT}
        countDown={countDown}
        team_a={props.team_a}
        team_b={props.team_b}
        status={props.status}
      />
      {/* Footer */}
      <LinearGradient
        colors={dT ? ['#131e30', '#162135'] : ['#E0E0E0', 'white']}
        style={[ss.footerC]}>
        <Text style={[ss.statusTxt, dT ? clr.td2 : clr.td1]}>Slide AD....</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  matchroot: {
    borderRadius: 4,
    elevation: 2,
  },
  root: {
    borderColor: 'rgba(31, 41, 55, 0.05)',
    borderBottomWidth: 1,
    marginHorizontal: 12,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  matchName: {
    fontFamily: 'gadugi-normal',
    fontSize: 11,
    textAlign: 'left',
  },
  metawrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'right',
  },
  metaValue: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingLeft: 2,
    paddingRight: 2,
  },
  metaText: {fontFamily: 'gadugi-normal', fontSize: 11},
  metaSeperator: {
    fontFamily: 'gadugi-normal',
    fontSize: 11,
    paddingLeft: 2,
    paddingRight: 2,
  },
  footerC: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingVertical: 2,
  },
  statusTxt: {
    fontFamily: 'gadugi-normal',
    fontSize: 11,
    textAlign: 'center',
  },
});
