// used in full and 2 nd innings contests page tabs (Contest Page, and My Teams page)

import React from 'react';
import {PlusIcon} from '../../assets/newIcons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  onPressCreateTeam(): any;
}

export default function CreateTeamButtom(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={props.onPressCreateTeam}
        style={[ss.container]}>
        <View style={[ss.btn, dT ? clr.bgGreen : clr.bgLgreen]}>
          <PlusIcon />
          <Text style={[ss.txt, !dT && clr.tw]}>Create Team</Text>
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
    borderRadius: 4,
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
