import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, ScrollView} from 'react-native';
import {ContestCard} from '../../../sharedComponents';
import FilterTab from './Filtertab';
import {contestListsTypes} from '../../../types/api';
import ContestSubTitle from '../atoms/ContestSubTitle';
const log = console.log;
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Ellipse,
  Rect,
} from 'react-native-svg';

interface PropTypes {
  status: string;
  data: any;
}

export default function ContestPage(props: PropTypes) {
  if (props.status === 'loading') {
    return (
      <Text style={[tailwind('font-regular text-light font-15')]}>
        Loading...
      </Text>
    );
  }
  if (props.status === 'success' && !props.data) {
    return (
      <Text style={[tailwind('font-regular text-light font-15')]}>
        No Contests Found
      </Text>
    );
  }

  return (
    <ScrollView>
      <FilterTab />
      <ContestSubTitle
        title={'Big Winnings, Lower Entry!'}
        subText={'Ready for One more match'}
      />
      <View style={[tailwind('mx-2')]}>
        <View style={[tailwind('')]}>
          {props.data.map((item: contestListsTypes) => {
            return (
              <View
                key={item.key}
                style={[tailwind('my-2 border border-gray-800 rounded')]}>
                <ContestCard
                  contest_key={item.key}
                  match_key={item.match_key}
                  title={item.title}
                  total_joined={item.total_joined}
                  total_spots={item.total_spots}
                  entry={item.entry}
                  amount_letters={item.prize.amount_letters}
                  amount={item.prize.amount}
                  guaranteed={item.guaranteed === "yes"}
                  max_entry={item.max_entry}
                  bonus={item.bonus}
                  is_practice={item.is_practice}
                />
              </View>
            );
          })}
        </View>
      </View>
      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}
