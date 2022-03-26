import React, {useEffect, useRef, useState} from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {
  BlockScreenByLoading,
  ButtonComponent,
} from '../../../../sharedComponents';
import CreateContestInput from './CreateContestInput';
import {useSelector} from 'react-redux';
import {selectedMatch, userInfo} from '../../../../store/selectors';
import {errorBox, infoBox} from '../../../../utils/snakBars';
import {createContestRemote} from '../../../../remote/matchesRemote';
import {toWiningsList} from '../../../../store/actions/navigationActions';
import {useNavigation} from '@react-navigation/core';
import {isValidNumber} from '../../../../utils/comman';
import clr from '../../../../constants/colors';

interface PropTypes {
  activeIndex: number;
  pagerRef: any;
  refetch(): any;
  dT:boolean
}

export default function createContestPage(props: PropTypes) {
  const navigation = useNavigation();
  const userInfoSelector: any = useSelector(userInfo);
  const matchSelector: any = useSelector(selectedMatch);

  const [loading, setLoading] = useState(false);

  const [contestName, setContestName] = useState('');
  const [allowedTeams, setAllowedTeams] = useState('');
  const [entryFee, setEntryFee] = useState('');
  const [winners, setWinners] = useState('');
  const [allowMultiple, setAllowMultiple] = useState(false);
  const [perUserTeam, setPerUserTeam] = useState('');

  useEffect(() => {
    if (userInfoSelector.name) {
      setContestName(userInfoSelector.name);
    }
  }, []);

  const navigateToWinningsList = () => {
    toWiningsList(navigation);
  };

  function validateInput() {
    const c_name = contestName.replace(/ /g, '');
    const c_teams = parseInt(allowedTeams);
    const c_fee = parseInt(entryFee);
    const c_winners = parseInt(winners);
    const c_max_team = parseInt(perUserTeam);
    if (!c_name) {
      errorBox('Invalid Contest Name !', 0);
      return;
    }
    if (!isValidNumber(c_teams)) {
      errorBox('Invalid Number of Teams !', 0);
      return;
    }
    if (!isValidNumber(c_fee)) {
      errorBox('Invalid Entry fee !', 0);
      return;
    }
    if (!isValidNumber(c_winners)) {
      errorBox('Invalid Winnings Count !', 0);
      return;
    }
    if (!isValidNumber(c_max_team)) {
      errorBox('Invalid Team per user data !', 0);
      return;
    }

    createContest();
  }

  const createContest = async () => {
    const obj = {
      player_key: userInfoSelector.mobile,
      mobile: userInfoSelector.mobile,
      match_key: matchSelector.match_key,
      pcname: contestName,
      n_teams: allowedTeams,
      entry_fee: entryFee,
      n_winners: winners,
      allow_multiple: allowMultiple ? 'y' : 'n',
      team_limit: perUserTeam,
    };
    setLoading(true);
    const response = await createContestRemote(obj);
    // refetch contest list API
    props.refetch();
    setLoading(false);
    props.refetch();
    if (!response) {
      errorBox('Failed to Create Contest !!', 500);
      return;
    }

    infoBox('Contest Created', 500);
    props.pagerRef?.current?.setPage(1);
  };

  return (
    <View style={[tailwind('h-full')]}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={[tailwind('my-2')]}>
          <CreateContestInput
            contestName={contestName}
            setContestName={setContestName}
            allowedTeams={allowedTeams}
            setAllowedTeams={setAllowedTeams}
            entryFee={entryFee}
            setEntryFee={setEntryFee}
            winners={winners}
            setWinners={setWinners}
            allowMultiple={allowMultiple}
            setAllowMultiple={setAllowMultiple}
            perUserTeam={perUserTeam}
            setPerUserTeam={setPerUserTeam}
            navigateToWinningsList={navigateToWinningsList}
            validateInput={validateInput}
            dT={props.dT}
          />
        </View>
        {loading && <BlockScreenByLoading />}
      </ScrollView>
      <TouchableOpacity onPress={validateInput} style={[tailwind('m-4')]}>
        <ButtonComponent text={'CREATE & EARN'} />
      </TouchableOpacity>
    </View>
  );
}
