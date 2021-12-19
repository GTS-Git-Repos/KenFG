import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {RankIcon} from '../../../sharedComponents/';
import ContestWinningsInfo from '../atoms/ContestWinningsInfo';

interface PropTypes {
  index: number;
  activeIndex: number;
}

export default function WinningsPage(props: PropTypes) {
  if (props.index !== props.activeIndex) {
    return null;
  }
  return (
    <View style={[tailwind('')]}>
      <ContestWinningsInfo />
      <TableHeader />
      <TableData rank="1" prize="3,44,343" />
      <TableData rank="2" prize="2,44,343" />
      <TableData rank="3" prize="1,44,343" />
      <TableData rank="4" prize="44,343" />
      <TableData rank="5" prize="4,343" />
    </View>
  );
}

const TableHeader = () => {
  return (
    <View
      style={[
        tailwind(
          'px-4 py-2 bg-dark-3 flex-row items-center justify-between mb-0.5',
        ),
      ]}>
      <Text style={[tailwind('font-regular text-dark-1 font-14')]}>Rank</Text>
      <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
        Winnings
      </Text>
    </View>
  );
};

const TableData = (props: any) => {
  return (
    <View
      style={[
        tailwind(
          'px-4 py-2 bg-dark-3 flex-row items-center justify-between border-t-2 border-gray-700',
        ),
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        <RankIcon />
        <Text style={[tailwind('font-bold px-2 text-white font-14')]}>
          {props.rank}
        </Text>
      </View>

      <Text style={[tailwind('font-bold text-white font-14')]}>
        {props.prize}
      </Text>
    </View>
  );
};
