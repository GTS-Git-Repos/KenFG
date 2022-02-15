import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const log = console.log;

interface PropTypes {
  tournament_name: string;
  teamCount: any;
  contestCount: any;
}

function MyMatchesTopSection(props: PropTypes) {
  return (
    <View style={styles.root}>
      <View style={styles.wrapper}>
        <Text style={styles.matchName}>{props.tournament_name}</Text>
        <View style={styles.metawrapper}>
          <Text style={[styles.metaValue]}>{props.teamCount}</Text>
          <Text style={styles.metaText}>Team</Text>
          <Text style={[styles.metaSeperator]}>|</Text>
          <Text style={[styles.metaValue]}>{props.contestCount}</Text>
          <Text style={styles.metaText}>Contest</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    borderColor: 'rgba(31, 41, 55, 1)',
    marginHorizontal: 12,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  matchName: {
    color: '#8797B1',
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
    color: '#f5feff',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingLeft: 2,
    paddingRight: 2,
  },
  metaText: {color: '#8797B1', fontFamily: 'gadugi-normal', fontSize: 11},
  metaSeperator: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 11,
    paddingLeft: 2,
    paddingRight: 2,
  },
});

export default React.memo(MyMatchesTopSection);
