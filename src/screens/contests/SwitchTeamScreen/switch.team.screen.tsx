import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {
  TopBar,
  TeamsCard,
  RadioButton,
  BlockScreenByLoading,
} from '../../../sharedComponents';
const log = console.log;

import TeamSwitch from './components/TeamSwitch';

interface PropTypes {
  teams: any;
  old_team_key: any;
  selectedTeam: string;
  setSelectedTeam(team_key: string): any;
  alreadyJoinedTeams: Array<string>;
  onPressSwitchTeam(): any;
  switchTeam: any;
}

export default function SwitchTeamScreen(props: PropTypes) {
  return (
    <View style={tailwind('bg-dark h-full')}>
      <TopBar text={'Switch Teams'} />
      <Text style={[tailwind('font-regular text-white p-3 bg-dark-3 font-14')]}>
        Choose a Team to Replace {props.old_team_key}
      </Text>

      <FlatList
        data={props.teams}
        renderItem={({item}) => {
          return (
            <View
              key={item.team_key}
              style={[tailwind('flex-row mx-2 items-center')]}>
              <View style={[tailwind(''), {flex: 8.5}]}>
                <TeamsCard
                  team_a={item.team_a}
                  team_b={item.team_b}
                  team_key={item.team_key}
                  canModify={false}
                  current={false}
                  keepers={item.keepers}
                  batsman={item.batsman}
                  all_rounder={item.all_rounder}
                  bowler={item.bowler}
                  cap={item.cap}
                  vc={item.vc}
                  navigateToPreview={() => {}}
                  mutateTeam={() => {}}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  props.setSelectedTeam(item.team_key);
                }}
                style={[tailwind('flex-row justify-center'), {flex: 1.5}]}>
                <RadioButton selected={props.selectedTeam === item.team_key} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TeamSwitch
        old={props.old_team_key}
        current={props.selectedTeam}
        onPressSwitchTeam={props.onPressSwitchTeam}
      />
      {props.switchTeam.isLoading && <BlockScreenByLoading />}
    </View>
  );
}
