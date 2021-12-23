import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, ScrollView} from 'react-native';
import {TeamsCard} from '../../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teams?: any;
  status?: string;
}

export default function ContestLiveMyTeamsPage(props: PropTypes) {
  return (
    <ScrollView style={[tailwind('m-2')]}>
      <TeamsCard
        teams_key={'t1'}
        // key={item.teams_key}
        canModify={false}
      />

      <View style={[tailwind('h-10')]}></View>
    </ScrollView>
  );
}
