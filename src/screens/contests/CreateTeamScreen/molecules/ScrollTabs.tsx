import React, {useEffect, useRef} from 'react';
import tailwind from '../../../../../tailwind';
import {FlatList, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import TabItem from '../atoms/TabItem';

interface PropTypes {
  activeIndex: number;
  rolesCountSelector: any;
  onTabPressed(index: number): any;
}

const DATA = [
  {
    tab_key: 'keeper',
    tab_name: 'WK',
  },
  {
    tab_key: 'batsman',
    tab_name: 'BAT',
  },
  {
    tab_key: 'all_rounder',
    tab_name: 'AR',
  },
  {
    tab_key: 'bowler',
    tab_name: 'BOWL',
  },
];

export default function ScrollTabs(props: PropTypes) {
  const flatListRef = useRef<any>();

  useEffect(() => {
    // console.log(flatListRef.current.scrollToIndex);
    flatListRef.current.scrollToIndex({index: props.activeIndex});
  }, [props.activeIndex]);

  return (
    <View style={[tailwind('bg-dark-3 px-4')]}>
      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[tailwind('bg-dark-3')]}
        data={DATA}
        renderItem={({item, index}) => {
          return (
            <TabItem
              key={item.tab_key}
              tabName={item.tab_name}
              count={props.rolesCountSelector[item.tab_key].occupaid}
              active={props.activeIndex === index}
              onTabPressed={props.onTabPressed}
              index={index}
            />
          );
        }}
      />
    </View>
  );
}
