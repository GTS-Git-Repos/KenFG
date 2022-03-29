import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {RankIcon, WinningsListRank} from '../../../../sharedComponents';
import ContestWinningsInfo from '../atoms/ContestWinningsInfo';
import clr from '../../../../constants/colors';

interface PropTypes {
  index: number;
  activeIndex: number;
  dT: boolean;
}

export default function WinningsPage(props: PropTypes) {
  const dT = props.dT;
  if (props.index !== props.activeIndex) {
    return null;
  }
  return (
    <View>
      <ContestWinningsInfo dT={dT} />
      <TableHeader dT={dT} />
      <WinningsListRank rank={'1'} value={'1,333,33'} />
      <WinningsListRank rank={'2'} value={'76,332'} />
      <WinningsListRank rank={'3-6'} value={'5,333'} />
      <WinningsListRank rank={'6-15'} value={'333'} />
    </View>
  );
}

const TableHeader = (props: any) => {
  return (
    <View
      style={[
        tailwind('px-4 py-2  flex-row items-center justify-between'),
        props.dT ? ss.dRoot : ss.lRoot,
      ]}>
      <Text
        style={[
          tailwind('font-regular font-14'),
          props.dT ? clr.td2 : clr.td1,
        ]}>
        Rank
      </Text>
      <Text
        style={[
          tailwind('font-regular font-14'),
          props.dT ? clr.td2 : clr.td1,
        ]}>
        Winnings
      </Text>
    </View>
  );
};

const ss = StyleSheet.create({
  dRoot: {
    backgroundColor: '#0c1320',
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderBottomWidth: 1,
  },
  lRoot: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderBottomWidth: 1,
  },
});
