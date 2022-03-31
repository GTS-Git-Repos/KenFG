// winnings list from private contest screen

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
import {useCountDown} from '../../../shared_hooks/app.hooks';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

const log = console.log;

export default function WinningsListScreen() {
  const dT = useSelector(getAppThemeSelector);

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
    <View style={[tailwind('h-full'), dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'Private Contest Winnings'} />

      <PrivateContestTeams
        team_a={match.team_a}
        team_b={match.team_b}
        start_at={countDown}
        match_name={match.name}
        dT={dT}
      />
      <View style={[tailwind('py-3'), dT ? clr.bgd2 : clr.bgw]}>
        <Text
          style={[
            tailwind('font-bold text-center font-14'),
            dT ? clr.tw : clr.td1,
          ]}>
          Winnings
        </Text>
      </View>
      <PriceDistributionSwitch action={() => {}} priceDist={false} />

      {DATA.map(item => {
        return (
          <WinningsListRank key={item.key} rank={item.key} value={item.value} />
        );
      })}
    </View>
  );
}
