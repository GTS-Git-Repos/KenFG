// used in full contests and second innings contests
// active when no contests from api and no contests matched while filters applied

import React from 'react';
import tailwind from '../../../tailwind';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';
import FiltersContests from '../molecules/filters.contests';
import LinkPrC from '../atoms/link.private.contest';
import CreateTeamButton from '../molecules/create.team.button';
import SiLink from '../atoms/si.link';

interface PropTypes {
  loadig: boolean;
}

export default function NoContests(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[tailwind('h-full')]}>
      <View style={[ss.root]}>
        <FiltersContests selectedFilter={null} />
        <LinkPrC />
      </View>
      <SiLink />
      {/* {props.loadig ? (
        <ActivityIndicator size="large" color="#C5A858" />
      ) : (
        <View>
          <Text
            style={[
              tailwind('font-regular text-white text-center font-13 py-10'),
            ]}>
            No Contest found
          </Text>
        </View>
      )} */}
      <CreateTeamButton onPressCreateTeam={() => {}} />
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: '100%',
  },
});
