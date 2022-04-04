/**
 * used in most of the screens as a top bar
 */
import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {HelpIcon, BackIcon, PointsIcon} from '../../assets/newIcons';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface Props {
  text: string;
  teams?: Array<string>;
  helpIcon?: boolean;
  ptsIcon?: boolean;
}

export default function TopBar(props: Props) {
  const dT = useSelector(getAppThemeSelector);

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={[ss.root, dT ? clr.bgg : clr.bgRed]}>
      <View style={[ss.frc]}>
        <TouchableOpacity onPress={goBack}>
          <BackIcon dark={dT} />
        </TouchableOpacity>
        <View style={[ss.space]}>
          <Text style={[ss.title, dT ? clr.tg : clr.tw]}>{props.text}</Text>
          {/* teams appeared on team formation, cap selection screen */}
          {props.teams && (
            <Text style={[ss.teamTxt, dT ? clr.tg : clr.tw]}>
              {props.teams[0]} vs {props.teams[1]}
            </Text>
          )}
        </View>
      </View>
      {/* Links */}
      <View style={[ss.frc]}>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  frc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  links: {
    paddingHorizontal: 4,
  },
  space: {
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 16,
  },
  teamTxt: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
    textTransform: 'uppercase',
  },
});
