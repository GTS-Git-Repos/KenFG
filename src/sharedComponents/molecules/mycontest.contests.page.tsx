/**
 * used in full match contests and second innings contests screen
 */

import React from 'react';
import tailwind from '../../../tailwind';
import {View, FlatList, ScrollView} from 'react-native';
import NoDataContests from '../atoms/no.data.contest';
import JoinedContestCard from './joined.contest.card';
import {TeamFormationMutationType} from '../../types/match';
const log = console.log;

interface PropTypes {
  joined: any;
  status: any;
  pagerRef: any;
  selectedTab: number;
  index: number;
  teamPreviewPress(team_key: string): any;
  teamMutateAction(team_key: string, mutation: TeamFormationMutationType): any;
  onPressTeamSwitch(team_key: string, contest_key: string): void;
  onPressJoinedContest(contest_key: string): void;
}

export default function MyContestPage(props: PropTypes) {
  const isActiveTab = props.index === props.selectedTab;

  function noContentAction() {
    props.pagerRef.current?.setPage(0);
  }

  if (!props.joined) {
    return (
      <NoDataContests
        title={'The first move to get your fortune '}
        subtitle={'It’s your time where skills & knowledge meets action'}
        actionText={'VIEW CONTESTS'}
        noContentAction={noContentAction}
        loading={!isActiveTab}
        error={false}
        refetch={() => {
          console.log('n/a');
        }}
      />
    );
  }

  return (
    <FlatList
      contentContainerStyle={{margin: 12}}
      data={props.joined}
      renderItem={({item}) => {
        return (
          <JoinedContestCard
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
            onPressTeamSwitch={props.onPressTeamSwitch}
            onPressJoinedContest={props.onPressJoinedContest}
          />
        );
      }}
      keyExtractor={item => Math.random().toString()}
      //  keyExtractor={item => item.contestMeta.contest_code}
      ListFooterComponent={() => {
        return <View style={[tailwind('h-20')]}></View>;
      }}
    />
  );

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
            onPressTeamSwitch={props.onPressTeamSwitch}
            onPressJoinedContest={props.onPressJoinedContest}
          />
        );
      })}

      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}
