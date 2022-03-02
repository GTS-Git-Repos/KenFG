/**
 * used in
 * 1.  contest list screen
 * 2. contest info screen
 */

import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  WalletIcon,
  BackIcon,
  NotificationIcon,
  HelpIcon,
} from '../../assets/newIcons/';
import {useSelector} from 'react-redux';
import {appColorsSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  dT: boolean;
  title: string;
  subtitle: string;
  enableNotification(e: any): void;
  openWallet(e: any): void;
}

export default function TopBarContest(props: PropTypes) {
  const navigation = useNavigation();

  return (
    <View style={[ss.root, props.dT ? clr.bgg : clr.bgRed]}>
      <View style={[tailwind('flex flex-row items-center')]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon dark={props.dT} />
        </TouchableOpacity>

        <View style={[tailwind('px-4')]}>
          <Text
            numberOfLines={1}
            style={[ss.title, props.dT ? clr.tg : clr.tw]}>
            {props.title}
          </Text>
          <Text
            numberOfLines={1}
            style={[ss.subtitle, props.dT ? clr.tg : clr.tw]}>
            {props.subtitle}
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex flex-row items-center')]}>
        <TouchableOpacity onPress={() => {}} style={[ss.iconLink]}>
          <NotificationIcon
            sizeSmall={false}
            outline={true}
            isDark={props.dT}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.openWallet} style={[ss.iconLink]}>
          <WalletIcon darkColor={props.dT} outline={true} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={[ss.iconLink]}>
          <HelpIcon isDarkMode={props.dT} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  title: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    textTransform: 'uppercase',
    width: 100,
  },
  subtitle: {
    fontFamily: 'gadugi-normal',
    fontSize: 10,
    paddingTop: 4,
    width: 100,
  },
  iconLink: {
    paddingHorizontal: 4,
  },
});
