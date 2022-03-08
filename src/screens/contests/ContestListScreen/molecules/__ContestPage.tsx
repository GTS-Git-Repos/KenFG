// will be removed

import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, ActivityIndicator, ScrollView} from 'react-native';
import {ContestCard} from '../../../../sharedComponents';
import FilterTab from './Filtertab';
import ContestSubTitle from '../atoms/ContestSubTitle';
import NoContent from '../atoms/no.content.contest';
import {useNavigation} from '@react-navigation/core';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';
import CreateTeamButton from '../atoms/CreateTeamButton';
import {useSelector} from 'react-redux';
const log = console.log;

interface PropTypes {
  navigate(contest_key: string): any;
  status: string;
  data: any;
  selectedFilter: string;
  selectedTab: number;
  index: number;
  isFullMatch: boolean;
  setSelectedFilter(filter: string): any;
  proceedToJoin(contest_key: string): any;
  onPressSecondInnings(): any;
  onPressCreateTeam(): any;
  sortByOnPress(sortBy: any): any;
  sortStatus: any;
}

export default function ContestPage(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  const isActiveTab = props.index === props.selectedTab;

  const navigation = useNavigation();

  function noContentAction() {
    navigation.goBack();
  }

  if (!isActiveTab) {
    return null;
  }
  if (props.data === null) {
    return (
      <NoContent
        title={'Currently No Contests are open to Join'}
        subtitle={'Please try again later or check other matches'}
        actionText={'VIEW MATCHES'}
        noContentAction={noContentAction}
      />
    );
  }

  if (!(props.selectedFilter === 'All')) {
    return (
      <View style={[tailwind('h-full')]}>
        <FilterTab
          selectedFilter={props.selectedFilter}
          setSelectedFilter={props.setSelectedFilter}
          isFullMatch={props.isFullMatch}
          sortStatus={props.sortStatus}
          sortByOnPress={props.sortByOnPress}
          onPressSecondInnings={props.onPressSecondInnings}
        />
        <NoContent
          title={`Currently No Contests are in ${props.selectedFilter} Category`}
          subtitle={'try again later or check other Categories'}
          actionText={'VIEW MATCHES'}
          noContentAction={noContentAction}
        />
      </View>
    );
  }

  return (
    <View style={[tailwind('h-full')]}>
      <ScrollView>
        <FilterTab
          selectedFilter={props.selectedFilter}
          setSelectedFilter={props.setSelectedFilter}
          isFullMatch={props.isFullMatch}
          onPressSecondInnings={props.onPressSecondInnings}
          sortStatus={props.sortStatus}
          sortByOnPress={props.sortByOnPress}
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
                    filled_spots={item.filled_spots}
                    total_spots={item.total_spots}
                    occupaid_cent={item.occupaid_cent}
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
      {props.data && (
        <CreateTeamButton onPressCreateTeam={props.onPressCreateTeam} />
      )}
    </View>
  );
}
