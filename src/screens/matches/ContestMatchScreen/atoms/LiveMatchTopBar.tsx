import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PointsIcon, BackIcon, HelpIcon} from '../../../../assets/newIcons';

interface Props {
  teams?: Array<string>;
  text: string;
  closeicon?: boolean;
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
    <View style={[ss.root]}>
      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity onPress={goBack}>
          <BackIcon dark={true} />
        </TouchableOpacity>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-bold text-brown-4 font-16')]}>
            {props.text}
          </Text>
          <Text style={[tailwind('font-regular text-brown-4 font-11')]}>
            Entry {'\u20B9'} 0
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity style={[ss.link]}>
          <PointsIcon isDarkMode={true} />
        </TouchableOpacity>
        <TouchableOpacity style={[ss.link]}>
          <HelpIcon isDarkMode={true} />
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
