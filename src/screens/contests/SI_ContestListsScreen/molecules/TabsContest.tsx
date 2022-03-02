import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {appColorsSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

const log = console.log;

interface PropTypes {
  dT: boolean;
  selectedTab: number;
  onTabPressed(index: number): void;
  contest_count: any;
  teamsCount: any;
}

function TabsContest(props: PropTypes) {
  return (
    <View style={[ss.root, props.dT ? clr.bgd2 : clr.bgGray]}>
      {/* Contests option */}
      {props.dT ? (
        <TouchableOpacity
          onPress={() => props.onTabPressed(0)}
          style={[
            tailwind('w-4/12'),
            ss.tabContainer,
            props.selectedTab === 0 ? ss.dactiveTab : {},
          ]}>
          <Text
            style={[props.selectedTab === 0 ? ss.activeText : ss.text, clr.tw]}>
            Contests
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props.onTabPressed(0)}
          style={[
            tailwind('w-4/12'),
            ss.lTabContainer,
            props.selectedTab === 0 ? ss.lactiveTab : {},
          ]}>
          <Text
            style={[
              props.selectedTab === 0 ? ss.activeText : ss.text,
              props.selectedTab === 0 ? clr.tr : clr.tdgray,
            ]}>
            Contests
          </Text>
        </TouchableOpacity>
      )}
      {/* My Contest option */}
      {props.dT ? (
        <TouchableOpacity
          onPress={() => props.onTabPressed(1)}
          style={[
            tailwind('w-4/12'),
            ss.tabContainer,
            props.selectedTab === 1 ? ss.dactiveTab : {},
          ]}>
          <Text
            style={[props.selectedTab === 1 ? ss.activeText : ss.text, clr.tw]}>
            {props.contest_count
              ? `My Contests (${props.contest_count})`
              : 'My Contests'}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props.onTabPressed(1)}
          style={[
            tailwind('w-4/12'),
            ss.lTabContainer,
            props.selectedTab === 1 ? ss.lactiveTab : {},
          ]}>
          <Text
            style={[
              props.selectedTab === 1 ? ss.activeText : ss.text,
              props.selectedTab === 1 ? clr.tr : clr.tdgray,
            ]}>
            {props.contest_count
              ? `My Contests (${props.contest_count})`
              : 'My Contests'}
          </Text>
        </TouchableOpacity>
      )}
      {/* My Teams tab */}
      {props.dT ? (
        <TouchableOpacity
          onPress={() => props.onTabPressed(2)}
          style={[
            tailwind('w-4/12'),
            ss.tabContainer,
            props.selectedTab === 2 ? ss.dactiveTab : {},
          ]}>
          <Text
            style={[
              props.selectedTab === 2 ? ss.activeText : ss.text,
              props.selectedTab === 2 ? clr.tw : clr.tw,
            ]}>
            {props.teamsCount ? `My Teams (${props.teamsCount})` : 'My Teams'}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => props.onTabPressed(2)}
          style={[
            tailwind('w-4/12'),
            ss.lTabContainer,
            props.selectedTab === 2 && ss.lactiveTab,
          ]}>
          <Text
            style={[
              props.selectedTab === 2 ? ss.activeText : ss.text,
              props.selectedTab === 2 ? clr.tr : clr.tdgray,
            ]}>
            {props.teamsCount ? `My Teams (${props.teamsCount})` : 'My Teams'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tabContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#172338',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
  lTabContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: '#E0E0E0',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
  dactiveTab: {
    borderColor: '#BCA04D',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
  lactiveTab: {
    borderColor: '#9C181E',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
  text: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    textAlign: 'center',
  },
  activeText: {
    fontFamily: 'gadugi-bold',
    fontSize: 13,
    textAlign: 'center',
  },
});

export default TabsContest;
