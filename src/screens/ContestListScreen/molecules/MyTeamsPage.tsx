import React from 'react';
import tailwind from '../../../../tailwind';
import {View, ScrollView, Text} from 'react-native';
import {TeamsCard} from '../../../sharedComponents';
import {log} from '../../../utils/logs';

interface PropTypes {
  teams: any;
  status: string;
}

export default function MyTeamsPage(props: PropTypes) {
  // log.info(props.teams)

  if (props.status === 'loading') {
    return <TeamsLoading />;
  }
  if (props.status === 'success' && !props.teams) {
    return <NoTeamsFound />;
  }
  return (
    <ScrollView contentContainerStyle={[tailwind('m-3')]}>
      {props.teams.map((item: any) => {
        return (
          <TeamsCard
            team_a={item.team_a}
            team_b={item.team_b}
            key={item.team_key}
            team_key={item.team_key}
            canModify={true}
            current={false}
            keepers={item.keepers}
            batsman={item.batsman}
            all_rounder={item.all_rounder}
            bowler={item.bowler}
            cap={item.cap}
            vc={item.vc}
          />
        );
      })}
      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}

const NoTeamsFound = () => {
  return (
    <Text
      style={[tailwind('font-regular text-center p-7 text-dark-1  font-15')]}>
      No Teams Found
    </Text>
  );
};

const TeamsLoading = () => {
  return (
    <Text
      style={[tailwind('font-regular text-center p-7 text-dark-1  font-15')]}>
      Please Wait ...
    </Text>
  );
};
