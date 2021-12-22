import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

interface PropTypes {
  selectedFilter: null | string;
  setSelectedFilter(filter: string): any;
}

const TABS = [
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
    id: '4',
    name: 'Fireball',
  },
  {
    id: '5',
    name: 'Hard',
  },
  {
    id: '6',
    name: 'Premium',
  },
  {
    id: '7',
    name: 'Pro',
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

export default function FilterTabs(props: PropTypes) {
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
                    tailwind('border border-gray-800 rounded-2xl py-0.5 m-0.5'),
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

          <View
            style={[
              tailwind('flex-row bg-dark-3 items-center'),
              {flex: 2},
              styles.privateContestRoot,
            ]}>
            <View
              style={[
                tailwind('flex-row items-center justify-center'),
                {flex: 8},
              ]}>
              <Text style={[tailwind('font-regular text-secondary font-12')]}>
                Private Contest
              </Text>
            </View>
            <View style={[tailwind(''), {flex: 2}]}>
              <Svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <Path
                  d="M1 13.0246L7.05 7.00059L1 0.975586"
                  stroke="#BCA04D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Defs>
                  <LinearGradient
                    id="paint0_linear_404_1442"
                    x1="1"
                    y1="7.00009"
                    x2="7.05"
                    y2="7.00009"
                    gradientUnits="userSpaceOnUse">
                    <Stop stop-color="#BCA04D" />
                    <Stop offset="0.526862" stop-color="#D8C872" />
                  </LinearGradient>
                </Defs>
              </Svg>
            </View>
          </View>
        </View>
        <SecondInnings />
      </View>
      {props.selectedFilter !== null ? <SortBy /> : null}
    </View>
  );
}

const SortBy = () => {
  return (
    <View
      style={[
        tailwind(
          'flex-row items-center justify-between border-t border-gray-800 border-b py-2',
        ),
      ]}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[tailwind('flex-row items-center px-6')]}>
        <ArrrowUp />
        <Text style={[tailwind('font-regular px-3 text-dark-1 font-13')]}>
          Total Price
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={[tailwind('flex-row items-center px-6')]}>
        <Text style={[tailwind('font-regular px-3 text-dark-1 font-13')]}>
          Entry Fee
        </Text>
        <ArrrowDown />
      </TouchableOpacity>
    </View>
  );
};

const ArrrowUp = () => {
  return (
    <Svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <Path
        d="M3.91599 0.979507L3.91599 13.0205"
        stroke="#C61D24"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6.832 3.90723L3.916 0.979227L1 3.90723"
        stroke="#C61D24"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const ArrrowDown = () => {
  return (
    <Svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <Path
        d="M4.08398 13.0202L4.08398 0.979248"
        stroke="#C61D24"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7 10.0925L4.084 13.0205L1.168 10.0925"
        stroke="#C61D24"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const SecondInnings = () => {
  return (
    <View style={[tailwind(''), styles.siroot]}>
      <Text style={[tailwind('font-regular text-center text-white font-12')]}>
        Second Innings
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  privateContestRoot: {
    borderColor: '#BCA04D',
    borderStyle: 'solid',
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 11,
  },
  siroot: {
    borderColor: '#BCA04D',
    borderStyle: 'solid',
    borderRadius: 54,
    borderWidth: 1,
    paddingVertical: 7,
    marginVertical: 13,
  },
  selectedFilter: {
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: '#D8C872',
  },
  SortBy:{
    
  }
});
