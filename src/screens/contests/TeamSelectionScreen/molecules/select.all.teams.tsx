import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from '../../../../sharedComponents';

interface PropTypes {
  availableTeams: number;
  disabled: boolean;
  maxTeams: number;
  selectTeams: number;
  selectAllPress(): any;
}

export default function SelectAllTeams(props: PropTypes) {
  if (props.maxTeams < props.availableTeams) {
    return null;
  }
  return (
    <View style={[styles.root]}>
      <TouchableOpacity
        disabled={props.disabled}
        onPress={props.selectAllPress}
        style={[styles.linkBtn]}>
        <Text style={[styles.text, props.disabled && styles.disabledText]}>
          Select All ({props.maxTeams})
        </Text>
        <RadioButton selected={props.availableTeams === props.selectTeams} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#172338',
    borderColor: 'rgba(31, 41, 55, 1)',
    borderTopWidth: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12,
  },
  linkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'gadugi-normal',
    fontSize: 15,
    paddingLeft: 8,
    paddingRight: 8,
  },
  disabledText: {
    color: '#6b7280',
  },
});
