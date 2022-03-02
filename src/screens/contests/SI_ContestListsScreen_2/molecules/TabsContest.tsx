import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const log = console.log;

interface PropTypes {
  selectedTab: number;
  onTabPressed(index: number): void;
  contest_count: any;
  teamsCount: any;
}

function TabsContest(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row bg-dark-3 items-center')]}>
      <TouchableOpacity
        onPress={() => props.onTabPressed(0)}
        style={[
          tailwind('w-4/12'),
          styles.tabContainer,
          props.selectedTab === 0 ? styles.activeTab : {},
        ]}>
        <Text
          style={[
            tailwind(
              `font-regular text-dark-1 text-center font-13 ${
                props.selectedTab === 0 ? 'font-bold text-white' : ''
              }`,
            ),
          ]}>
          Contests
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.onTabPressed(1)}
        style={[
          tailwind('w-4/12'),
          styles.tabContainer,
          props.selectedTab === 1 ? styles.activeTab : {},
        ]}>
        <Text
          style={[
            tailwind(
              `font-regular text-dark-1 text-center font-13 ${
                props.selectedTab === 1 ? 'font-bold text-white' : ''
              }`,
            ),
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
          styles.tabContainer,
          props.selectedTab === 2 ? styles.activeTab : {},
        ]}>
        <Text
          style={[
            tailwind(
              `font-regular text-dark-1 text-center font-13 ${
                props.selectedTab === 2 ? 'font-bold text-white' : ''
              }`,
            ),
          ]}>
          {props.teamsCount ? `My Teams (${props.teamsCount})` : 'My Teams'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default TabsContest;
