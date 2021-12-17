import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function CareerStats(props: PropTypes) {
  return (
    <LinearGradient
      style={[tailwind('mx-1 rounded-t')]}
      colors={['#0D1320', '#172338']}>
      <View style={[tailwind('flex-row items-center px-10 pt-2 pb-1 ')]}>
        <View
          style={[
            tailwind(
              'bg-dark-4 rounded-full flex-row items-center justify-end',
            ),
            {width: 40, height: 40},
          ]}>
          <Image
            resizeMode="contain"
            source={assets.goal_money}
            style={[tailwind(''), {width: 35, height: 35}]}
          />
        </View>
        <View style={[tailwind('px-3 flex-grow')]}>
          <Text
            style={[tailwind('font-regular text-center text-dark-1 font-10')]}>
            To reach level 221, play
          </Text>
          <Text style={[tailwind('font-regular text-white py-1 font-13')]}>
            {'\u20B9'} 33,343,4432 More
          </Text>
          <Text style={[tailwind('font-regular text-dark-1 font-10')]}>
            In Entry Fees
          </Text>
        </View>
      </View>
      <NextReward />
    </LinearGradient>
  );
}

const NextReward = () => {
  return (
    <View
      style={[
        tailwind(
          'bg-secondary flex-row items-center flex-wrap justify-between px-4 py-1 rounded-b',
        ),
      ]}>
      <Text style={[tailwind('font-regular text-brown-5 font-11')]}>
        Next Reward at level 202
      </Text>
      <Text style={[tailwind('font-regular text-brown-5 font-11')]}>
        {'\u20B9'}1,000 Cash Bonus
      </Text>
    </View>
  );
};
