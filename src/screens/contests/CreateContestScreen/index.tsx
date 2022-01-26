import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {joinContestRequestAction} from '../../../store/actions/appActions';
import {selectedMatch, userInfo} from '../../../store/selectors';
import PrivateContestCreateScreen from './private.contest.create.screen';
import {useGetTeams, usePrivateContestList} from './private.contest.workers';

export default function PrivateContestCreateHOC() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);

  const {contests, contestsAPI, contestAPILive, refetch} =
    usePrivateContestList(matchSelector.match_key, userSelector.mobile);

  const {teams} = useGetTeams(matchSelector.match_key, userSelector.mobile);

  function onPressContestCard(contest_key:string){
    console.log(1); 
  }

  function onPressContestShare(contest_key:string){
    console.log(1); 
  }

  function joinRequestPrivateContest(contest_key: string) {
    try {
      Alert.alert('Need to change', 'joinRequestPrivateContest');
      return;
      const contest = contests.find((item: any) => item.pc_id === contest_key);
      if (!contests) {
        throw 'no contest found';
      }
      // initiate join contest action
      dispatch(
        joinContestRequestAction({
          contestKey: contest.pc_id,
          entryAmount: contest.entry_fee,
          maxTeam: contest.n_teams,
        }),
      );
      if (teams.length > 1) {
        navigation.navigate('TeamSelectionScreen');
      } else {
        navigation.navigate('TeamFormationScreen', {
          mutation: false,
        });
      }
    } catch (err) {
      console.log('joinRequestPrivateContest err ->', err);
    }
  }

  return (
    <PrivateContestCreateScreen
      contests={contests}
      contestsAPI={contestsAPI}
      contestAPILive={contestAPILive}
      refetch={refetch}
      joinRequestPrivateContest={joinRequestPrivateContest}
      wallet={userSelector.un_utilized}
      onPressContestCard={onPressContestCard}
      onPressContestShare={onPressContestShare}
    />
  );
}
