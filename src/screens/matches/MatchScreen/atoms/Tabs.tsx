import React, {useEffect, useRef} from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import clr from '../../../../constants/colors';

// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
  activeIndex: number;
  onTabPressed(index: number): any;
  dT: boolean;
}

const DATA = [
  {
    key: 'winnings',
    tabName: 'My Contests',
  },
  {
    key: 'leaderboard',
    tabName: 'My Teams',
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
  const width = useWindowDimensions().width;

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
      style={[!props.dT && clr.bgw, props.dT ? ss.dRoot : ss.lRoot]}
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
  const width = useWindowDimensions('window').width;

  const TABWIDTH = width / 3;
  return (
    <TouchableOpacity
      onPress={() => onTabPressed(index)}
      style={[{width: TABWIDTH}, tailwind('')]}>
      <View style={[tailwind('pt-3')]}>
        {dT ? (
          <Text style={[ss.dtxt, active && ss.daTxt]}>{tabName}</Text>
        ) : (
          <Text style={[ss.ltxt, active && ss.laTxt]}>{tabName}</Text>
        )}
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

const ss = StyleSheet.create({
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
  dtxt: {
    fontFamily: 'Gadugi-Normal',
    textAlign: 'center',
    fontSize: 14,
    letterSpacing: 0.3,
    color: '#FFFFFF',
  },
  ltxt: {
    fontFamily: 'Gadugi-Normal',
    textAlign: 'center',
    fontSize: 14,
    letterSpacing: 0.3,
    color: '#0D1320',
  },
  daTxt: {
    fontFamily: 'Gadugi-Bold',
    color: '#FFFFFF',
  },
  laTxt: {
    fontFamily: 'Gadugi-Bold',
    color: '#9C181E',
  },
});
