import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  isFulMatchSelector,
  selectedMatch,
  userInfo,
} from '../../../store/selectors';
import {
  useGetTeams,
  useJoinedContests,
} from '../../../shared_hooks/contest.hooks';
import ContestInfoScreen from './contest.info.screen';
import {checksBeforeJoinContest} from '../../../workers/contest.decision';
import {toTeamFormationWithAutoJoin} from '../../../store/actions/navigationActions';
import {useNavigation} from '@react-navigation/core';

export default function ContestInfoHOC() {
  const navigation = useNavigation();
  const [current, setCurrent] = useState(false);

  const matchSelector: any = useSelector(selectedMatch);
  const userSelector: any = useSelector(userInfo);
  const isFullMatch: boolean = useSelector(isFulMatchSelector);

  const {joined, joinedAPI}: any = useJoinedContests(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  const {teams, teamsAPI}: any = useGetTeams(
    matchSelector.match_key,
    userSelector.mobile,
    isFullMatch,
  );

  function changePriceDistribution() {
    setCurrent(!current);
  }

  async function proceedToJoin(contest_key: string) {
    return;
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

  return (
    <ContestInfoScreen
      priceDist={current}
      changePriceDistribution={changePriceDistribution}
    />
  );
}
