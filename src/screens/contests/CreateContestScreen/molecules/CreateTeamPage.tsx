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

interface PropTypes {
  activeIndex: number;
  pagerRef: any;
  refetch(): any;
}

export default function CreateTeamPage(props: PropTypes) {
  const navigation = useNavigation();
  const userInfoSelector: any = useSelector(userInfo);
  const matchSelector: any = useSelector(selectedMatch);

  const [showWinngList, setShowWinngList] = useState(true);
  const [selectedSwitchTab, setSelectedSwitchTab] = useState(1);
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

  const createContest = async () => {
    if (
      !contestName ||
      !allowedTeams ||
      !entryFee ||
      !winners ||
      !perUserTeam
    ) {
      errorBox('All Fields are Required', 0);
      return;
    }
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
    setLoading(false);
    props.refetch();
    if (!response) {
      errorBox('Failed to Create Contest !!', 500);
      return;
    }

    infoBox('Contest Created',500);
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
          />
        </View>
        {loading && <BlockScreenByLoading />}
      </ScrollView>
      <TouchableOpacity onPress={createContest} style={[tailwind('m-4')]}>
        <ButtonComponent text={'CREATE & EARN Rs.2,00,000'} />
      </TouchableOpacity>
    </View>
  );
}
