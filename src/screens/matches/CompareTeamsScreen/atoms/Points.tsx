import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface PropTypes {
  sel_team_points: number;
  op_team_points: number;
}

export default function Points(props: PropTypes) {
  return (
    <>
      <Text style={[ss.pointsText]}>Total Points</Text>
      <View style={[ss.root]}>
        <View style={ss.root}>
          <Text style={[ss.point]}>223.43</Text>
          <View style={ss.ptsSeparator}></View>
          <Text style={[ss.point]}>223.43</Text>
        </View>
      </View>
    </>
  );
}

const ss = StyleSheet.create({
  pointsText: {
    color: '#8797B1',
    fontFamily: 'Gadugi-Normal',
    fontSize: 14,
    paddingVertical: 4,
    textAlign: 'center',
  },
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  point: {
    color: '#d1b45a',
    fontFamily: 'Gadugi-Bold',
    fontSize: 24,
  },
  ptsSeparator: {
    backgroundColor: '#A3A2A2',
    height: '80%',
    marginHorizontal: 8,
    width: 1,
  },
});
