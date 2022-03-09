/**
 * list of contests used in contests list screen and 2nd innings contest list screen
 */

import React from 'react';
import tailwind from '../../../tailwind';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {FiltersContests, NoContests} from '../../sharedComponents';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';
import LinkPrC from '../atoms/link.private.contest';
import CreateTeamButton from './create.team.button';
import SiLink from '../atoms/si.link';
import SortContests from '../atoms/sort.contests';
import ContestTitle from '../atoms/subtitle.contest.group';
import ContestCard from './contest.card.shared';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  contests: Array<any>;
  onContestCardPress(contest_key: string): any;
}

export default function ContestsPage(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  const navigation = useNavigation();

  function noContentAction() {
    navigation.goBack();
  }

  // handle when no contests found
  if (props.contests?.length === 0) {
    return <NoContests loadig={false} />;
  }

  return (
    <View style={[ss.root]}>
      {/* Top section */}
      <View style={[ss.troot]}>
        <FiltersContests selectedFilter={null} />
        <LinkPrC />
      </View>
      <SiLink />
      <SortContests />
      {/* Contests list */}
      <ContestTitle
        title={'Mega contests'}
        subtitle={'Ready for One more match'}
      />
      <View style={[ss.pad12]}>
        {props.contests.map((item: any) => {
          return (
            <View key={item.key} style={[ss.mv8]}>
              <ContestCard
                onContestCardPress={props.onContestCardPress}
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
      <CreateTeamButton onPressCreateTeam={() => {}} />
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
  troot: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 4,
  },
  pad12: {
    paddingHorizontal: 12,
  },
  mv8: {
    marginVertical: 8,
  },
});
