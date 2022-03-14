// my match card top Section on lobby screen, renders tournament name, team count and contest count
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import clr from '../../../../constants/colors';

const log = console.log;

interface PropTypes {
  tournament_name: string;
  teamCount: any;
  contestCount: any;
  dT: boolean;
}

function MyMatchesTopSection(props: PropTypes) {
  return (
    <View style={ss.root}>
      <View style={ss.wrapper}>
        <Text style={[ss.matchName, props.dT ? clr.td2 : clr.td1]}>
          {props.tournament_name}
        </Text>
        <View style={ss.metawrapper}>
          <Text style={[ss.metaValue, props.dT ? clr.tw : clr.td1]}>
            {props.teamCount}
          </Text>
          <Text style={[ss.metaText, props.dT ? clr.td2 : clr.td1]}>Team</Text>
          <Text style={[ss.metaSeperator, props.dT ? clr.td2 : clr.td1]}>
            |
          </Text>
          <Text style={[ss.metaValue, props.dT ? clr.tw : clr.td1]}>
            {props.contestCount}
          </Text>
          <Text style={[ss.metaText, props.dT ? clr.td2 : clr.td1]}>
            Contest
          </Text>
        </View>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    // borderBottomWidth: 1,
    // borderColor: 'rgba(31, 41, 55, 1)',
    marginHorizontal: 12,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  matchName: {
    fontFamily: 'gadugi-normal',
    fontSize: 11,
    textAlign: 'left',
  },
  metawrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'right',
  },
  metaValue: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingLeft: 2,
    paddingRight: 2,
  },
  metaText: {fontFamily: 'gadugi-normal', fontSize: 11},
  metaSeperator: {
    fontFamily: 'gadugi-normal',
    fontSize: 11,
    paddingLeft: 2,
    paddingRight: 2,
  },
});

export default React.memo(MyMatchesTopSection);
