// goto button for private contest used in contest page that used in contest list screen

import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  onPressCreateContest(): void;
}

export default function LinkPrivateContest(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <TouchableOpacity onPress={props.onPressCreateContest} style={[ss.root]}>
      <Text style={[ss.text]}>Private Contest</Text>
      <Icon name="chevron-forward-outline" size={20} color="#d1b45a" />
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  root: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d1b45a',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#172338',
  },
  text: {
    fontFamily: 'gadugi-normal',
    color: '#C5A858',
    fontSize: 12,
    paddingRight: 2,
  },
});
