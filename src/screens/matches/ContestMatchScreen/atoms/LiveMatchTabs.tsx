import React, {useEffect, useRef} from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';

interface PropTypes {
  text?: string;
  activeIndex: number;
  onTabPressed(index: number): any;
  dT: boolean;
}

const DATA = [
  {
    key: 'leaderboard',
    tabName: 'Leaderboard',
  },
  {
    key: 'winnings',
    tabName: 'Winnigs',
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
      showsHorizontalScrollIndicator={false}
      horizontal
      getItemLayout={getItemLayout}
      style={[props.dT ? styles.dRoot : styles.lRoot]}
      data={DATA}
      renderItem={({item, index}) => {
        return (
          <TabItem
            dT={props.dT}
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

const TabItem = ({tabName, active, index, onTabPressed, dT}) => {
  return (
    <TouchableOpacity
      onPress={() => onTabPressed(index)}
      style={[{width: 120}, tailwind('')]}>
      <View style={[tailwind('pt-3')]}>
        {dT ? (
          <Text style={[styles.dTxt, active ? clr.tw : clr.td2]}>
            {tabName}
          </Text>
        ) : (
          <Text style={[styles.lTxt, active ? clr.tr : clr.td2]}>
            {tabName}
          </Text>
        )}
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
  dRoot: {
    borderColor: 'rgba(31, 41, 55,1)',
    borderBottomWidth: 1,
    backgroundColor: '#172338',
  },
  lRoot: {
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderBottomWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  dTxt: {
    textAlign: 'center',
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  lTxt: {
    textAlign: 'center',
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    color: '#0D1320',
    letterSpacing: 0.3,
  },
});
