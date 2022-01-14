import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {
  ButtonComponent,
  BlockScreenByLoading,
  TeamsCard,
  TopBar,
} from '../../../sharedComponents';

import {selectedMatch, userInfo} from '../../../store/selectors';
import {useSelector} from 'react-redux';
import Info from './atoms/info.teamselection';
import CheckBoxSelectedTeam from './molecules/checbox.selectteam';
import {isTeamSelected} from './functions';
import {errorBox} from '../../../utils/snakBars';
import {joinContestRemote} from '../../../remote/matchesRemote';
import {resetContestListNavigation} from '../../../utils/resetNav';

const log = console.log;

export default function TeamSelectionScreen(props: any) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [choosenTeams, setChoosenTeams] = useState([]);

  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);

  function selectTeamAction(team_key: any) {
    try {
      if (parseInt(matchSelector.joinContest.maxTeam) < choosenTeams.length) {
        errorBox(
          `You can only select ${matchSelector.joinContest.maxTeam} Teams`,
        );
        return;
      }
      let clone = [...choosenTeams];
      const isExist = clone.findIndex((item: any) => item === team_key);
      if (isExist === -1) {
        clone.push(team_key);
        setChoosenTeams(clone);
      } else {
        clone.splice(isExist, 1);
        setChoosenTeams(clone);
      }
    } catch (err) {
      return false;
    }
  }

  async function joinContestWithTeam() {
    try {
      if (choosenTeams.length === 0) {
        errorBox('Please select any one of the Team');
        return;
      }
      const obj = {
        match_key: matchSelector.match_key,
        contest_key: matchSelector.joinContest.contestKey,
        team_key: choosenTeams,
        player_key: userSelector.mobile,
      };
      setLoading(true);
      const response = await joinContestRemote(obj);
      setLoading(false);
      if (response) {
        resetContestListNavigation(navigation, {});
      } else {
        setTimeout(() => {
          errorBox('Please select any one of the Team');
        }, 1000);
      }
    } catch (err) {
      setLoading(false);
    }
    console.log(1);
  }

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Select Team'} />
      <Info maxTeam={matchSelector.joinContest.maxTeam} />
      <ScrollView contentContainerStyle={[tailwind('m-3')]}>
        {props.teams.map((item: any) => {
          return (
            <View
              key={item.team_key}
              style={[tailwind('flex-row items-center')]}>
              <View style={[tailwind(''), {flex: 9}]}>
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
                onPress={() => selectTeamAction(item.team_key)}
                style={[tailwind('flex-row justify-center'), {flex: 1}]}>
                <CheckBoxSelectedTeam
                  selected={isTeamSelected(choosenTeams, item.team_key)}
                />
              </TouchableOpacity>
            </View>
          );
        })}

        <View style={[tailwind('h-20')]}></View>
      </ScrollView>
      <TouchableOpacity onPress={joinContestWithTeam} style={[tailwind('m-3')]}>
        <ButtonComponent text={'Join Contest'} />
      </TouchableOpacity>
      {loading && <BlockScreenByLoading />}
    </View>
  );
}
