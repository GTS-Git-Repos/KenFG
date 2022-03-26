import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PlayedMatchType} from '../../../../types/user';
import assets from '../../../../constants/assets_manifest';
import {TeamFlag} from '../../../../sharedComponents';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import clr from '../../../../constants/colors';
import {errorBox} from '../../../../utils/snakBars';

interface PropTypes {
  match_key: string;
  teams: TeamsType;
  match_result: string;
  h_points: number;
  teams_created: number;
  kenTeam: number;
  dT: boolean;
}

interface TeamsType {
  a: {
    key: string;
    code: string;
    name: string;
  };
  b: {
    key: string;
    code: string;
    name: string;
  };
}

export default function PlayerContests(props: PropTypes) {
  const dT = props.dT;

  return (
    <View style={[ss.root, dT ? clr.bgd2 : clr.bgw]}>
      <TeamSection
        dT={dT}
        team_a={props.teams.a}
        team_b={props.teams.b}
        match_result={props.match_result}
      />
      {/* points and team count */}
      <View
        style={[tailwind('flex-row items-center justify-between px-2 pb-2')]}>
        <View>
          <Text style={[ss.subTitle, dT ? clr.td2 : clr.td1]}>
            Highest Point
          </Text>
          <Text style={[ss.hp, dT ? clr.tgl : clr.tr]}>N/A (T1)</Text>
        </View>
        <View style={[tailwind('')]}>
          <Text style={[ss.subTitle, dT ? clr.td2 : clr.td1]}>
            Teams Created
          </Text>
          <Text style={[ss.tTeam, dT ? clr.tgl : clr.tr]}>
            {props.teams_created}
          </Text>
        </View>
      </View>
      {/* footer */}
      <View style={[ss.footC, !dT && clr.bgw]}>
        <Text style={[ss.kenTeam, dT ? clr.tw : clr.td1]}>
          Ken Team: {props.kenTeam || 'N/A'} pts
        </Text>
      </View>
    </View>
  );
}

const TeamSection = (props: any) => {
  const dT = props.dT;
  return (
    <View style={[tailwind('flex-row justify-between pt-3 pb-1 px-2')]}>
      <View>
        <View style={[ss.frc]}>
          <View style={[tailwind('flex-col justify-center items-center')]}>
            <TeamFlag teamCode={props.team_a.code} />
            <Text style={[ss.teamCode, dT ? clr.tw : clr.td1]}>
              {props.team_a.code}
            </Text>
          </View>

          <Text style={[ss.vs, dT ? clr.tw : clr.td1]}>VS</Text>

          <View style={[tailwind('flex-col items-center')]}>
            <TeamFlag teamCode={props.team_b.code} />
            <Text style={[ss.teamCode, dT ? clr.tw : clr.td1]}>
              {props.team_b.code}
            </Text>
          </View>
        </View>
        <Text style={[ss.matchResult, dT ? clr.tw : clr.td1]}>
          {props.match_result || 'N/A'}
        </Text>
      </View>
      <View style={[tailwind('')]}>
        <View style={[tailwind('flex-row pl-12 items-center')]}>
          <Image
            resizeMode="contain"
            source={assets.winning_cup}
            style={{width: 17, height: 17}}
          />
          <Text style={[ss.won, dT ? clr.tgl : clr.tr]}>YOU WON</Text>
        </View>
        <Text style={[ss.cash, dT ? clr.tw : clr.td1]}>{'\u20B9'} 0</Text>
      </View>
    </View>
  );
};

const ss = StyleSheet.create({
  root: {
    borderRadius: 4,
    elevation: 4,
    marginRight: 16,
  },
  frc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamCode: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    color: '#FFFFFF',
    paddingVertical: 6,
    textTransform: 'uppercase',
  },
  matchResult: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    paddingVertical: 2,
    color: '#FFFFFF',
  },
  subTitle: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingVertical: 2,
  },
  vs: {
    bottom: 8,
    color: '#f5feff',
    fontFamily: 'gadugi-bold',
    fontSize: 13,
    paddingVertical: 8,
    paddingHorizontal: 12,
    position: 'relative',
  },
  hp: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingTop: 4,
  },
  tTeam: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingTop: 4,
    textAlign: 'right',
  },
  footC: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#121D2E',
  },
  kenTeam: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
  },
  won: {
    fontFamily: 'gadugi-normal',
    paddingLeft: 8,
    fontSize: 14,
  },
  cash: {
    fontFamily: 'gadugi-normal',
    paddingVertical: 4,
    fontSize: 15,
    textAlign: 'right',
  },
});
