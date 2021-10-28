import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
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
  {
    id: '4',
    name: 'Commentry',
    active: false,
  },
];

export default function Tabs(props: PropTypes) {
  return (
    <FlatList
      contentContainerStyle={[tailwind('')]}
      data={TABS}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={[
              tailwind(
                `flex flex-col items-center  bg-primary p-2 ${
                  item.active ? 'border-b-2 border-red-500' : ''
                }`,
              ),
              {height: 40, width: 120},
            ]}>
            <Text style={[tailwind('font-regular font-15 text-white')]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
}
