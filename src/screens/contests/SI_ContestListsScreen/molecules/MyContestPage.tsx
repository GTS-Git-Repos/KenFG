import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import {JoinedContestCard} from '../../../../sharedComponents';
import NoContent from '../atoms/no.content.contest';
import {TeamFormationMutationType} from '../../../../types/match';
const log = console.log;

interface PropTypes {
  joined: any;
  status: any;
  timeStamp: any;
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


  if (!props.status || !isActiveTab) {
    return (
      <ActivityIndicator
        style={[tailwind('mt-10')]}
        color="#d1b45a"
        size="large"
      />
    );
  }

 
  if (!props.status) {
    return <ActivityIndicator size={'large'} color="#d1b45a" />;
  }
  if (props.status && !props.joined) {
    return (
      <NoContent
        title={'The first move to get your fortune '}
        subtitle={'It’s your time where skills & knowledge meets action'}
        actionText={'VIEW CONTESTS'}
        noContentAction={noContentAction}
      />
    );
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
            onPressTeamSwitch={props.onPressTeamSwitch}
            onPressJoinedContest={props.onPressJoinedContest}
          />
        );
      })}

      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}
