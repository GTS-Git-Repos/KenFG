import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectedMatch, userInfo} from '../../../store/selectors';
import ContestListScreen from './contest.list.screen';
import ContestScreenLoading from './atoms/screen.loading.contest';
import {TO_TEAMLIST, TO_TEAM_FORMATION} from '../../../constants/appContants';

import {
  useContestList,
  useJoinedContests,
  useGetTeams,
} from './contest.workers';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/core';
import {errorBox, infoBox} from '../../../utils/snakBars';

import PagerView from 'react-native-pager-view';
import {joinContestRemote} from '../../../remote/matchesRemote';
import {Alert} from 'react-native';
import {
  toTeamFormationWithAutoJoin,
  toTeamFormationWithMutation,
  toTeamPreview,
} from '../../../store/actions/navigationActions';
import {TeamFormationMutationType} from '../../../types/match';
import {checksBeforeJoinContest} from '../../../workers/contest.decision';

export default function ContestListHOC() {
  const navigation = useNavigation<any>();
  const pagerRef = useRef<PagerView>(null);
  const route = useRoute<any>();

  const [showJoinModal, setShowJoinModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const isScreenReady = useIsScreenReady();

  const [selectedTab, setSelectedTab] = useState(0);

  const {contests, contestsAPI}: any = useContestList(matchSelector.match_key);

  const {joined, joinedAPI, joinedAPILive, refetchJoinedContest} =
    useJoinedContests(matchSelector.match_key, userSelector.mobile);

  const {teams, teamsAPI, teamsAPILive, refetchTeams}: any = useGetTeams(
    matchSelector.match_key,
    userSelector.mobile,
  );

  useEffect(() => {
    console.log('Contest List Params -->', route.params);
    if (route.params) {
      const autoJoinParams = route?.params?.params;
      console.log(autoJoinParams);
      if (autoJoinParams?.autoJoin) {
        setShowJoinModal(true);
      }
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      // console.log('Focused');
      refetchTeams();
      refetchJoinedContest();
    }, []),
  );

  const teamPreviewPress = (team_key: any): any => {
    const team = teams.find((item: any) => item.team_key === team_key);
    if (team) {
      toTeamPreview(navigation, team);
      return;
    }
  };

  const teamMutateAction = (
    team_key: any,
    mutationObj: TeamFormationMutationType,
  ) => {
    const team = teams.find((item: any) => item.team_key === team_key);
    if (team) {
      toTeamFormationWithMutation(navigation, team_key, team, mutationObj);
    }
    return;
  };

  async function proceedToJoin(contest_key: string) {
    try {
      const contest = contests.find((item: any) => item.key === contest_key);
      if (!contest) throw 'no contests';
      if (contest) {
        const checkContestJoin = checksBeforeJoinContest(
          matchSelector.start_at,
          contest,
          joined,
          teams,
        );
        if (checkContestJoin.status) {
          toTeamFormationWithAutoJoin(
            navigation,
            checkContestJoin.to === TO_TEAMLIST,
            {
              contestKey: contest.key,
              entryAmount: contest.entry,
              maxTeam: contest.max_entry,
            },
          );
        } else {
          throw checkContestJoin.msg;
        }
        console.log('checkContestJoin', checkContestJoin);
      }

      return;
    } catch (err) {
      console.log('err', err);
    }
    return;
  }

  async function joinContestWithTeam() {
    try {
      const obj = {
        match_key: matchSelector.match_key,
        contest_key: matchSelector.joinContest.contestKey,
        team_key: route.params.params.team_key,
        player_key: userSelector.mobile,
      };
      setLoading(true);
      const response = await joinContestRemote(obj);
      setLoading(false);
      if (!response.status) {
        setLoading(false);
        errorBox(response.msg, 500);
        return;
      }
      setShowJoinModal(false);
      refetchJoinedContest();
      infoBox('Contest Succefully Joined', 500);
      // setTimeout(() => {
      //   pagerRef?.current?.setPage(1);
      // }, 500);
    } catch (err) {
      setLoading(false);
      Alert.alert('Failed to Join Contest', 'something went wrong');
    }
  }

  if (!isScreenReady || !contestsAPI) {
    return <ContestScreenLoading title={''} />;
  }

  return (
    <ContestListScreen
      contests={contests}
      contestsAPI={contestsAPI}
      joined={joined}
      joinedAPI={joinedAPI}
      joinedAPILive={joinedAPILive}
      teams={teams}
      teamsAPI={teamsAPI}
      teamsAPILive={teamsAPILive}
      teamPreviewPress={teamPreviewPress}
      teamMutateAction={teamMutateAction}
      pagerRef={pagerRef}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      to={route?.params?.params?.to}
      showJoinModal={showJoinModal}
      setShowJoinModal={setShowJoinModal}
      entryAmount={matchSelector?.joinContest?.entryAmount}
      joinContestWithTeam={joinContestWithTeam}
      loading={loading}
      setLoading={setLoading}
      proceedToJoin={proceedToJoin}
    />
  );
}
