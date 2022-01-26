import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectedMatch, userInfo} from '../../../store/selectors';
import ContestListScreen from './contest.list.screen';
import ContestScreenLoading from './atoms/screen.loading.contest';
import {
  useContestList,
  useJoinedContests,
  useGetTeams,
} from './contest.workers';
import {useCountDown, useIsScreenReady} from '../../../utils/customHoooks';
import {useFocusEffect, useNavigation, useRoute} from '@react-navigation/core';
import {creditsLeftCalculator} from '../../../constructors/teams.constructor';
import {errorBox, infoBox} from '../../../utils/snakBars';
import {
  updateCaptain,
  updatePlayer,
  updateVCaptain,
} from '../../../store/actions/teamActions';
import PagerView from 'react-native-pager-view';
import {joinContestRemote} from '../../../remote/matchesRemote';
import {Alert} from 'react-native';

export default function ContestListHOC() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const pagerRef = useRef<PagerView>(null);
  const route = useRoute<any>();

  const [showJoinModal, setShowJoinModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const isScreenReady = useIsScreenReady();
  // const countDown = useCountDown(matchSelector.start_at, false);

  const [selectedTab, setSelectedTab] = useState(0);

  const {contests, contestsAPI} = useContestList(matchSelector.match_key);

  const {joined, joinedAPI, joinedAPILive, refetchJoinedContest} =
    useJoinedContests(matchSelector.match_key, userSelector.mobile);

  const {teams, teamsAPI, teamsAPILive, refetchTeams}: any = useGetTeams(
    matchSelector.match_key,
    userSelector.mobile,
  );

  useEffect(() => {
    console.log('Contest List Params -->', route.params);
    // console.log('matchSelector', matchSelector);

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
      // console.log(JSON.stringify(team));
      const credits_left = creditsLeftCalculator(
        team.keepers,
        team.batsman,
        team.all_rounder,
        team.bowler,
      );
      navigation.navigate('TeamPreviewScreen', {
        from: 1,
        keepers: team.keepers,
        batsman: team.batsman,
        all_rounder: team.all_rounder,
        bowler: team.bowler,
        cap_key: team.cap.key,
        vc_key: team.vc.key,
        team_a: team.team_a,
        team_b: team.team_b,
        credits_left: credits_left,
      });
    }
  };

  const teamMutateAction = (team_key: any) => {
    // console.log(team_key);
    try {
      const team = teams.find((item: any) => item.team_key === team_key);
      const players = [];
      if (team) {
        // console.log(team.keepers);
        players.push(...team.keepers);
        players.push(...team.all_rounder);
        players.push(...team.batsman);
        players.push(...team.bowler);
        // console.log(players);
        // return;
        dispatch(updatePlayer(players));
        dispatch(updateCaptain(team.cap.key));
        dispatch(updateVCaptain(team.vc.key));
        const params = {
          edit: true,
          clone: false,
          team_key: team_key,
        };
        // console.log(params);
        // return;
        navigation.navigate('TeamFormationScreen', {
          mutation: params,
        });
      }
    } catch (err) {
      console.log('teamMutateAction', err);
      errorBox('Failed to mutate');
    }
  };

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
      console.log('response', response);
      setLoading(false);
      if (!response.status) {
        setLoading(false);
        setTimeout(() => {
          errorBox(response.msg);
        }, 1000);
        return;
      }
      setShowJoinModal(false);
      infoBox('Contest Succefully Joined');
      refetchJoinedContest();
      // go contest page
      setTimeout(() => {
        pagerRef?.current?.setPage(1);
      }, 500);
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
    />
  );
}
