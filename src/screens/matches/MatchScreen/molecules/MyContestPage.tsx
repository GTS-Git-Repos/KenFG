import React from 'react';
import tailwind from '../../../../../tailwind';
import {ScrollView} from 'react-native';
import MyContestStatus from './MyContestStatus';

interface PropTypes {
  onPressContest(): any;
}

export default function MyContestPage(props: PropTypes) {
  return (
    <ScrollView style={[tailwind(''), {flex: 1}]}>
      <MyContestStatus onPressContest={props.onPressContest} />
    </ScrollView>
  );
}
