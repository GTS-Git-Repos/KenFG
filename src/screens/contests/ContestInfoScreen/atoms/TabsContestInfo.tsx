import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, TouchableOpacity, Text, useWindowDimensions} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {log, useAnimatedStyle} from 'react-native-reanimated';

interface PropTypes {
  tabs: Array<string>;
  tabOffset: any;
  activeIndex: any;
  onTabPressed: any;
}

export default function TabsContestInfo(props: PropTypes) {
  const {width} = useWindowDimensions();

  const rstyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: props.tabOffset.value / 2}],
    };
  });

  return (
    <View
      style={[
        tailwind('relative bg-dark-3 border-t border-b border-gray-800'),
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        {props.tabs.map((item, index) => {
          return (
            <TouchableOpacity
              // onPress={() => props.onTabPress(index)}
              onPress={() => props.onTabPressed(index)}
              key={item}
              style={[tailwind('w-6/12')]}>
              <Text
                style={[
                  tailwind(
                    `font-semibold text-gray-200 px-2 py-3 text-center font-15 ${
                      props.activeIndex === index
                        ? 'font-bold'
                        : 'font-regular text-dark-1'
                    }`,
                  ),
                ]}>
                {item}
              </Text>
              {props.activeIndex === index ? (
                <View
                  style={[
                    tailwind(''),
                    {height: 2},
                    {backgroundColor: '#816D2E'},
                  ]}></View>
              ) : (
                <View style={{height: 2}} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

{
  //
  // <Animated.View
  //   style={[
  //     tailwind('absolute bottom-0'),
  //     {width: width / 2, height: 2},
  //     {backgroundColor: '#816D2E'},
  //     rstyle,
  //   ]}></Animated.View>
}
