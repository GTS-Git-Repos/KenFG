import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, ScrollView} from 'react-native';
import {MatchTeamCard} from '../../../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teams?: any;
  status?: string;
}

export default function ContestLiveMyTeamsPage(props: PropTypes) {
  return (
    <ScrollView style={[tailwind('m-2')]}>
      <MatchTeamCard teamCode={'T1'} />
      <MatchTeamCard teamCode={'T2'} />

      <View style={[tailwind('h-10')]}></View>
    </ScrollView>
  );
}
