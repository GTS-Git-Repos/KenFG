import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, ScrollView} from 'react-native';
import MatchStatusCard from './match.status.myMatches';
import NoMatches from '../atoms/no.matches';

interface PropTypes {
  index: number;
  activeTabIndex: number;
  errorMsg: string;
  matches: any;
  loading: boolean;
  error: boolean;
  onPressMyMatchCard(match_key: string): any;
}

export default function MatchTabPage(props: PropTypes) {
  const LOADINGUI = props.loading || props.index !== props.activeTabIndex;
  const NOCONTESTUI =
    props.error || !props.matches || props?.matches?.length === 0;

  if (LOADINGUI) {
    return <NoMatches text={''} actionText={''} loading={true} />;
  }

  if (NOCONTESTUI) {
    return (
      <NoMatches
        text={props.errorMsg}
        actionText={'View Upcomming Matches'}
        loading={false}
      />
    );
  }

  return (
    <View>
      <ScrollView>
        {props.matches.map((item: any) => {
          return (
            <View style={[ss.space]} key={item.key}>
              <MatchStatusCard
                match_key={item.key}
                team_a={item.teams.a}
                team_b={item.teams.b}
                tournament_name={item.teams.tournament.short_name}
                start_time={item.start_at}
                teamCount={item.team_count}
                contestCount={item.contest_count}
                onPressMyMatchCard={props.onPressMyMatchCard}
                status={item.status}
                lineups={true}
                won={null}
              />
            </View>
          );
        })}
        <View style={[ss.wspace]}></View>
      </ScrollView>
    </View>
  );
}

const ss = StyleSheet.create({
  space: {
    marginVertical: 8,
    marginHorizontal: 12,
  },
  wspace: {
    height: 20,
  },
});
