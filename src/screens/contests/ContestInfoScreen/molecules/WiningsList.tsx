import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, useWindowDimensions, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import HeaderWinningList from '../atoms/HeaderWinningList';
import WinningListRankings from '../atoms/WinningListRankings';
import CreateTeamButton from '../atoms/CreateTeamButton';
const log = console.log;

interface itemTypes {
  key: string;
  value: string;
}

interface PropTypes {
  data: Array<itemTypes>;
}

export default function WinningsList(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <ScrollView contentContainerStyle={{width: width}}>
      <HeaderWinningList />
      {props.data.map((item: any) => {
        return (
          <WinningListRankings
            key={item.key}
            rank={item.key}
            value={item.value}
          />
        );
      })}

      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}
