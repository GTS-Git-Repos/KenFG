import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, ScrollView} from 'react-native';
import {ContestCard, FullScreenLoading} from '../../../../sharedComponents';
import FilterTab from './Filtertab';
import {contestListsTypes} from '../../../../types/api';
import ContestSubTitle from '../atoms/ContestSubTitle';
import LoadFailedContestList from '../atoms/loadfailed.contestlist';
const log = console.log;

interface PropTypes {
  navigate(contest_key: string): any;
  status: string;
  data: any;
  selectedFilter: null | string;
  setSelectedFilter(filter: string): any;
  proceedToJoin(contest_key: string): any;
}

export default function ContestPage(props: PropTypes) {
  if (!props.status) {
    return (
      <Text style={[tailwind('font-regular text-white font-15')]}>
        Loading...
      </Text>
    );
  }
  if (props.status && !props.data) {
    return (
      <Text style={[tailwind('font-regular text-white font-15')]}>
        No Contest Found
      </Text>
    );
  }

  return (
    <ScrollView>
      <FilterTab
        selectedFilter={props.selectedFilter}
        setSelectedFilter={props.setSelectedFilter}
      />
      <ContestSubTitle
        title={'Mega Contest'}
        subText={'Ready for One more match'}
      />
      <View style={[tailwind('px-3')]}>
        <View style={[tailwind('')]}>
          {props.data.map((item: any) => {
            return (
              <View key={item.key} style={[tailwind('my-2')]}>
                <ContestCard
                  navigate={props.navigate}
                  contest_key={item.key}
                  match_key={item.match_key}
                  title={item.title}
                  total_joined={30}
                  total_spots={item.total_spots}
                  entry={item.entry}
                  amount_letters={item.prize.amount_letters}
                  amount={item.prize.amount}
                  guaranteed={item.guaranteed === 'yes'}
                  max_entry={item.max_entry}
                  bonus={item.bonus}
                  is_practice={item.is_practice}
                  contest_type={item.contest_type}
                  proceedToJoin={props.proceedToJoin}
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