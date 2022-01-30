import React, {useEffect, useState} from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, ActivityIndicator} from 'react-native';
import PrivateContestCard from './private.contest.card';
import {FlatList} from 'react-native-gesture-handler';
import SearchInput from './search.input.privatecontest';
import {NoContentShared} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/core';
import {searchContestsRemote} from '../../../../remote/matchesRemote';
import {useMutation} from 'react-query';
import {useSelector} from 'react-redux';
import {selectedMatch} from '../../../../store/selectors';
import {errorBox} from '../../../../utils/snakBars';

interface PropTypes {
  activeIndex: number;
  contestsAPI: any;
  contestAPILive: any;
  contests: any;
  onPressContestCard(contest_key: string): any;
  joinContest(team_key: string): any;
}

export default function JoinedContestListPage(props: PropTypes) {
  const navigation = useNavigation();
  const matchMeta: any = useSelector(selectedMatch);

  // console.log(matchMeta);

  const [contests, setContests] = useState([]);
  const [input, setInput] = useState<any>('');

  const searchContest = useMutation(searchContestsRemote, {
    onSuccess: (data, variables, context) => {
      console.log(data);
    },
    onError: error => {
      errorBox('Failed, Please check your internet', 500);
    },
  });

  useEffect(() => {
    if (props.contests) {
      setContests(props.contests);
    }
  }, [props.contests]);

  useEffect(() => {
    searchContest.mutate({
      match_key: matchMeta.match_key,
      input: input,
    });
  }, [input]);

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
  // console.log(JSON.stringify(props.contests));

  return (
    <View style={[tailwind('p-2 h-full bg-dark')]}>
      <SearchInput input={input} setInput={setInput} />
      <FlatList
        data={contests}
        renderItem={({item}) => {
          return (
            <PrivateContestCard
              contest_key={item.key}
              contest_name={item.title}
              hosted_by={item.host}
              entry_amount={item.entry}
              price_amount={item.prize.amount}
              amount_in_letters={item.prize.amount_letters}
              max_entry={item.max_entry}
              joinContest={props.joinContest}
              onPressContestCard={props.onPressContestCard}
            />
          );
        }}
        keyExtractor={item => item.key}
      />
    </View>
  );
}
