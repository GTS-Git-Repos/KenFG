import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {MatchTeamCard} from '../../../../sharedComponents';

interface PropTypes {
  activeIndex: number;
  index: number;
  teams?: any;
  status?: string;
}

export default function MatchMyteamsPage(props: PropTypes) {
  const isTabActive = props.index === props.activeIndex;
  if (!isTabActive) {
    return null;
  }
  return (
    <View style={ss.root}>
      <ScrollView >
        <MatchTeamCard teamCode={'T1'} />
        <MatchTeamCard teamCode={'T2'} />
        <MatchTeamCard teamCode={'T2'} />
        <MatchTeamCard teamCode={'T2'} />
        <MatchTeamCard teamCode={'T2'} />
        <MatchTeamCard teamCode={'T2'} />

        <View style={[ss.space]}></View>
      </ScrollView>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    padding: 8,
    flex: 1,
    height: '100%',
  },
  space: {
    height: 40,
  },
});
