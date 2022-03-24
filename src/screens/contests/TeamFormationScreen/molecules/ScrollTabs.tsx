import React, {useEffect, useRef} from 'react';
import tailwind from '../../../../../tailwind';
import {FlatList, StyleSheet, View} from 'react-native';
import TabItem from '../atoms/TabItem';
import clr from '../../../../constants/colors';

interface PropTypes {
  activeIndex: number;
  rolesCountSelector: any;
  onTabPressed(index: number): any;
  dT: boolean;
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

function ScrollTabs(props: PropTypes) {
  const dT = props.dT;
  const flatListRef = useRef<any>();

  useEffect(() => {
    flatListRef.current.scrollToIndex({index: props.activeIndex});
  }, [props.activeIndex]);

  return (
    <View style={[ss.root, dT ? clr.bgd2 : clr.bgw]}>
      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
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
              dT={dT}
            />
          );
        }}
      />
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
  },
});

export default React.memo(ScrollTabs);
