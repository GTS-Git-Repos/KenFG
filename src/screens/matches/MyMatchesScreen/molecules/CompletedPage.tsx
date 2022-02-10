import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, ScrollView} from 'react-native';
import MyMatchesCard from '../../../app/LobbyScreen/components/molecules/mymatch.card.lobby';
import NoContest from '../atoms/no.contest';

interface PropTypes {
  selectedTab: any;
  matches: any;
  matchesAPI: any;
  onPressMyMatchCard(match_key: string): any;
}

export default function CompletedPage(props: PropTypes) {
  if (!props.matchesAPI || props.selectedTab !== 2) {
    return <NoContest text={''} actionText={''} loading={true} />;
  }

  if (props.matchesAPI && (!props.matches || props.matches?.length === 0)) {
    return (
      <NoContest
        text={'You dont have any completed Contest'}
        actionText={'View Upcomming Matches'}
        loading={false}
      />
    );
  }

  return (
    <ScrollView style={[tailwind('m-3')]}>
      {props.matches.map((item: any) => {
        return (
          <View style={[tailwind('my-2')]} key={item.key}>
            <MyMatchesCard
              match_key={item.key}
              team_a={item.teams.a}
              team_b={item.teams.b}
              tournament_name={item.teams.tournament.short_name}
              start_time={item.start_at}
              teamCount={item.team_count}
              contestCount={item.contest_count}
              onPressMyMatchCard={props.onPressMyMatchCard}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}
