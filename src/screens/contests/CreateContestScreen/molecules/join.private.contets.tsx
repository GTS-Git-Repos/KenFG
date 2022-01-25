import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, ActivityIndicator} from 'react-native';
import PrivateContestCard from './private.contest.card';
import {FlatList} from 'react-native-gesture-handler';
import {NoContentShared} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  activeIndex: number;
  contestsAPI: any;
  contestAPILive: any;
  contests: any;
  joinRequestPrivateContest(team_key: string): any;
}

export default function JoinedContestListPage(props: PropTypes) {
  const navigation = useNavigation();

  function actionPress() {
    navigation.goBack();
  }

  if (props.contestAPILive) {
    return <ActivityIndicator color="#d1b45a" size="large" />;
  }
  if (props.contestsAPI && (!props.contests || props.contests?.length === 0)) {
    return (
      <NoContentShared
        loading={false}
        text={'No Private contests are available'}
        subtext="There is no contests are available to join"
        actionText={'Back to Contests'}
        actionPress={actionPress}
      />
    );
  }
  console.log(JSON.stringify(props.contests));

  return (
    <View style={[tailwind('m-2 bg-dark')]}>
      <FlatList
        data={props.contests}
        renderItem={({item}) => {
          return (
            <PrivateContestCard
              contest_key={''}
              contest_name={item.title}
              hosted_by={item.host}
              entry_amount={item.entry}
              price_amount={item.prize.amount}
              amount_in_letters={item.prize.amount_letters}
              max_entry={item.max_entry}
              joinRequestPrivateContest={props.joinRequestPrivateContest}
            />
          );
        }}
        keyExtractor={item => item.key}
      />
    </View>
  );
}
