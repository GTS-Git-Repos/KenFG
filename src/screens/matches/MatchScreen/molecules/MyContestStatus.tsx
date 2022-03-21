// used in my contests tab in match screen

import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {DownArrowIcon, TopArrowIcon} from '../../../../assets/newIcons';
import {
  CupIcon,
  DollarIcon,
  TickIcon,
  RankIcon,
} from '../../../../assets/newIcons';
import {FooterContest, TeamCode} from '../../../../sharedComponents';

interface PropTypes {
  contest_code:string,
  contest_id:string,
  contest_name:string,
  contest_team:Array<any>,
  entry_fee:string,
  onContestCardPress(contest_key: string): any;
}

interface TeamStatusTypes {
  name: string;
  code: string;
  points: number;
  rank: number;
  rising: boolean;
  winningZone: boolean;
}

export default function MyMatchContestCard(props: PropTypes) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => props.onContestCardPress('key')}
      style={[ss.root]}>
      {/* Top Section */}
      <TopSection />
      <FooterContest amount_letters={'N/A'} bonus={'N/A'} guaranteed={true} />
      <TeamStatus
        name={'Naveen'}
        code={'T2'}
        points={122}
        rank={22}
        winningZone={true}
        rising={true}
      />
      <TeamStatus
        name={'Naveen'}
        code={'T3'}
        points={122}
        rank={22}
        winningZone={false}
        rising={false}
      />
    </TouchableOpacity>
  );
}

const TopSection = () => {
  return (
    <View style={[ss.tsRoot]}>
      <View style={[ss.ts1]}>
        <Text style={[ss.title]}>Prize Pool</Text>
        <Text style={[ss.value]}>{'\u20B9'} 12.43 Lacks</Text>
      </View>

      <View style={[ss.ts2]}>
        <Text style={[ss.title]}>Spots</Text>
        <Text style={[ss.valueDull]}>16000</Text>
      </View>
      <View style={[ss.ts3]}>
        <Text style={[ss.title]}>Entry</Text>
        <Text style={[ss.valueDull]}>{'\u20B9'} 34</Text>
      </View>
    </View>
  );
};

const TeamStatus = (props: TeamStatusTypes) => {
  return (
    <TouchableOpacity style={[ss.teamRoot]}>
      <View style={[ss.tsRoot]}>
        <Text numberOfLines={1} style={[ss.tname]}>
          Naveen
        </Text>
        <TeamCode code={props.code} />
      </View>
      <View style={[ss.tsRoot]}>
        <Text style={[ss.pointTxt]}>{props.points}</Text>
        <View style={[ss.rankC]}>
          <RankIcon golden={props.rising} />
          <Text style={ss.rankTxt}>{props.rank}</Text>
          {props.rising ? <TopArrowIcon /> : <DownArrowIcon invert={false} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ss = StyleSheet.create({
  root: {
    backgroundColor: '#172338',
    marginVertical:8,
    marginHorizontal:12,
    borderRadius: 8,
  },
  tsRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  rankC: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#172338',
    borderColor:"#121D2E",
    borderTopWidth:2,
    borderRadius:4
  },
  ts1: {
    alignItems: 'flex-start',
    flex: 3,
  },
  ts2: {
    alignItems: 'center',
    flex: 3,
    paddingLeft: 16,
  },
  ts3: {
    alignItems: 'flex-end',

    flex: 3,
  },
  title: {
    fontFamily: 'gadugi-normal',
    fontSize: 14,
    color: '#8797B1',
  },
  value: {
    fontFamily: 'gadugi-bold',
    fontSize: 16,
    color: '#FFFFFF',
    paddingVertical: 4,
  },
  valueDull: {
    fontFamily: 'gadugi-bold',
    fontSize: 16,
    color: '#8797B1',
    paddingVertical: 4,
  },
  tname: {
    maxWidth: 150,
    fontFamily: 'gadugi-normal',
    textTransform: 'uppercase',
    fontSize: 14,
    color: '#FFFFFF',
    paddingRight: 16,
  },
  pointTxt: {
    fontFamily: 'gadugi-normal',
    fontSize: 14,
    color: '#FFFFFF',
    paddingRight: 16,
  },
  rankTxt: {
    fontFamily: 'gadugi-bold',
    fontSize: 15,
    color: '#FFFFFF',
    paddingLeft: 8,
    paddingRight: 12,
  },
});
