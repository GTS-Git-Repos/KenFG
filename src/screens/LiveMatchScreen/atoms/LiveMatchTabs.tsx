import React from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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
      style={[tailwind('bg-dark-3'), styles.root]}>
      <TabItem
        tabName="Winnings"
        index={0}
        active={0 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
      <TabItem
        tabName="Leaderboard"
        index={1}
        active={1 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
      <TabItem
        tabName="ScoreBoard"
        index={2}
        active={2 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
      <TabItem
        tabName="Commentry"
        index={3}
        active={3 === props.activeIndex}
        onTabPressed={props.onTabPressed}
      />
      <TabItem
        tabName="Stats"
        index={4}
        active={4 === props.activeIndex}
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
            style={[tailwind('mx-3 mt-3 rounded'), {height: 2}]}
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
  },
  activeBorder: {
    borderColor: '#BCA04D',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
});
