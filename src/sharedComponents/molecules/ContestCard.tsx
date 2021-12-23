import React, {useState} from 'react';
import tailwind from '../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {CupIcon, DollarIcon, MIcon, MoneyIcon, TickIcon} from '..';
const log = console.log;

interface PropTypes {
  navigate(contest_key: string): any;
  contest_key: string;
  match_key: string;
  title: string;
  total_joined: number;
  total_spots: number;
  amount_letters: string;
  amount: string;
  guaranteed: boolean;
  entry: string;
  max_entry: number;
  bonus: string;
  is_practice: boolean;
}

const PROGRESS_BAR_HEIGHT = 2.5;

export default function ContestCard(props: PropTypes) {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[tailwind('')]}
      onPress={() => props.navigate(props.contest_key)}>
      <View style={[tailwind('p-4 rounded-t-lg bg-dark-3 ')]}>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <View style={[tailwind('py-2')]}>
            <Text
              style={[tailwind('font-regular capitalize font-14 text-white')]}>
              {props.title}
            </Text>
            <Text
              style={[tailwind('font-bold text-white py-2'), {fontSize: 14}]}>
              {'\u20B9 '}
              {props.amount_letters}
            </Text>
          </View>

          <View style={[tailwind('')]}>
            <View style={[tailwind('flex-row justify-end py-2 items-center')]}>
              <View
                style={[
                  tailwind('rounded px-4 py-0.5'),
                  {
                    backgroundColor: '#006A4D',
                  },
                ]}>
                <Text
                  style={[
                    tailwind('font-bold text-center text-light font-14'),
                  ]}>
                  Join
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Progress bar */}
        <View
          style={[
            tailwind('w-full rounded'),
            {height: PROGRESS_BAR_HEIGHT, backgroundColor: '#8797B14D'},
          ]}>
          <View
            style={[
              tailwind('w-full'),
              {
                backgroundColor: '#B2933D',
                width: `10%`,
                height: PROGRESS_BAR_HEIGHT,
              },
            ]}></View>
        </View>
        {/* Spots left */}
        <View style={[tailwind('flex-row justify-between items-center pt-3')]}>
          <Text style={[tailwind('font-regular text-secondary font-14')]}>
            {props.total_joined} spots left
          </Text>
          <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
            {props.total_spots} Spots
          </Text>
        </View>
      </View>

      <View style={[tailwind('p-3 rounded-b'), {backgroundColor: '#121D2E'}]}>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <View style={[tailwind('flex-row items-center')]}>
              <DollarIcon />
              <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
                {'\u20B9 '}
                {props.amount_letters}
              </Text>
            </View>

            <View style={[tailwind('flex-row px-1 items-center')]}>
              <CupIcon />
              <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
                {props.bonus}
              </Text>
            </View>

            <View style={[tailwind('flex-row items-center')]}>
              <MIcon />
              <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
                upto {props.max_entry}
              </Text>
            </View>
          </View>

          {props.guaranteed && (
            <View style={[tailwind('flex-row items-center')]}>
              <TickIcon />
              <Text
                style={[tailwind('font-regular text-dark-1 pl-2    font-13')]}>
                Gauranteed
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
}
