import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, TouchableOpacityBase, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  name: string;
  title: string;
  left_spot: number;
  total_spot: number;
  first_reward: string;
  gaurantee: boolean;
  practice: boolean;
  demo_entry_amount: number;
  entry_amount: number;
}

const PROGRESS_BAR_HEIGHT = 5;

export default function ContestCard(props: PropTypes) {
  return (
    <View style={[tailwind('rounded border my-2  border-gray-800 ')]}>
      <View style={[tailwind('px-2 py-2 bg-primary')]}>
        <View style={[tailwind('flex-row items-center   justify-between ')]}>
          <View style={[tailwind('')]}>
            <Text style={[tailwind('font-regular font-15 text-gray-400')]}>
              {props.name}
            </Text>
            <Text
              style={[
                tailwind('font-bold text-gray-200 py-1'),
                {fontSize: 25},
              ]}>
              {'\u20B9 '}
              {props.title}
            </Text>
          </View>

          <View style={[tailwind('')]}>
            {!props.practice && (
              <Text
                style={[
                  tailwind(
                    'font-regular text-right py-1 text-gray-200 font-15',
                  ),
                ]}>
                Entry
              </Text>
            )}
            <View style={[tailwind('flex-row justify-end my-1 items-center')]}>
              <Text
                style={[
                  tailwind(
                    'font-semibold text-secondary px-3 line-through font-15',
                  ),
                ]}>
                {'\u20B9 '}
                {props.demo_entry_amount}
              </Text>
              <TouchableOpacity
                style={[tailwind('bg-secondary rounded py-2 w-20')]}>
                <Text style={[tailwind('font-bold text-center font-15')]}>
                  {'\u20B9'}
                  {props.entry_amount}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={[
            tailwind('mt-3 mb-2 w-full bg-gray-400 rounded'),
            {height: PROGRESS_BAR_HEIGHT},
          ]}>
          <View
            style={[
              tailwind('w-full bg-secondary'),
              {
                width: `76%`,
                height: PROGRESS_BAR_HEIGHT,
              },
            ]}></View>
        </View>

        <View style={[tailwind('flex-row justify-between items-center')]}>
          <Text style={[tailwind('font-regular text-red-500 font-15')]}>
            {props.left_spot} spots left
          </Text>
          <Text style={[tailwind('font-regular text-gray-400 font-15')]}>
            {props.total_spot} spots
          </Text>
        </View>
      </View>

      <LinearGradient
        colors={['#131e30', '#162135']}
        style={[tailwind('rounded-b p-2')]}>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <Icon name="medal-outline" size={1} color="white" />
            <Text style={[tailwind('font-regular text-gray-300 font-15')]}>
              {'\u20B9 '}
              {props.first_reward}
            </Text>
          </View>
          {props.gaurantee && (
            <View style={[tailwind('flex-row items-center')]}>
              <Icon name="trophy-outline" size={18} color="white" />
              <Text
                style={[tailwind('font-regular text-gray-400 pl-2 font-15')]}>
                Gauranteed
              </Text>
            </View>
          )}
        </View>
      </LinearGradient>
    </View>
  );
}
