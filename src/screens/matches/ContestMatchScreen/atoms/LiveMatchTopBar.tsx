import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PointsIcon, BackIcon, HelpIcon} from '../../../../assets/newIcons';
import clr from '../../../../constants/colors';

interface Props {
  teams?: Array<string>;
  text: string;
  closeicon?: boolean;
  dT: boolean;
}

export default function LiveMatchTopBar(props: Props) {
  // console.log(
  //   tailwind('flex-row items-center bg-secondary justify-between px-4'),
  // );

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={[ss.root, props.dT ? clr.bgg : clr.bgRed]}>
      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity onPress={goBack}>
          <BackIcon dark={props.dT} />
        </TouchableOpacity>
        <View style={[tailwind('px-2')]}>
          <Text
            style={[tailwind('font-bold font-16'), props.dT ? clr.tg : clr.tw]}>
            {props.text}
          </Text>
          <Text
            style={[
              tailwind('font-regular font-11'),
              props.dT ? clr.tg : clr.tw,
            ]}>
            Entry {'\u20B9'} 0
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity style={[ss.link]}>
          <PointsIcon isDarkMode={props.dT} />
        </TouchableOpacity>
        <TouchableOpacity style={[ss.link]}>
          <HelpIcon isDarkMode={props.dT} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#d1b45a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  link: {
    paddingHorizontal: 5,
  },
});
