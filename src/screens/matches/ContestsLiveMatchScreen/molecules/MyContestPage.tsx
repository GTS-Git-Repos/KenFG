import React, {useRef} from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import MyContestStatus from './MyContestStatus';
import {Modalize} from 'react-native-modalize';
import BreakupModalSheet from './BreakupModalSheet';
import {TouchableOpacity} from 'react-native-gesture-handler';
import WinningContest from './WinningContest';

interface PropTypes {
  text?: string;
}

export default function MyContestPage(props: PropTypes) {
  return (
    <ScrollView style={[tailwind(''), {flex: 1}]}>
      <MyContestStatus />
      {/* <WinningContest /> */}
    </ScrollView>
  );
}
