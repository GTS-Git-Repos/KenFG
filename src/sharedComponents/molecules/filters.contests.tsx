// contests filters
// used in contest list screen and second innings contests list screen

import React, {useState} from 'react';
import tailwind from '../../../tailwind';
import {DownArrowIcon, TopArrowIcon} from '../../assets/newIcons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  selectedFilter: null | string;
  // setSelectedFilter(filter: string): any;
  // isFullMatch: boolean;
  // onPressSecondInnings(): any;
  // sortByOnPress(sortBy: any): any;
  // sortStatus: any;
}

const FILTERS = [
  {
    id: '1',
    name: 'All',
  },
  {
    id: '2',
    name: 'Free',
  },
  {
    id: '3',
    name: 'Mega',
  },
  {
    id: '6',
    name: 'Premium Pro',
  },
  {
    id: '4',
    name: 'Fireball',
  },
  {
    id: '5',
    name: 'Hot',
  },

  {
    id: '8',
    name: 'Fortune',
  },
  {
    id: '9',
    name: '+5',
  },
];

const MoreFilters = [
  {
    id: '10',
    name: 'Head to Head',
  },
  {
    id: '11',
    name: '5 in 1',
  },
  {
    id: '12',
    name: '3 in 1',
  },
  {
    id: '13',
    name: '10 in 5',
  },
  {
    id: '14',
    name: '2 in 1',
  },
];

function FiltersContests(props: PropTypes) {
  // console.log(tailwind('box flex-row items-center flex-wrap'));

  const [showMore, setShowMore] = useState(false);
  const clr = {};
  const navigation = useNavigation();

  return (
    <View style={[ss.root, {flex: 8}]}>
      {FILTERS.map((item: any) => {
        return (
          <TouchableOpacity key={item.id} style={[ss.item]}>
            <Text style={[ss.text]}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
  return (
    <View>
      <View style={[tailwind('pt-3 px-4')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <View
            style={[tailwind('flex-row flex-wrap items-center'), {flex: 8}]}>
            {TABS.map((item: any) => {
              return (
                <TouchableOpacity
                  onPress={() => props.setSelectedFilter(item.name)}
                  key={item.id}
                  style={[
                    styles.tabItem,
                    props.selectedFilter === item.name
                      ? styles.selectedFilter
                      : {},
                  ]}>
                  <Text
                    style={[
                      tailwind(
                        `font-regular font-12 ${
                          props.selectedFilter === item.name
                            ? 'text-brown-5'
                            : 'text-white'
                        }`,
                      ),
                    ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
            {props.selectedFilter === '+5'
              ? MoreFilters.map(item => {
                  return (
                    <TouchableOpacity
                      onPress={() => props.setSelectedFilter(item.name)}
                      key={item.id}
                      style={[
                        tailwind(
                          'border border-gray-800 rounded-2xl py-0.5 m-0.5',
                        ),
                        {paddingHorizontal: 10},
                        props.selectedFilter === item.name
                          ? styles.selectedFilter
                          : {},
                      ]}>
                      <Text
                        style={[
                          tailwind(
                            `font-regular font-12 ${
                              props.selectedFilter === item.name
                                ? 'text-brown-5'
                                : 'text-white'
                            }`,
                          ),
                        ]}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })
              : null}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateContestScreen')}
            style={[
              tailwind('flex-row items-center'),
              {flex: 2},
              clr.dark ? styles.privateContestRoot : styles.lightModeBorder,
            ]}>
            <View
              style={[
                tailwind('flex-row items-center justify-center'),
                {flex: 8},
              ]}>
              <Text
                style={[
                  styles.privateContest,
                  clr.dark ? clr.txt_1 : clr.txt_2,
                ]}>
                Private Contest
              </Text>
            </View>
            <View style={[tailwind(''), {flex: 2}]}>
              <Icon
                name="chevron-forward-outline"
                size={18}
                color="lightgray"
              />
            </View>
          </TouchableOpacity>
        </View>
        <SecondInnings onPressSecondInnings={props.onPressSecondInnings} />
      </View>
      <SortBy
        sortStatus={props.sortStatus}
        sortByOnPress={props.sortByOnPress}
      />
    </View>
  );
}

const SortBy = (props: any) => {
  return (
    <View
      style={[
        tailwind(
          'flex-row items-center justify-between border-t border-b border-gray-800  py-2',
        ),
      ]}>
      <TouchableOpacity
        onPress={() =>
          props.sortByOnPress({
            max_price: !props.sortStatus.max_price,
            max_entry: null,
          })
        }
        activeOpacity={0.5}
        style={[tailwind('flex-row items-center px-6')]}>
        {props.sortStatus.max_price === false && <TopArrowIcon />}
        {props.sortStatus.max_price === true && <DownArrowIcon />}

        <Text style={[tailwind('font-regular px-3 text-dark-1 font-13')]}>
          Total Price
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          props.sortByOnPress({
            max_price: null,
            max_entry: !props.sortStatus.max_entry,
          })
        }
        activeOpacity={0.5}
        style={[tailwind('flex-row items-center px-6')]}>
        <Text style={[tailwind('font-regular px-3 text-dark-1 font-13')]}>
          Entry Fee
        </Text>
        {props.sortStatus.max_entry === false && <TopArrowIcon />}
        {props.sortStatus.max_entry === true && <DownArrowIcon />}
      </TouchableOpacity>
    </View>
  );
};

const SecondInnings = (props: any) => {
  const clr = {};
  return (
    <TouchableOpacity
      onPress={() => props.onPressSecondInnings()}
      style={[styles.siroot, clr.dark ? styles.dBorder : styles.lBorder]}>
      <Text></Text>
      <Text style={[styles.siText, clr.txt_1]}>Second Innings Contests</Text>
      <Icon
        name="arrow-forward-outline"
        size={20}
        color={clr.dark ? 'white' : 'gray'}
      />
    </TouchableOpacity>
  );
};

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
    borderColor: 'rgba(31, 41, 55, 1)',
    borderWidth: 1,
    margin: 2,
  },
  text: {
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    color: '#FFFFFF',
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
