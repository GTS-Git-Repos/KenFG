import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function MyContestInfo(props: PropTypes) {
  return (
    <View>
      <View style={[tailwind('flex-row items-center')]}>
        <View style={[tailwind('flex-col justify-center p-3'), {flex: 4}]}>
          <View>
            <Text style={[tailwind('font-regular text-gray-400 font-15')]}>
              Prize Pool
            </Text>
            <Text style={[tailwind('font-regular py-2 text-light font-15')]}>
              {'\u20B9'} 1000
            </Text>
          </View>
        </View>

        <View
          style={[
            tailwind('flex-col items-center justify-center p-3'),
            {flex: 4},
          ]}>
          <View>
            <Text style={[tailwind('font-regular text-gray-400 font-15')]}>
              Spots
            </Text>
            <Text style={[tailwind('font-regular py-2 text-light font-15')]}>
              100
            </Text>
          </View>
        </View>

        <View
          style={[
            tailwind('flex-col items-end justify-center p-3'),
            {flex: 4},
          ]}>
          <View>
            <Text style={[tailwind('font-regular text-gray-400 font-15')]}>
              Entry
            </Text>
            <Text style={[tailwind('font-regular py-2 text-light font-15')]}>
              {'\u20B9'} 10
            </Text>
          </View>
        </View>
      </View>

      <View
        style={[tailwind('px-2 py-1 bg-blue-900 flex-row items-center justify-between')]}>
        <View style={[tailwind('flex-row items-center')]}>
          <Text style={[tailwind('font-regular text-light font-13')]}>
            50% Winnings
          </Text>
        </View>

        <View style={[tailwind('flex-row items-center')]}>
          <Text style={[tailwind('font-regular text-light font-13')]}>
            Gauranteed
          </Text>
        </View>
      </View>
    </View>
  );
}
