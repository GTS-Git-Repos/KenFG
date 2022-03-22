import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {StatusIndicator, TeamsCard} from '../../../../sharedComponents';

interface PropTypes {
  activeIndex: number;
  index: number;
  teams: Array<any> | null;
  status?: string;
  navigateToPreview(team_key: string): void;
}

export default function MatchMyteamsPage(props: PropTypes) {
  const isTabActive = props.index === props.activeIndex;

  if (!isTabActive) {
    return <StatusIndicator loading={true} error={false} />;
  }

  if (!props.teams) {
    return <StatusIndicator loading={true} error={false} />;
  }

  return (
    <View style={ss.root}>
      <ScrollView contentContainerStyle={ss.container}>
        {props.teams.map((item: any) => {
          return (
            <TeamsCard
              key={item.key}
              team_key={item.key}
              canModify={false}
              current={false}
              cap={item.cap}
              vc={item.vc}
              keepers={item.keeper}
              batsman={item.batsman}
              all_rounder={item.all_rounder}
              bowler={item.bowler}
              team_a={undefined}
              team_b={undefined}
              hasPoints={'N/A'}
              mutateTeam={() => {}}
              navigateToPreview={() => {}}
            />
          );
        })}

        <View style={[ss.space]}></View>
      </ScrollView>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
  },
  container: {
    padding: 12,
  },

  space: {
    height: 40,
  },
});
