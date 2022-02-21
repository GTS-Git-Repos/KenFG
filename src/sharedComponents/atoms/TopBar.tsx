/**
 * used in most of the screens as a top bar
 */
import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {appColorsSelector} from '../../store/selectors';
import {HelpIcon,BackIcon, PointsIcon} from '../../assets/newIcons';

interface Props {
  text: string;
  teams?: Array<string>;
  helpIcon?: boolean;
  ptsIcon?: boolean;
}

export default function TopBar(props: Props) {
 
  const clr = useSelector(appColorsSelector);

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={[ss.root]}>
      <View style={[tailwind('flex-row items-center')]}>
        <TouchableOpacity onPress={goBack}>
          <BackIcon dark={clr.dark} />
        </TouchableOpacity>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-bold text-brown-4 font-16')]}>
            {props.text}
          </Text>
          {/* teams appeared on team formation, cap selection screen */}
          {props.teams && (
            <Text
              style={[tailwind('font-bold text-brown-4 uppercase font-12')]}>
              {props.teams[0]} vs {props.teams[1]}
            </Text>
          )}
        </View>
      </View>
      {/* Links */}
      <View style={[tailwind('flex-row items-center')]}>
        {props.helpIcon && (
          <TouchableOpacity style={[ss.links]}>
            <HelpIcon isDarkMode={true} />
          </TouchableOpacity>
        )}
        {props.ptsIcon && (
          <TouchableOpacity style={[ss.links]}>
            <PointsIcon isDarkMode={true} />
          </TouchableOpacity>
        )}
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
    padding: 16,
  },
  links: {
    paddingHorizontal: 4,
  },
});
