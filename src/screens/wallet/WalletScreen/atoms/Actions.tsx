import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  text: string;
  subText?: string;
  goto: string;
  dT: boolean;
}

export default function Actions(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(props.goto)}
      style={[ss.root, props.dT ? clr.bgd2 : clr.bgw]}>
      <View>
        <Text style={[ss.txt, props.dT ? clr.tw : clr.tdgray]}>
          {props.text}
        </Text>
        {props.subText && (
          <Text style={[ss.subTxt, props.dT ? clr.tgray : clr.tdgray]}>
            {props.subText}
          </Text>
        )}
      </View>

      <Icon
        name="chevron-forward"
        size={20}
        color={props.dT ? 'white' : 'gray'}
      />
    </TouchableOpacity>
  );
}

const ss = StyleSheet.create({
  root: {
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  txt: {
    fontFamily: 'gadugi-normal',
    fontSize: 15,
    paddingHorizontal: 12,
  },
  subTxt: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    paddingTop: 2,
    paddingHorizontal: 12,
  },
});
