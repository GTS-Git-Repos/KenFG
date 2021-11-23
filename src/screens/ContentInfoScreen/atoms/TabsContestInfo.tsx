import React from 'react';
import tailwind from '../../../../tailwind';
import {View, TouchableOpacity, Text, useWindowDimensions} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

interface PropTypes {
  tabs: Array<string>;
  tabOffset: number;
  onTabPress(index: number): void;
}

export default function TabsContestInfo(props: PropTypes) {
  const {width} = useWindowDimensions();

  const rstyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: props.tabOffset.value / 2}],
    };
  });

  return (
    <View style={[tailwind('relative bg-dark-2')]}>
      <View style={[tailwind('flex-row items-center')]}>
        {props.tabs.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => props.onTabPress(index)}
              key={item}
              style={[tailwind('w-6/12'), {paddingVertical: 12}]}>
              <Text
                style={[
                  tailwind(
                    'font-semibold text-gray-200 px-2 text-center font-15',
                  ),
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
        <Animated.View
          style={[
            tailwind('absolute bottom-0'),
            {width: width / 2, height: 2},
            {backgroundColor: '#816D2E'},
            rstyle,
          ]}></Animated.View>
      </View>
    </View>
  );
}
