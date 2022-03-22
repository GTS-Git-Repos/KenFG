// on Matcch screen

import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StatusIndicator} from '../../../../sharedComponents';
import MyContestStatus from './MyContestStatus';
import NoMatchContests from '../atoms/no.match.contests';

interface PropTypes {
  index: number;
  activeIndex: number;
  contests: Array<any> | null;
  loading: boolean;
  err: boolean;
  onContestCardPress(contest_key: string): any;
}

export default function MyContestPage(props: PropTypes) {
  const ACTIVE = props.index === props.activeIndex;

  if (!ACTIVE) {
    return <StatusIndicator loading={true} error={false} />;
  }

  if (!props.contests) {
    return <StatusIndicator loading={props.loading} error={props.err} />;
  }
  if (props.contests.length === 0) {
    return <NoMatchContests goTo2ndInnings={() => {}} goToLobby={() => {}} />;
  }

  return (
    <ScrollView style={[ss.root]}>
      {props.contests.map(item => {
        return (
          <MyContestStatus
            key={item.contest_code}
            onContestCardPress={props.onContestCardPress}
            contest_code={item.contest_code}
            contest_id={item.contest_id}
            contest_amount={'N/A'}
            contest_team={[]}
            entry_fee={item.entry_fee}
            spots={'1000'}
          />
        );
      })}

      <View style={[ss.space]}></View>
    </ScrollView>
  );
}

const ss = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 8,
  },
  space: {
    height: 20,
  },
});
