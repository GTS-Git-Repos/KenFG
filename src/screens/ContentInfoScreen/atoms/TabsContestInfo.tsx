import React from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  useWindowDimensions,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  tabs: Array<string>;
  tabOffset: number;
}

export default function TabsContestInfo(props: PropTypes) {
  const {width} = useWindowDimensions();
  return (
    <View style={[tailwind('relative')]}>
      <View style={[tailwind('flex-row items-center')]}>
        {props.tabs.map(item => {
          return (
            <TouchableOpacity
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
            tailwind('bg-secondary absolute bottom-0'),
            {width: width / 2, height: 2},
            {transform: [{translateX: props.tabOffset}]},
          ]}></Animated.View>

        {/* {props.tabOffset ? (
          
        ) : (
          <View
            style={[
              tailwind('bg-secondary absolute bottom-0'),
              {width: width / 2, height: 2},
              {transform: [{translateX: width / width}]},
            ]}></View>
        )} */}
      </View>
    </View>
  );
}
