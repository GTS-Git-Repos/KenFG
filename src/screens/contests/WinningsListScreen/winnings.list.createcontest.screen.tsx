import React from 'react';
import {View, Text} from 'react-native';
import {
  TopBar,
  PrivateContestTeams,
  WinningsListRank,
  PriceDistributionSwitch,
} from '../../../sharedComponents';
import tailwind from '../../../../tailwind';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectedMatch} from '../../../store/selectors';
import {useCountDown} from '../../../utils/customHoooks';

const log = console.log;

export default function WinningsListScreen() {
  const navigation = useNavigation();
  const match: any = useSelector(selectedMatch);
  const countDown = useCountDown(match.start_at, false);

  // console.log(match);

  const DATA = [
    {
      key: '1',
      value: '2,00,000',
    },
    {
      key: '2',
      value: '55,000',
    },
    {
      key: '3-21',
      value: '9,500',
    },
  ];

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Private Contest Winnings'} />

      <PrivateContestTeams
        team_a={match.team_a}
        team_b={match.team_b}
        start_at={countDown}
        match_name={match.name}
      />
      <View style={[tailwind('bg-dark-3 py-3')]}>
        <Text style={[tailwind('font-bold text-center text-white font-14')]}>
          Winnings
        </Text>
      </View>
      <PriceDistributionSwitch action={() => {}} />

      {DATA.map(item => {
        return (
          <WinningsListRank key={item.key} rank={item.key} value={item.value} />
        );
      })}
    </View>
  );
}
