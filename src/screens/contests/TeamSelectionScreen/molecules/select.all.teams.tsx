import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from '../../../../sharedComponents';
import clr from '../../../../constants/colors';

interface PropTypes {
  availableTeams: number;
  disabled: boolean;
  maxTeams: number;
  selectTeams: number;
  selectAllPress(): any;
  dT: boolean;
}

export default function SelectAllTeams(props: PropTypes) {
  const dT = props.dT;
  if (props.maxTeams < props.availableTeams) {
    return null;
  }
  return (
    <View style={[styles.root, dT ? clr.bgd2 : clr.bgw, !dT && styles.lRoot]}>
      <TouchableOpacity
        disabled={props.disabled}
        onPress={props.selectAllPress}
        style={[styles.linkBtn]}>
        <Text style={[styles.text, props.disabled && styles.disabledText]}>
          Select All
        </Text>
        <RadioButton selected={props.availableTeams === props.selectTeams} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    borderColor: 'rgba(31, 41, 55, 1)',
    borderTopWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
  },
  lRoot: {
    borderColor: 'rgba(31, 41, 55, 0.1)',
  },
  linkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Gadugi-Normal',
    fontSize: 15,
    paddingLeft: 8,
    paddingRight: 8,
  },
  disabledText: {
    color: '#6b7280',
  },
});
