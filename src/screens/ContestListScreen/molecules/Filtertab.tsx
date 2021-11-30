import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, {Path} from 'react-native-svg';

interface PropTypes {
  text?: string;
}

const TABS = [
  {
    id: '1',
    name: 'All',
    active: true,
  },
  {
    id: '2',
    name: 'Head to Head',
    active: false,
  },
  {
    id: '3',
    name: 'Popular',
    active: false,
  },
  {
    id: '4',
    name: 'Premium',
    active: false,
  },
  {
    id: '5',
    name: 'Practise',
    active: false,
  },
  {
    id: '6',
    name: 'Win All',
    active: false,
  },
  {
    id: '7',
    name: '+5',
    active: false,
  },
];
const BUTTON_HEIGHT = 40;

export default function FilterTabs(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('flex-row flex-wrap py-3 px-4 items-center')]}>
        {TABS.map((item: any) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                tailwind('border border-gray-600 rounded-2xl py-1 m-1'),
                {paddingHorizontal: 10},
              ]}>
              <Text style={[tailwind('font-regular text-light font-13')]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* Sort by  */}
      <View
        style={[
          tailwind(
            'flex-row items-center justify-between border-t border-gray-600 border-b py-2 border-gray-500',
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
    </View>
  );
}

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
