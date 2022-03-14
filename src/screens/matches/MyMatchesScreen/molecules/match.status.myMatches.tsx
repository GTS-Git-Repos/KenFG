// used in my match screen, it UI differs from My Matches Lobby screen, but functions are same

import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {TeamFlag} from '../../../../sharedComponents';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';
import FastImage from 'react-native-fast-image';
import {LineupsCap} from '../../../../assets/newIcons';

interface PropTypes {
  match_key: string;
  team_a: any;
  team_b: any;
  tournament_name: string;
  start_time: Date;
  teamCount: any;
  contestCount: any;
  status: string;
  lineups: boolean;
  won: any;
  onPressMyMatchCard(match_key: string): any;
}

export default function MatchStatusMyMatch(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <TouchableOpacity
      onPress={() => props.onPressMyMatchCard(props.match_key)}
      activeOpacity={0.7}
      style={[ss.root, dT ? clr.bgd2 : clr.bgw]}>
      <View style={[ss.space1]}>
        {/* Top section */}
        <View style={[ss.topSection]}>
          <Text numberOfLines={1} style={[ss.tourName]}>
            {props.tournament_name}
          </Text>
          <Lineups lineups={props.lineups} />
        </View>

        <View style={[ss.teamContainer]}>
          {/* team name */}
          <View style={[ss.tNameC]}>
            <Text style={[ss.tName, dT ? clr.tw : clr.td1]}>
              {props.team_a.name}
            </Text>
            <Text style={[ss.tName, dT ? clr.tw : clr.td1]}>
              {props.team_b.name}
            </Text>
          </View>
          <View style={[ss.tsc]}>
            {/* team a */}
            <View style={[ss.team]}>
              <TeamFlag teamCode={props.team_a.code || ''} />
              <Text
                numberOfLines={1}
                style={[ss.teamCode, dT ? clr.tw : clr.tdgray]}>
                {props.team_a.code}
              </Text>
            </View>
            {/* Match status */}
            {props.status === 'notstarted' && <CountDown />}
            {props.status === 'started' && <OnLive />}
            {props.status === 'completed' && <CompletedMatch />}

            {/* team b */}
            <View style={[ss.team]}>
              <Text
                numberOfLines={1}
                style={[ss.teamCode, dT ? clr.tw : clr.tdgray]}>
                {props.team_b.code}
              </Text>
              <TeamFlag teamCode={props.team_b.code || ''} />
            </View>
          </View>
        </View>
      </View>
      {/* footer */}
      <View
        style={[ss.footer, dT ? {backgroundColor: '#0D132066'} : clr.bgGray]}>
        <View>
          <View style={[tailwind('flex-row items-center')]}>
            <Text style={[ss.number, dT ? clr.tw : clr.tdgray]}>
              {props.teamCount || 0}
            </Text>
            <Text style={[ss.stxt, dT ? clr.td2 : clr.tdgray]}>Teams</Text>
            <View style={[tailwind('flex-row px-4 items-center')]}>
              <Text style={[ss.number, dT ? clr.tw : clr.tdgray]}>
                {props.contestCount || 0}
              </Text>
              <Text style={[ss.stxt, dT ? clr.td2 : clr.tdgray]}>Contest</Text>
            </View>
          </View>
        </View>
        {props.won && <Won />}
      </View>
    </TouchableOpacity>
  );
}

function Lineups(props: any) {
  return (
    <View style={[ss.team]}>
      {props.lineups && (
        <Text
          style={[
            ss.tName,
            ss.greentxt,
            {fontFamily: 'gadugi-bold', paddingRight: 6},
          ]}>
          Lineups Out
        </Text>
      )}

      <LineupsCap lineups={props.lineups} />
    </View>
  );
}

function CountDown(props: any) {
  return (
    <View style={[{}]}>
      <Text style={[ss.tName, {color: '#EB5757'}]}>00h: 00m</Text>
    </View>
  );
}

function OnLive(props: any) {
  return (
    <View style={[ss.team]}>
      <View style={[ss.elipse, {backgroundColor: 'red'}]}></View>
      <Text style={[ss.tName, {color: '#EB5757'}]}>LIVE</Text>
    </View>
  );
}

function CompletedMatch() {
  return (
    <View style={[ss.team]}>
      <View style={[ss.elipse]}></View>
      <Text style={[ss.tName, ss.greentxt]}>COMPLTED</Text>
    </View>
  );
}

function Won(props: any) {
  return (
    <View style={[{}]}>
      <Text style={[ss.tName, ss.greentxt, {fontFamily: 'gadugi-bold'}]}>
        You Won {'\u20B9'} 500
      </Text>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    borderRadius: 6,
  },
  space1: {
    padding: 12,
  },
  tourName: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    color: '#8797B1',
    maxWidth: 200,
    paddingBottom: 4,
  },
  teamContainer: {
    paddingTop: 6,
  },
  topSection: {
    borderColor: '#8797B13D',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tNameC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tName: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
  },
  tsc: {
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagWrapper: {
    width: 45,
    height: 25,
    backgroundColor: '#0c1320',
    borderRadius: 2,
  },
  flag: {
    width: 45,
    height: 25,
  },
  teamCode: {
    textTransform: 'uppercase',
    fontFamily: 'gadugi-bold',
    fontSize: 16,
    paddingHorizontal: 8,
    maxWidth: 100,
  },
  greentxt: {
    color: '#00513B',
  },
  elipse: {
    width: 10,
    height: 10,
    backgroundColor: '#00513B',
    borderRadius: 5,
    marginHorizontal: 6,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  stxt: {
    fontFamily: 'gadugi-normal',
    paddingHorizontal: 2,
    fontSize: 12,
  },
  number: {
    fontFamily: 'gadugi-bold',
    paddingRight: 2,
    fontSize: 13,
  },
});
