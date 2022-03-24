// contests filters
// used in contest list screen and second innings contests list screen

import React, {useState} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  contestFilters: Array<any>;
  filterOnPress(id: string): any;
}

function FiltersContests(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, {flex: 8}]}>
      {props.contestFilters.map((item: any) => {
        return dT ? (
          <TouchableOpacity
            onPress={() => props.filterOnPress(item.id)}
            key={item.id}
            style={[ss.item, item.selected && ss.dSelItem]}>
            <Text style={[ss.text, item.selected && ss.dSeltext]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => props.filterOnPress(item.id)}
            key={item.id}
            style={[ss.item, ss.lItem, item.selected && ss.lSelItem]}>
            <Text style={[ss.text, ss.ltext, item.selected && ss.lSeltext]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    flexWrap: 'wrap',
    marginVertical: 8,
    // backgroundColor: 'red',
  },
  item: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderColor: 'rgba(135, 151, 177, 0.3)',
    borderWidth: 1,
    margin: 2,
  },
  lItem: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(135, 151, 177, 0.3)',
  },
  dSelItem: {
    backgroundColor: '#d1b45a',
    borderColor: 'rgba(31, 41, 55, 0.1)',
  },
  lSelItem: {
    borderColor: '#9C181E',

    backgroundColor: '#9C181E',
  },
  text: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    color: '#FFFFFF',
  },
  dSeltext: {
    color: '#0D1320',
  },
  lSeltext: {
    color: '#FFFFFF',
  },
  ltext: {
    color: '#172338',
  },
});

const styles = StyleSheet.create({
  privateContestRoot: {
    borderColor: '#BCA04D',
    borderStyle: 'solid',
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 11,
  },
  lightModeBorder: {
    borderColor: '#9C181E',
    borderStyle: 'solid',
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 11,
  },
  siroot: {
    borderStyle: 'solid',
    borderRadius: 54,
    borderWidth: 1,
    paddingVertical: 4,
    marginVertical: 13,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  dBorder: {
    borderColor: '#BCA04D',
  },
  lBorder: {
    backgroundColor: '#FFFFFF',
    borderColor: '#9C181E',
  },
  selectedFilter: {
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderRadius: 16,
    borderWidth: 0,
    backgroundColor: '#D8C872',
  },
  SortBy: {},
  tabItem: {
    borderColor: 'rgba(31, 41, 55, 1)',
    borderRadius: 16,
    borderWidth: 1,
    margin: 2,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  privateContest: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
  },
  siText: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default FiltersContests;
// export default React.memo(FiltersContests);
