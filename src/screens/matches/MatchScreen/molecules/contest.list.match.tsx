// on Matcch screen

import React from 'react';
import {ScrollView} from 'react-native';
import MyContestStatus from './MyContestStatus';

interface PropTypes {
  index: number;
  activeIndex: number;
  contests: Array<any> | null;
  err: Array<any>;
  onContestCardPress(contest_key: string): any;
}

export default function MyContestPage(props: PropTypes) {
  return (
    <ScrollView style={[{flex: 1}]}>
      <MyContestStatus onContestCardPress={props.onContestCardPress} />
    </ScrollView>
  );
}
