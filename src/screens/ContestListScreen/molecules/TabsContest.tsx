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

const TABSWIDTH = Dimensions.get('window').width * 0.25;

export default function Tabs(props: PropTypes) {
  return (
    <View>
      <FlatList
        contentContainerStyle={[tailwind('')]}
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
                    `flex flex-col items-center bg-primary p-2 ${
                      props.selectedTab === index
                        ? 'border-b-2 border-white'
                        : ''
                    }`,
                  ),
                  {height: 40, width: 120},
                ]}>
                <Text style={[tailwind('font-regular font-15 text-white')]}>
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
