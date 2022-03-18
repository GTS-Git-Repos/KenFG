// used in match screen and contest match screen

import React from 'react';
// import tailwind from '../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import {TeamMeta, Score} from '../../types/match';

interface PropTypes {
  matchStatus: string;
  team_a: TeamMeta;
  team_b: TeamMeta;
  score_a: Array<Score>;
  score_b: Array<Score>;
}

interface TeamScore {
  score: Array<Score>;
}

/* 
  it is possible the match has multiple innings, ex) test matches and super over
  so score will be an array, if it's an empty array, the team is not yet bat, 
  the innings never be going to > 2
  first innings score if innings length is 2 
   */

export default function MatchStat(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <View style={[ss.teamAC]}>
        <Text style={[ss.tname]}>{props.team_a.name}</Text>
        <MatchScore score={props.score_a} />
      </View>

      {/* //FIXME: confirm the hard coding a value */}
      {props.matchStatus === 'completed' ? <Completed /> : <LiveIndicator />}

      {/* team b score */}
      <View style={[ss.teamBC]}>
        <Text style={[ss.tname]}>{props.team_b.name}</Text>
        <MatchScore score={props.score_b} />
      </View>
    </View>
  );
}

function MatchScore(props: TeamScore) {
  if (props.score.length === 0) {
    return (
      <View style={[ss.cInnings]}>
        <Text style={[ss.cinS]}>Yet to bat</Text>
        <Text style={[ss.scoreO]}></Text>
      </View>
    );
  }
  return (
    <>
      {props.score.length > 1 && (
        <CompletedInnings
          runs={props.score[0]?.runs}
          wickets={props.score[0]?.wickets}
          overs={props.score[0]?.overs}
        />
      )}
      {props.score.length > 1 ? (
        <View style={[ss.cInnings]}>
          <Text style={[ss.score]}>
            {props.score[1].runs}/{props.score[1].wickets}
          </Text>
          <Text style={[ss.scoreO]}>({props.score[1].overs})</Text>
        </View>
      ) : (
        <View style={[ss.cInnings]}>
          <Text style={[ss.score]}>
            {props.score[0].runs}/{props.score[0].wickets}
          </Text>
          <Text style={[ss.scoreO]}>({props.score[0].overs})</Text>
        </View>
      )}
    </>
  );
}

const LiveIndicator = () => {
  return (
    <View style={[ss.cIndtr]}>
      <View style={[ss.dot, {backgroundColor: '#EB5757'}]}></View>
      <Text style={[ss.liveTxt]}>LIVE</Text>
    </View>
  );
};

const Completed = () => {
  return (
    <View style={[ss.cIndtr]}>
      <View style={[ss.dot, {backgroundColor: '#006A4D'}]}></View>
      <Text style={[ss.completetxt]}>COMPLETED</Text>
    </View>
  );
};

const CompletedInnings = (props: any) => {
  return (
    <View style={[ss.cInnings]}>
      <Text style={[ss.cinS]}>
        {props.runs}/{props.wickets}{' '}
      </Text>
      <Text style={[ss.cinO]}>({props.overs})</Text>
    </View>
  );
};

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamAC: {
    flex: 4,
    alignItems: 'flex-start',
  },
  teamBC: {
    flex: 4,
    alignItems: 'flex-end',
  },
  tname: {
    fontFamily: 'gadugi-normal',
    color: '#FFFFFF',
    fontSize: 14,
  },
  cInnings: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
  cinS: {
    fontFamily: 'gadugi-normal',
    fontSize: 14,
    color: '#8797B1',
  },
  cinO: {
    fontFamily: 'gadugi-normal',
    fontSize: 9,
    color: '#8797B1',
  },
  score: {
    fontFamily: 'gadugi-bold',
    color: '#FFFFFF',
    fontSize: 20,
  },
  scoreO: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    color: '#8797B1',
    paddingLeft: 6,
  },
  cIndtr: {
    flex: 2.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    borderRadius: 999,
    width: 7,
    height: 7,
  },
  completetxt: {
    fontFamily: 'gadugi-normal',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    paddingHorizontal: 6,
    fontSize: 11,
  },
  liveTxt: {
    fontFamily: 'gadugi-bold',
    color: 'red',
    fontSize: 13,
    paddingHorizontal: 4,
  },
});
