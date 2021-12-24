import React, {useEffect, useRef} from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
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
    tabName: 'Winnigs',
  },
  {
    key: 'leaderboard',
    tabName: 'Leaderboard',
  },
  {
    key: 'ScoreBoard',
    tabName: 'ScoreBoard',
  },
  {
    key: 'Commentry',
    tabName: 'Commentry',
  },
  {
    key: 'Stats',
    tabName: 'Stats',
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
}

const TabItem = ({tabName, active, index, onTabPressed}) => {
  return (
    <TouchableOpacity
      onPress={() => onTabPressed(index)}
      style={[{width: 120}, tailwind('')]}>
      <View style={[tailwind('pt-3')]}>
        <Text
          style={[
            tailwind(
              `text-center font-14 ${active ? 'font-bold' : 'font-regular'}`,
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
            style={[tailwind('mt-3 mx-3 rounded'), {height: 2}]}
            colors={['#816D2E', '#614920']}></LinearGradient>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    borderColor: '#202C43',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  activeBorder: {
    borderColor: '#BCA04D',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
});
