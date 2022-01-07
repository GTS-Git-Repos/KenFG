import React from 'react';
import tailwind from '../../../../tailwind';
import {View, ScrollView, Text} from 'react-native';
import {TeamsCard} from '../../../sharedComponents';

interface PropTypes {
  teams: any;
  status: string;
}

export default function MyTeamsPage(props: PropTypes) {
  if (props.status === 'loading') {
    return (
      <Text style={[tailwind('font-regular text-light font-15')]}>
        Loading...
      </Text>
    );
  }
  if (props.status === 'success' && !props.teams) {
    return (
      <Text
        style={[tailwind('font-regular text-center p-7 text-dark-1  font-15')]}>
        No Teams Found
      </Text>
    );
  }

  return (
    <ScrollView contentContainerStyle={[tailwind('m-3')]}>
      {props.teams.map((item: any, index: number) => {
        return (
          <TeamsCard
            key={item.team_key}
            team_key={item.team_key}
            canModify={true}
            current={false}
            keepers={item.keepers}
            batsman={item.batsman}
            all_rounder={item.all_rounder}
            bowler={item.bowler}
          />
        );
      })}
      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}
