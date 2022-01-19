import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, ActivityIndicator} from 'react-native';
import PrivateContestCard from './private.contest.card';
import {FlatList} from 'react-native-gesture-handler';

interface PropTypes {
  activeIndex: number;
  contestsAPI: any;
  contestAPILive: any;
  contests: any;
  joinRequestPrivateContest(team_key: string): any;
}

export default function JoinedContestListPage(props: PropTypes) {
  if (props.contestAPILive) {
    return <ActivityIndicator color="#d1b45a" size="large" />;
  }
  if (props.contestsAPI && (!props.contests || props.contests?.length === 0)) {
    return (
      <Text
        style={[tailwind('font-regular p-3 text-center text-dark-1 font-15')]}>
        No Private Contests Found
      </Text>
    );
  }

  return (
    <View style={[tailwind('m-2 bg-dark')]}>
      <FlatList
        data={props.contests}
        renderItem={({item}) => {
          return (
            <PrivateContestCard
              key={item.pc_id}
              contest_key={item.pc_id}
              contest_name={item.pcname}
              hosted_by={item.pcname}
              amount={'10 Lakhs'}
              entry={item.entry_fee}
              max_team={10}
              joinRequestPrivateContest={props.joinRequestPrivateContest}
            />
          );
        }}
        keyExtractor={item => item.pc_id}
      />
    </View>
  );
}
