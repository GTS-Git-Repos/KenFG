import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import CardMyContest from './CardMyContest';
import {ContestCard, JoinedContestCard} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/core';
import NoJoinedContest from '../atoms/no.joined.contest';
const log = console.log;

interface PropTypes {
  joined: any;
  status: any;
  teamPreviewPress(team_key: string): any;
  teamMutateAction(team_key: any): any;
}

export default function MyContestPage(props: PropTypes) {
  const navigation = useNavigation<any>();

  const navigate = () => {
    navigation.navigate('LiveMatchScreen');
  };

  if (!props.status) {
    return <ActivityIndicator size={'large'} color="#d1b45a" />;
  }
  if (props.status && !props.joined) {
    return <NoJoinedContest />;
  }

  return (
    <ScrollView contentContainerStyle={[tailwind('m-3')]}>
      {props.joined.map((item: any, index: number) => {
        return (
          <JoinedContestCard
            key={index}
            match_key={item.contestMeta.match_key}
            contest_key={item.contestMeta.contest_code}
            contest_name={item.contestMeta.contest_name}
            amount_in_letters={item.contestMeta.contest_name}
            entry_amount={item.contestMeta.entry_fee}
            max_entry={item.contestMeta.entry_fee}
            max_entry_reached={false}
            slots={0}
            filled_slots={0}
            bonus={''}
            isGuaranteed={false}
            contest_teams={item.contestMeta.contest_team}
            joinedTeam={item.joinedTeam}
            teamPreviewPress={props.teamPreviewPress}
            teamMutateAction={props.teamMutateAction}
          />
        );
      })}

      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}
