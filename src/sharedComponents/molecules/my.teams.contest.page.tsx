import React from 'react';
import tailwind from '../../../tailwind';
import {View, ScrollView, Text, ActivityIndicator} from 'react-native';
import TeamsCard from './TeamsCard';
// import NOTeamsPage from '../atoms/no.teams.page';
import {TeamFormationMutationType} from '../../types/match';
import CreateTeamButtom from './create.team.button';

interface PropTypes {
  selectedTab: number;
  index: number;
  teams: any;
  status: string;
  live: string;
  timeStamp: any;
  pagerRef: any;
  teamMutateAction(team_key: string, mutation: TeamFormationMutationType): any;
  teamPreviewPress(team_key: any): any;
  onPressCreateTeam(): any;
}

export default function MyTeamsPage(props: PropTypes) {
  const isActiveTab = props.index === props.selectedTab;

  const navigateToPreview = (team_key: string) => {
    props.teamPreviewPress(team_key);
    return;
  };

  const mutateTeam = (team_key: string, edit: boolean, clone: boolean) => {
    const params = {
      edit: edit ? true : false,
      clone: clone ? true : false,
    };
    const team = props.teams.find((item: any) => item.team_key === team_key);
    if (team) {
      props.teamMutateAction(team_key, params);
    }
    return;
  };

  function noContentAction() {
    props.pagerRef?.current?.setPage(0);
  }

  if (!isActiveTab) {
    return (
      <ActivityIndicator
        style={[tailwind('mt-10')]}
        color="#d1b45a"
        size="large"
      />
    );
  }

  if (!props.status) {
    return <TeamsLoading />;
  }
  if (props.status && !props.teams) {
    return (
      <Text style={[tailwind('font-regular text-white font-15')]}>Null</Text>
      // <NOTeamsPage
      //   title={'The first move to get your fortune'}
      //   subtitle={'Create Your First Teams and meet action'}
      //   actionText={'VIEW CONTESTS'}
      //   noContentAction={noContentAction}
      //   onPressCreateTeam={props.onPressCreateTeam}
      // />
    );
  }
  return (
    <View style={[tailwind('h-full')]}>
      <ScrollView contentContainerStyle={[tailwind('m-3')]}>
        {props.live && <TeamsLoading />}
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
              navigateToPreview={navigateToPreview}
              mutateTeam={mutateTeam}
            />
          );
        })}
        <View style={[tailwind('h-20')]}></View>
      </ScrollView>
      <CreateTeamButtom onPressCreateTeam={props.onPressCreateTeam} />
    </View>
  );
}

const TeamsLoading = () => {
  return (
    <View style={[tailwind('flex-row items-center pb-2')]}>
      <Text style={[tailwind('font-regular text-white font-15 pr-3')]}>
        Refreshing...
      </Text>
      <ActivityIndicator color="white" size="small" />
    </View>
  );
};
