// used in create contest and winngs list screen

import React from 'react';
import tailwind from '../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import TeamFlag from '../atoms/team.flag';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  match_name: string;
  team_a: string;
  team_b: string;
  start_at: string;
}

export default function TeamsSection(props: PropTypes) {
  return (
    <View style={[tailwind('py-3 px-9')]}>
      <Text style={[ss.teamCode, {textAlign: 'center'}]}>
        {props.match_name}
      </Text>
      <View style={[ss.container]}>
        <Team1 team_a={props.team_a} />
        <Text style={[ss.teamCode]}>VS</Text>
        <Team2 team_b={props.team_b} />
      </View>
      <Text style={[tailwind('font-bold text-center text-dark-1 font-12')]}>
        {props.start_at} left
      </Text>
    </View>
  );
}

const Team1 = (props: any) => {
  return (
    <View style={[ss.frc]}>
      <TeamFlag teamCode={props.team_a} />
      <View style={[tailwind('px-3')]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#172338', '#254987']}
          style={[ss.codeC]}>
          <Text style={[ss.teamCode]}>{props.team_a}</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const Team2 = (props: any) => {
  return (
    <View style={[ss.frc]}>
      <View style={[tailwind('px-3')]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#872525', '#0D1320']}
          style={[ss.codeC]}>
          <Text style={[ss.teamCode]}>{props.team_b}</Text>
        </LinearGradient>
      </View>
      <TeamFlag teamCode={props.team_b} />
    </View>
  );
};

const ss = StyleSheet.create({
  frc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingTop: 12,
  },
  codeC: {
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  teamCode: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    textAlign: 'right',
    textTransform: 'uppercase',
  },
});
