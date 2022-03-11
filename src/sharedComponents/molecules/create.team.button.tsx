// used in full and 2 nd innings contests page tabs (Contest Page, and My Teams page)

import React from 'react';
import {PlusIcon} from '../../assets/newIcons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface PropTypes {
  onPressCreateTeam(): any;
}

export default function CreateTeamButtom(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.onPressCreateTeam}
        style={[ss.container]}>
        <View style={[ss.btn]}>
          <PlusIcon />
          <Text style={[ss.txt]}>Create Team</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  container: {
    borderRadius: 4,
    flexDirection: 'row',
    margin: 8,
    width: '50%',
    backgroundColor: '#00513B',
  },
  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 12,
  },
  txt: {
    color: '#f5feff',
    fontFamily: 'gadugi-bold',
    fontSize: 12,
    paddingHorizontal: 8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
