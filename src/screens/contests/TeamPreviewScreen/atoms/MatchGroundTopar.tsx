import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  name: string;
}

export default function MatchGroundTopBar(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={[ss.btn]}>
        <Icon name="close" color={dT ? 'white' : 'black'} size={25} />
        <Text numberOfLines={1} style={[ss.name, dT ? clr.tw : clr.td1]}>
          {props.name}
        </Text>
      </TouchableOpacity>
      <View style={[dT ? ss.dBorder : ss.lBorder]}></View>
    </View>
  );
}

const ss = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  name: {
    fontFamily: 'gadugi-bold',
    textTransform: 'uppercase',
    paddingHorizontal: 12,
    fontSize: 15,
  },
  dBorder: {
    marginHorizontal: 12,
    marginBottom: 8,
    borderColor: 'rgba(31, 41, 55,1)',
  },
  lBorder: {
    marginHorizontal: 12,
    marginBottom: 8,
    borderColor: 'rgba(31, 41, 55,0.3)',
  },
});
