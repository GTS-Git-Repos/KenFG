import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector} from 'react-redux';
import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
import {useNavigation} from '@react-navigation/native';
import {MoneySideIcon} from '../../../assets/newIcons';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';
import {TopBar} from '../../../sharedComponents';
import Links from './atoms/Links';

const log = console.log;

export default function MoreScreen() {
  const navigation = useNavigation();
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'More'} />
      <ScrollView>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={[ss.link, dT ? ss.dLink : ss.lLink]}>
          <MoneySideIcon dT={dT} />
          <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>
            Fair Play Guidlines
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={[ss.link, dT ? ss.dLink : ss.lLink]}>
          <MoneySideIcon dT={dT} />
          <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>
            Private Contest Code
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={[ss.link, dT ? ss.dLink : ss.lLink]}>
          <MoneySideIcon dT={dT} />
          <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={[ss.link, dT ? ss.dLink : ss.lLink]}>
          <MoneySideIcon dT={dT} />
          <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>Legality</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={[ss.link, dT ? ss.dLink : ss.lLink]}>
          <MoneySideIcon dT={dT} />
          <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>T&C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          style={[ss.link, dT ? ss.dLink : ss.lLink]}>
          <MoneySideIcon dT={dT} />
          <Text style={[ss.txt, dT ? clr.tw : clr.td1]}>Join with Us</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    height: '100%',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  dLink: {
    borderBottomColor: 'rgba(31, 41, 55,1)',
    borderBottomWidth: 1,
    backgroundColor: '#172338',
  },
  lLink: {
    borderBottomColor: 'rgba(31, 41, 55,0.1)',
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  txt: {
    fontFamily: 'Gadugi-Normal',
    paddingHorizontal: 12,
    fontSize: 13,
  },
});
