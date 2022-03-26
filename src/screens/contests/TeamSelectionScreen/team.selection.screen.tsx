import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import tailwind from '../../../../tailwind';
import {StackActions, useNavigation} from '@react-navigation/native';
import {
  ButtonComponent,
  BlockScreenByLoading,
  TeamsCard,
  TopBar,
  NewJoinContestModal,
} from '../../../sharedComponents';
import {updateJoinModalAction} from '../../../store/actions/appActions';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

import {
  isFullMatchSelector,
  joinModalSelector,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import {useDispatch, useSelector} from 'react-redux';
import Info from './atoms/info.teamselection';
import CheckBoxSelectedTeam from './molecules/checbox.selectteam';
import {errorBox, infoBox} from '../../../utils/snakBars';
import {joinContestRemote} from '../../../remote/matchesRemote';
import SubTitle from './atoms/subtitle.teamselection';
import {updateUserInfo} from '../../../store/actions/userAction';
import SelectAllTeams from './molecules/select.all.teams';
const log = console.log;

interface PropTypes {
  maxTeams: number;
  selectText: string;
  teams: any;
  showJoinModal: any;
  setShowJoinModal: any;
  availableTeams: any;
  unavailableTeams: any;
  // selectedTeams: Array<any>;
  userMeta: any;
  teamCardPress(team_key: string): any;
  // selectAllPress(): any;
}

export default function TeamSelectionScreen(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [choosenTeams, setChoosenTeams] = useState<Array<string>>([]);

  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const isFullMatch = useSelector(isFullMatchSelector);
  const joinModal: boolean = useSelector(joinModalSelector);

  function selectTeamAction(team_key: string) {
    try {
      if (parseInt(matchSelector.joinContest.maxTeam) < choosenTeams.length) {
        errorBox(
          `You can only select ${matchSelector.joinContest.maxTeam} Teams`,
          100,
        );
        return;
      }
      const clone: Array<string> = [...choosenTeams];
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

  function selectAllPress() {
    const maxTeam = parseInt(matchSelector.joinContest.maxTeam);
    const aTeamsKey = props.availableTeams.map((item: any) => item.team_key);
    // deselect all teams
    if (aTeamsKey.length === choosenTeams.length) {
      setChoosenTeams([]);
      return;
    }
    if (aTeamsKey > maxTeam) {
      errorBox(`You can only select ${maxTeam} Teams`, 0);
    } else {
      setChoosenTeams(aTeamsKey);
    }
    // console.log('aTeamsKey', aTeamsKey);
  }

  function proceedToJoinPress() {
    try {
      if (choosenTeams.length === 0) {
        errorBox('Please select any one of the Team', 0);
        return;
      }
      // console.log(obj);
      // show join modal state
      dispatch(updateJoinModalAction(true));
      // props.setShowJoinModal(true);
    } catch (err) {
      console.log('Error 43428456');
    }
  }

  function closeJoinModal() {
    dispatch(updateJoinModalAction(false));
  }

  async function joinContestWithTeam() {
    try {
      closeJoinModal();
      const obj = {
        match_key: matchSelector.match_key,
        contest_key: matchSelector.joinContest.contestKey,
        team_key: choosenTeams.join(','),
        player_key: userSelector.mobile,
      };
      setLoading(true);
      const response = await joinContestRemote(obj);
      console.log('response', response);
      // handle error
      if (!response.txn) {
        errorBox(response.msg, 500);
        return;
      }
      // refresh the wallet
      dispatch(updateUserInfo(userSelector.mobile));
      // go back to contest screen
      navigation.dispatch(StackActions.popToTop());

      // resetContestListNavigation(navigation, {
      //   match_key: matchSelector.match_key,
      //   to: 1,
      // });
      return;
    } catch (err) {
      setLoading(false);
      errorBox('faild to Join contest', 1000);
    }
  }

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Select Team'} />
      {/* <Info selectText={props.selectText} /> */}
      <View style={[tailwind('p-3 bg-dark-3')]}>
        <Text style={[tailwind('font-regular text-white font-14')]}>
          {props.selectText}
        </Text>
      </View>
      <SelectAllTeams
        disabled={props.maxTeams <= props.teams.length}
        maxTeams={props.maxTeams}
        availableTeams={props.availableTeams.length}
        selectTeams={choosenTeams.length}
        selectAllPress={selectAllPress}
      />
      <ScrollView>
        {props.availableTeams.map((item: any) => {
          return (
            <View
              key={item.team_key}
              style={[tailwind('flex-row mx-2 mt-2 items-center')]}>
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
                  navigateToPreview={props.teamCardPress}
                  mutateTeam={() => {}}
                />
              </View>
              <TouchableOpacity
                onPress={() => selectTeamAction(item.team_key)}
                style={[tailwind('flex-row justify-center'), {flex: 1}]}>
                <CheckBoxSelectedTeam
                  team_key={item.team_key}
                  choosenTeams={choosenTeams}
                />
              </TouchableOpacity>
            </View>
          );
        })}
        {props.unavailableTeams.length > 0 && (
          <SubTitle text={'Already Joined'} />
        )}

        <View style={[tailwind('px-4')]}>
          {props.unavailableTeams.map((item: any) => {
            return (
              <TouchableOpacity key={item.team_key}>
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
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <TouchableOpacity onPress={proceedToJoinPress} style={[tailwind('m-3')]}>
        <ButtonComponent text={'Join Contest'} />
      </TouchableOpacity>
      {/* new join contest modal */}
      <NewJoinContestModal
        showModal={joinModal}
        availableCash={props.userMeta.un_utilized}
        entryAmount={
          matchSelector.joinContest.entryAmount * choosenTeams.length
        }
        usableBonus={0}
        closeModal={closeJoinModal}
        joinContestWithTeam={joinContestWithTeam}
      />

      {loading && <BlockScreenByLoading />}
    </View>
  );
}

const ss = StyleSheet.create({
  root: {},
});
