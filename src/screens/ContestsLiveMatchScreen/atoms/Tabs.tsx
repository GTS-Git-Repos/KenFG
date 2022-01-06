import React, {useEffect, useRef} from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from 'react-native';
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
    key: 'ScoreBoard',
    tabName: 'Commentary',
  },
  {
    key: 'Commentry',
    tabName: 'ScoreBoard',
  },
  {
    key: 'stats',
    tabName: 'Stats',
  },
];

export default function LiveMatchTabs(props: PropTypes) {
  const flatListRef = useRef<any>();
  const width = useWindowDimensions('window').width;

  const TABWIDTH = width / 3;

  useEffect(() => {
    // console.log(flatListRef.current.scrollToIndex);
    flatListRef.current.scrollToIndex({index: props.activeIndex});
  }, [props.activeIndex]);

  const getItemLayout = (data: any, index: any) => {
    return {length: data.length, offset: index * TABWIDTH, index};
  };

  return (
    <FlatList
      ref={flatListRef}
      horizontal
      getItemLayout={getItemLayout}
      showsHorizontalScrollIndicator={false}
      style={[tailwind('bg-dark-3 px-3')]}
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
}

const TabItem = ({tabName, active, index, onTabPressed}) => {
  const width = useWindowDimensions('window').width;

  const TABWIDTH = width / 3;
  return (
    <TouchableOpacity
      onPress={() => onTabPressed(index)}
      style={[{width: TABWIDTH}, tailwind('')]}>
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
            style={[tailwind('mt-3 rounded'), {height: 2}]}
            colors={['#816D2E', '#614920']}></LinearGradient>
        )}
      </View>
    </TouchableOpacity>
  );
};
