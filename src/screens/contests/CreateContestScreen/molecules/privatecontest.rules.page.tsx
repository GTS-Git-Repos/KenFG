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
}

export default function CreateTeamPage(props: PropTypes) {
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={[tailwind('my-2')]}></View>
      </ScrollView>
      <TouchableOpacity onPress={() => {}} style={[tailwind('m-4')]}>
        <ButtonComponent text={'Go Back'} />
      </TouchableOpacity>
    </View>
  );
}
