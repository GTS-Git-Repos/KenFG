import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import clr from '../../../../constants/colors';

interface PropTypes {
  clearRef: any;
  clearTeam(): any;
  dT: boolean;
}

export default function ClearTeamSheet(props: PropTypes) {
  const dT = props.dT;
  const dispatch = useDispatch();

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgw]}>
      <Text style={[ss.title, dT ? clr.tw : clr.td1]}>Clear Team ?</Text>
      <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>
        Are you sure you want to clear your player selections ?
      </Text>

      <TouchableOpacity
        onPress={props.clearTeam}
        style={[ss.btn, dT ? clr.bgGreen : clr.bgLgreen]}>
        <Text style={[ss.actxt, dT ? clr.td1 : clr.tw]}>Yes Clear</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.clearRef?.current?.close()}
        style={[ss.btn, dT ? clr.bgd2 : clr.bgGray]}>
        <Text style={[ss.actxt, dT ? clr.tw : clr.td1]}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'gadugi-bold',
    paddingBottom: 14,
    fontSize: 16,
    textAlign: 'center',
  },
  txt: {
    fontFamily: 'gadugi-normal',
    paddingBottom: 8,
    textAlign: 'center',
    fontSize: 13,
    marginHorizontal: 40,
  },
  btn: {
    flexGrow: 1,
    margin: 8,
    paddingVertical: 12,
    borderRadius: 4,
  },
  actxt: {
    fontFamily: 'gadugi-bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 12,
  },
});
