import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {appColorsSelector} from '../../../../store/selectors';
const log = console.log;

interface PropTypes {
  selectedTab: number;
  onTabPressed(index: number): void;
  contest_count: any;
  teamsCount: any;
}

function TabsContest(props: PropTypes) {
  const clr = useSelector(appColorsSelector);

  return (
    <View style={[ss.root, clr.bg]}>
      <TouchableOpacity
        onPress={() => props.onTabPressed(0)}
        style={[
          tailwind('w-4/12'),
          ss.tabContainer,
          props.selectedTab === 0 ? ss.activeTab : {},
        ]}>
        <Text
          style={[
            // clr.dark && props.selectedTab !== 0 ? clr.txt_1 : clr.txt_1,
            props.selectedTab === 0 ? ss.activeText : ss.text,
            clr.txt_1,
          ]}>
          Contests
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onTabPressed(1)}
        style={[
          tailwind('w-4/12'),
          ss.tabContainer,
          props.selectedTab === 1 ? ss.activeTab : {},
        ]}>
        <Text
          style={[
            props.selectedTab === 1 ? ss.activeText : ss.text,
            clr.txt_1,
          ]}>
          {props.contest_count
            ? `My Contests (${props.contest_count})`
            : 'My Contests'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onTabPressed(2)}
        style={[
          tailwind('w-4/12'),
          ss.tabContainer,
          props.selectedTab === 2 ? ss.activeTab : {},
        ]}>
        <Text
          style={[
            clr.dark ? clr.txt_1 : clr.txt_2,
            props.selectedTab === 2 ? ss.activeText : ss.text,
            clr.txt_1,
          ]}>
          {props.teamsCount ? `My Teams (${props.teamsCount})` : 'My Teams'}
        </Text>
      </TouchableOpacity>
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
  activeTab: {
    borderColor: '#BCA04D',
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
