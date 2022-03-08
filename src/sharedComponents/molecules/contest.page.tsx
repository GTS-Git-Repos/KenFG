/**
 * list of contests used in contests list screen and 2nd innings contest list screen
 */

import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';
import {useSelector} from 'react-redux';
import {FiltersContests} from '../../sharedComponents';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';
import LinkPrC from '../atoms/link.private.contest';
import SiLink from '../atoms/si.link';
import SortContests from '../atoms/sort.contests';
import ContestTitle from '../atoms/subtitle.contest.group';
import ContestCard from './contest.card.shared';

interface PropTypes {
  contests: Array<any>;
}

export default function ContestsPage(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[tailwind('')]}>
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
  );
}

const ss = StyleSheet.create({
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
