import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {
  ButtonComponent,
  BlockScreenByLoading,
  TeamsCard,
  TopBar,
  JoinContestModal,
} from '../../../sharedComponents';

import {selectedMatch, userInfo} from '../../../store/selectors';
import {useSelector} from 'react-redux';
import Info from './atoms/info.teamselection';
import CheckBoxSelectedTeam from './molecules/checbox.selectteam';
import {isTeamSelected} from './functions';
import {errorBox} from '../../../utils/snakBars';
import {joinContestRemote} from '../../../remote/matchesRemote';
import {resetContestListNavigation} from '../../../utils/resetNav';
import Modal from 'react-native-modal';
import {FlatList} from 'react-native-gesture-handler';
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
          100,
        );
        return;
      }
      const clone = [...choosenTeams];
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

  function proceedToJoinPress() {
    try {
      if (choosenTeams.length === 0) {
        errorBox('Please select any one of the Team');
        return;
      }
      // console.log(obj);
      props.setShowJoinModal(true);
    } catch (err) {
      console.log('proceedToJoinPress err -->', proceedToJoinPress);
    }
  }

  async function joinContestWithTeam() {
    try {
      const obj = {
        match_key: matchSelector.match_key,
        contest_key: matchSelector.joinContest.contestKey,
        team_key: choosenTeams.join(','),
        player_key: userSelector.mobile,
      };
      setLoading(true);

      const response = await joinContestRemote(obj);
      console.log('response', response);

      setLoading(false);
      if (!response.status) {
        setLoading(false);
        setTimeout(() => {
          errorBox(response.msg);
        }, 1000);
        return;
      }
      resetContestListNavigation(navigation, {
        match_key: matchSelector.match_key,
        to: 1,
      });
    } catch (err) {
      setLoading(false);
      Alert.alert('Failed to Join Contest', 'something went wrong');
    }
    console.log(1);
  }

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Select Team'} />
      <Info maxTeam={matchSelector.joinContest.maxTeam} />
      <FlatList
        data={props.teams}
        renderItem={({item}) => {
          return (
            <View
              key={item.team_key}
              style={[tailwind('flex-row mx-2 items-center')]}>
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
        }}
      />
      <TouchableOpacity onPress={proceedToJoinPress} style={[tailwind('m-3')]}>
        <ButtonComponent text={'Join Contest'} />
      </TouchableOpacity>
      <Modal
        isVisible={props.showJoinModal}
        animationInTiming={150}
        animationOutTiming={150}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        scrollHorizontal={true}>
        <JoinContestModal
          setShowJoinModal={props.setShowJoinModal}
          joinContestWithTeam={joinContestWithTeam}
          entryAmount={matchSelector?.joinContest?.entryAmount}
        />
      </Modal>

      {loading && <BlockScreenByLoading />}
    </View>
  );
}
