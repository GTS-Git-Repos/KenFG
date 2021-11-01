import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, useWindowDimensions, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import HeaderWinningList from '../atoms/HeaderWinningList';
import WinningListRankings from '../atoms/WinningListRankings';
import {sampleLeaderBoardData} from '../../../constants/mockAPIData';
interface PropTypes {
  text?: string;
}

export default function WinningsList(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <ScrollView contentContainerStyle={{width: width}}>
      <HeaderWinningList />
      {sampleLeaderBoardData.map(item => {
        return (
          <WinningListRankings
            key={item.rank}
            rank={item.rank}
            amount={item.price}
          />
        );
      })}
    </ScrollView>
  );
}
