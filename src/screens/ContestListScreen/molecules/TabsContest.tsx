import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, FlatList, Dimensions, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
const log = console.log;

interface PropTypes {
  selectedTab: number;
  onTabPressed(index: number): void;
  text?: string;
}

const TABS = [
  {
    id: '1',
    name: 'Contests',
    active: true,
  },
  {
    id: '2',
    name: 'My Contests',
    active: false,
  },
  {
    id: '3',
    name: 'My Teams',
    active: false,
  },
];

const TABSWIDTH = Dimensions.get('window').width / 3;

export default function Tabs(props: PropTypes) {
  return (
    <View style={[tailwind('')]}>
      <FlatList
        contentContainerStyle={[tailwind('pt-1 bg-dark-2')]}
        data={TABS}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => props.onTabPressed(index)}
                style={[
                  tailwind(
                    `flex flex-col items-center w-6/12 bg-dark-2 pt-3 pb-2 ${
                      props.selectedTab === index
                        ? 'border-b-2 border-yellow-300'
                        : ''
                    }`,
                  ),
                  {height: 40, width: TABSWIDTH},
                ]}>
                <Text
                  style={[
                    tailwind(
                      `font-13 ${
                        props.selectedTab === index
                          ? 'text-light font-bold'
                          : 'font-regular text-dark-1 '
                      }`,
                    ),
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={item => item.id}
      />
      {/* <View
        style={[
          tailwind('h-1 bg-secondary'),
          {width: 120},
          // {
          //   transform: [{translateX: 240}],
          // },
        ]}></View> */}
    </View>
  );
}
