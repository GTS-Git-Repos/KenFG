import React, {useEffect, useRef} from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
  activeIndex: number;
  onTabPressed(index: number): any;
}

const DATA = [
  {
    key: 'winnings',
    tabName: 'My Contests (1)',
  },
  {
    key: 'leaderboard',
    tabName: 'My Teams(1)',
  },
  {
    key: 'Commentary',
    tabName: 'Commentary',
  },
  {
    key: 'ScoreBoard',
    tabName: 'ScoreBoard',
  },
];

export default function LiveMatchTabs(props: PropTypes) {
  const flatListRef = useRef<any>();

  useEffect(() => {
    // console.log(flatListRef.current.scrollToIndex);
    flatListRef.current.scrollToIndex({index: props.activeIndex});
  }, [props.activeIndex]);

  return (
    <FlatList
      ref={flatListRef}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={[tailwind('bg-dark-3')]}
      data={DATA}
      renderItem={({item, index}) => {
        return (
          <TabItem
            key={item.key}
            tabName={item.tabName}
            index={index}
            active={index === props.activeIndex}
            onTabPressed={props.onTabPressed}
          />
        );
      }}
    />
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[tailwind('bg-dark-3')]}>
      <TabItem
        tabName=""
        index={0}
        active={0 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
      <TabItem
        tabName=""
        index={1}
        active={1 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
      <TabItem
        tabName=""
        index={2}
        active={2 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
      <TabItem
        tabName=""
        index={3}
        active={3 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
    </ScrollView>
  );
}

const TabItem = ({tabName, active, index, onTabPressed}) => {
  return (
    <TouchableOpacity
      onPress={() => onTabPressed(index)}
      style={[{width: 140}, tailwind('')]}>
      <View style={[tailwind('pt-3')]}>
        <Text
          style={[
            tailwind(
              `${active ? 'font-bold' : 'font-regular'} text-center font-14`,
            ),
            {
              color: active ? '#FFFF' : '#8797B1',
              letterSpacing: 0.3,
            },
          ]}>
          {tabName}
        </Text>
        {active && (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={[tailwind('mx-3 mt-3 rounded'), {height: 2}]}
            colors={['#816D2E', '#614920']}></LinearGradient>
        )}
      </View>
    </TouchableOpacity>
  );
};
