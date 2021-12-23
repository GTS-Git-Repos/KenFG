import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import BreakupSheetHeader from '../atoms/BreakupSheetHeader';
import LinearGradient from 'react-native-linear-gradient';
import {} from 'react-native-gesture-handler';

interface PropTypes {
  text?: string;
}

export default function BreakupModalSheet(props: PropTypes) {
  return (
    <ScrollView style={[tailwind('bg-dark')]}>
      <OverAllInfo />
      <ContestWinning />
      <ContestWinning />
    </ScrollView>
  );
}

const OverAllInfo = () => {
  return (
    <View style={[tailwind('bg-dark-3 px-5 py-4')]}>
      <Text style={[tailwind('font-bold text-white text-center font-16')]}>
        Congratulation Team Ken
      </Text>
      <Text
        style={[tailwind('font-regular text-green-500 text-center font-14')]}>
        You have wont {'\u20B9'} 133 in 2 Contest
      </Text>
    </View>
  );
};

const ContestWinning = () => {
  return (
    <View style={[tailwind('bg-dark-3 p-4 my-1')]}>
      <Text style={[tailwind('font-bold text-white font-18 pb-2')]}>
        {'\u20B9'} 1,32,00
      </Text>
      <Line />
      <TopSection />
      <Line />
      <View style={[tailwind('flex-row py-2 items-center justify-between')]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Winning from a Team 1
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          {'\u20B9'} 123
        </Text>
      </View>
      <Line />
      <View style={[tailwind('flex-row py-2 items-center justify-between')]}>
        <Text style={[tailwind('font-bold text-white font-14')]}>Winnings</Text>
        <Text style={[tailwind('font-bold text-white font-14')]}>
          {'\u20B9'} 123
        </Text>
      </View>
    </View>
  );
};

const Line = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[tailwind('')]}
      colors={['#172338B3', '#FFFFFF4D', '#172338B3']}>
      <View style={[tailwind(''), {height: 0.5}]}></View>
    </LinearGradient>
  );
};

const TopSection = () => {
  return (
    <View style={[tailwind('flex-row items-center py-3')]}>
      <View style={[tailwind(''), {flex: 4}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
          Prize Pool
        </Text>
        <Text style={[tailwind('font-bold text-white font-16 py-0.5')]}>
          {'\u20B9'} 12.43 Lacks
        </Text>
      </View>

      <View style={[tailwind('flex-row  justify-center'), {flex: 4}]}>
        <View>
          <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
            Spots
          </Text>
          <Text style={[tailwind('font-bold text-dark-1 font-16 py-0.5')]}>
            16,000
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex-row justify-end'), {flex: 4}]}>
        <View>
          <Text
            style={[tailwind('font-regular text-right text-dark-1 font-14')]}>
            Entry
          </Text>
          <Text style={[tailwind('font-bold text-dark-1 font-16 py-0.5')]}>
            {'\u20B9'} 125
          </Text>
        </View>
      </View>
    </View>
  );
};
