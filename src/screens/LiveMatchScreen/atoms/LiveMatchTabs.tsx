import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
  activeIndex: number;
  onTabPressed(index: number): any;
}

export default function LiveMatchTabs(props: PropTypes) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[tailwind('bg-dark-3')]}>
      <TabItem
        tabName="Leaderboard"
        index={0}
        active={0 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
      <TabItem
        tabName="Scrollboard"
        index={1}
        active={1 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
      <TabItem
        tabName="Commentry"
        index={2}
        active={2 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
      <TabItem
        tabName="Stats"
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
      style={[{width: 120}, tailwind('')]}>
      <View style={[tailwind('pt-3')]}>
        <Text
          style={[
            tailwind(`font-bold text-center font-14`),
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
            style={[tailwind('mx-3 mt-3 rounded h-1')]}
            colors={['#816D2E', '#614920']}></LinearGradient>
        )}
      </View>
    </TouchableOpacity>
  );
};
