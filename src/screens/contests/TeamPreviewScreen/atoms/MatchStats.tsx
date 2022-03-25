import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  team_a: TeamStatProps;
  team_b: TeamStatProps;
  credits_left: number;
  dT: boolean;
}

interface TeamStatProps {
  key: string;
  count: number;
}

export default function MatchStats(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root]}>
      <View style={[ss.sec1]}>
        <View style={[ss.secC]}>
          <Text style={[ss.count, dT ? clr.tw : clr.tr]}>
            {props.team_a.count + props.team_b.count}
          </Text>
          <Text style={[ss.total, dT ? clr.tw : clr.tdgray]}>/11</Text>
        </View>
        <Text style={[ss.txt, dT ? clr.td2 : clr.tdgray]}>Players</Text>
      </View>

      {/* team */}
      <View style={[ss.container]}>
        <TeamTag teamname={props.team_a.key} team1={true} />

        <Text style={[ss.tcount, dT ? clr.tw : clr.tr]}>
          {props.team_a.count} : {props.team_b.count}
        </Text>

        <TeamTag teamname={props.team_b.key} team1={false} />
      </View>

      <View style={[tailwind(''), {flex: 3}]}>
        <View style={[tailwind('py-1 px-2')]}>
          <Text style={[ss.crtxt]}>{props.credits_left}</Text>
        </View>
        <Text style={[ss.txt2, dT ? clr.td2 : clr.tdgray]}>Credits Left</Text>
      </View>
    </View>
  );
}

export const TeamTag = (props: any) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={props.team1 ? ['#172338', '#254987'] : ['#73221D', '#172338']}
      style={[tailwind('rounded-full px-2 py-1')]}>
      <Text
        allowFontScaling={true}
        adjustsFontSizeToFit={true}
        style={[ss.tname]}>
        {props.teamname}
      </Text>
    </LinearGradient>
  );
};

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  sec1: {
    flex: 3,
    alignItems: 'center',
  },
  secC: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  count: {
    fontFamily: 'gadugi-bold',
    fontSize: 20,
  },
  total: {
    fontFamily: 'gadugi-normal',
    paddingHorizontal: 6,
  },
  crtxt: {
    fontFamily: 'gadugi-bold',
    fontSize: 20,
    textAlign: 'right',
  },
  txt: {
    fontFamily: 'gadugi-normal',
    fontSize: 10,
    color: '#8797B1',
    textTransform: 'uppercase',
  },
  txt2: {
    fontFamily: 'gadugi-normal',
    fontSize: 10,
    color: '#8797B1',
    textTransform: 'uppercase',
    textAlign: 'right',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 6,
  },
  tcount: {
    fontFamily: 'gadugi-bold',
    fontSize: 20,
    paddingHorizontal: 4,
  },
  tname: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
