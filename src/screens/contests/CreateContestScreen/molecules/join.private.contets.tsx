import React, {useEffect, useState} from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, ActivityIndicator, Keyboard} from 'react-native';
import PrivateContestCard from './private.contest.card';
import {FlatList} from 'react-native-gesture-handler';
import SearchInput from './search.input.privatecontest';
import {useNavigation} from '@react-navigation/core';
import {searchContestsRemote} from '../../../../remote/matchesRemote';
import {useMutation} from 'react-query';
import {useSelector} from 'react-redux';
import {selectedMatch} from '../../../../store/selectors';
import {errorBox} from '../../../../utils/snakBars';
import {ContestCard} from '../../../../sharedComponents';

interface PropTypes {
  activeIndex: number;
  allContests: any;
  onPressContestCard(contest_key: string): any;
  proceedToJoin(contest_key: string): any;
}

export default function JoinedContestPage(props: PropTypes) {
  const [contest, setContest] = useState<any>(null);
  const [input, setInput] = useState<any>('164735274498765');

  function searchContest() {
    Keyboard.dismiss()
    const contest = props.allContests.find((item: any) => item.key === input);
    if (contest) {
      setContest(contest);
    } else {
      setContest(null);
      errorBox('No Contest found, Please check contest code', 0);
    }
  }

  return (
    <View style={[tailwind('p-2 h-full bg-dark')]}>
      <SearchInput
        input={input}
        setInput={setInput}
        searchContest={searchContest}
      />
      {contest && (
        <ContestCard
          contest_key={contest.key}
          match_key={contest.match_key}
          title={contest.title}
          filled_spots={contest.filled_spots}
          total_spots={contest.total_spots}
          occupaid_cent={0}
          entry={contest.entry}
          amount_letters={contest.prize.amount_letters}
          amount={contest.prize.amount}
          guaranteed={contest.guaranteed === 'yes'}
          max_entry={contest.max_entry}
          bonus={contest.bonus}
          is_practice={contest.is_practice}
          contest_type={contest.contest_type}
          onContestCardPress={props.onPressContestCard}
          proceedToJoin={props.proceedToJoin}
        />
      )}
    </View>
  );
}

// const searchContest = useMutation(searchContestsRemote, {
//   onSuccess: (data, variables, context) => {
//     console.log(data);
//   },
//   onError: error => {
//     errorBox('Failed, Please check your internet', 500);
//   },
// });

// useEffect(() => {
//   searchContest.mutate({
//     match_key: matchMeta.match_key,
//     input: input,
//   });
// }, [input]);

{
  /* <FlatList
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
/> */
}
