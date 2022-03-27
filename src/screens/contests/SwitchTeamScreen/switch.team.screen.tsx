import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import tailwind from '../../../../tailwind';
import {
  TopBar,
  TeamsCard,
  RadioButton,
  BlockScreenByLoading,
} from '../../../sharedComponents';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';
import TeamSwitch from './components/TeamSwitch';

interface PropTypes {
  availableTeams: any;
  unavailableTeams: any;
  teams: any;
  old_team_key: any;
  selectedTeam: string;
  setSelectedTeam(team_key: string): any;
  alreadyJoinedTeams: Array<string>;
  onPressSwitchTeam(): any;
  switchTeam: any;
}

export default function SwitchTeamScreen(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[tailwind('h-full'), dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'Switch Teams'} />
      <Text
        style={[
          tailwind('font-regular p-3 font-14'),
          dT ? clr.bgd1 : clr.bgw,
          dT ? clr.tw : clr.td1,
        ]}>
        Choose a Team to Replace {props.old_team_key}
      </Text>
      <ScrollView>
        {props.availableTeams.map((item: any) => {
          return (
            <View
              key={item.team_key}
              style={[tailwind('flex-row ml-4 my-2 items-center')]}>
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
                  hasPoints={false}
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
        })}

        {props.unavailableTeams.length > 0 && (
          <View style={[tailwind('m-2')]}>
            <Text
              style={[tailwind('font-bold font-14'), dT ? clr.tw : clr.td1]}>
              Already Joined
            </Text>
          </View>
        )}
        {props.unavailableTeams.map((item: any) => {
          return (
            <View key={item.team_key} style={[tailwind('mx-4')]}>
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
                hasPoints={false}
              />
            </View>
          );
        })}
      </ScrollView>

      <TeamSwitch
        dT={dT}
        old={props.old_team_key}
        current={props.selectedTeam}
        onPressSwitchTeam={props.onPressSwitchTeam}
      />
      {props.switchTeam.isLoading && <BlockScreenByLoading />}
    </View>
  );
}
