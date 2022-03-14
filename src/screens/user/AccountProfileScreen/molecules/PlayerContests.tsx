import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PlayedMatchType} from '../../../../types/user';
import assets from '../../../../constants/assets_manifest';
import {TeamFlag} from '../../../../sharedComponents';
import {} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {errorBox} from '../../../../utils/snakBars';

interface PropTypes {
  match_key: string;
  teams: TeamsType;
  match_result: string;
  h_points: number;
  teams_created: number;
  kenTeam: number;
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
  console.log(props);

  const navigation = useNavigation<any>();
  return (
    <View style={[tailwind('rounded bg-dark-3 mr-4')]}>
      <TeamSection
        team_a={props.teams.a}
        team_b={props.teams.b}
        match_result={props.match_result}
      />
      {/* points and team count */}
      <View
        style={[tailwind('flex-row items-center justify-between px-2 pb-2')]}>
        <View>
          <Text style={[ss.subTitle]}>Highest Point</Text>
          <Text style={[tailwind('font-regular text-secondary pt-2 font-13')]}>
            N/A (T1)
          </Text>
        </View>
        <View style={[tailwind('')]}>
          <Text style={[ss.subTitle]}>Teams Created</Text>
          <Text
            style={[
              tailwind('font-regular text-white pt-2 text-right font-13'),
            ]}>
            {props.teams_created}
          </Text>
        </View>
      </View>
      {/* footer */}
      <View
        style={[
          tailwind('flex-row bg-dark-3 py-2  px-2 items-center'),
          {backgroundColor: '#121D2E'},
        ]}>
        <Text style={[tailwind('font-regular text-light font-12')]}>
          Ken Team: {props.kenTeam || 'N/A'} pts
        </Text>
      </View>
    </View>
  );
}

const TeamSection = (props: any) => {
  return (
    <View style={[tailwind('flex-row justify-between pt-3 pb-1 px-2')]}>
      <View>
        <View style={[ss.frc]}>
          <View style={[tailwind('flex-col justify-center items-center')]}>
            <TeamFlag teamCode={props.team_a.code} />
            <Text style={[ss.teamCode]}>{props.team_a.code}</Text>
          </View>

          <Text style={[ss.vs]}>VS</Text>

          <View style={[tailwind('flex-col items-center')]}>
            <TeamFlag teamCode={props.team_b.code} />
            <Text style={[ss.teamCode]}>{props.team_b.code}</Text>
          </View>
        </View>
        <Text style={[ss.matchResult]}>{props.match_result || 'N/A'}</Text>
      </View>
      <View style={[tailwind('')]}>
        <View style={[tailwind('flex-row pl-12 items-center')]}>
          <Image
            resizeMode="contain"
            source={assets.winning_cup}
            style={{width: 17, height: 17}}
          />
          <Text
            style={[
              tailwind('font-regular text-white text-secondary pl-2 font-15'),
            ]}>
            YOU WON
          </Text>
        </View>
        <Text
          style={[tailwind('font-regular text-right py-1 text-white font-15')]}>
          {'\u20B9'} 0
        </Text>
      </View>
    </View>
  );
};

const ss = StyleSheet.create({
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
    color: '#8797B1',
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
});
