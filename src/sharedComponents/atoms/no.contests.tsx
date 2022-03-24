// used in full contests and second innings contests list page
// active when no contests from api and no contests matched while filters applied

import React from 'react';
import {View, Image, ActivityIndicator, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import assets from '../../constants/assets_manifest';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';
import SecondaryButton from './secondaryButton';
import FiltersContests from '../molecules/filters.contests';
import LinkPrC from '../atoms/link.private.contest';
import CreateTeamButton from '../molecules/create.team.button';
import SiLink from '../atoms/si.link';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface PropTypes {
  loading: boolean;
  isFullMatch: boolean;
  contestFilters: Array<any>;
  filterOnPress(id: string): any;
  onPressCreateTeam(): void;
  onPressCreateContest(): void;
  noContentAction(): void;
  onPressSecondInnings(): void;
}

export default function NoContests(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[{height: '100%', backgroundColor: '#FFFFFF'}]}>
      <View style={[ss.troot]}>
        <FiltersContests
          filterOnPress={props.filterOnPress}
          contestFilters={props.contestFilters}
        />
        <LinkPrC onPressCreateContest={props.onPressCreateContest} />
      </View>
      {props.isFullMatch && (
        <SiLink onPressSecondInnings={props.onPressSecondInnings} />
      )}

      {props.loading ? (
        <ActivityIndicator size="large" color="#C5A858" />
      ) : (
        <View style={[ss.noContest]}>
          <Text style={[ss.txt, !dT && clr.td1]}>No Contests found</Text>
          <Text style={[ss.subText, !dT && clr.td1]}>
            There is no contest found try other filters
          </Text>
          <View style={[ss.image]}>
            <Image
              source={assets.cricketGame}
              style={[{height: 100}]}
              resizeMode="contain"
            />
          </View>

          <TouchableOpacity onPress={props.noContentAction} style={[ss.btn]}>
            <SecondaryButton text={'VIEW MATCHES'} />
          </TouchableOpacity>
        </View>
      )}
      <CreateTeamButton onPressCreateTeam={props.onPressCreateTeam} />
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
  noContest: {
    paddingVertical: 50,
    marginHorizontal: 36,
  },
  txt: {
    fontFamily: 'gadugi-bold',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subText: {
    fontFamily: 'gadugi-regular',
    fontSize: 12,
    color: '#FFFFFF',
    paddingVertical: 18,
    textAlign: 'center',
  },
  image: {
    alignItems: 'center',
  },
  btn: {
    marginVertical: 20,
  },
});
