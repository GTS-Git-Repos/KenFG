import React, {useState} from 'react';
import tailwind from '../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
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
  joined?: [];
}

const PROGRESS_BAR_HEIGHT = 2;

export default function ContestCard(props: PropTypes) {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[tailwind('rounded')]}
      onPress={() => props.navigate(props.contest_key)}>
      {/* <LinearGradient
        start={{x: 0.0, y: 0.7}}
        end={{x: 1.0, y: 0.0}}
        locations={[0.6, 0.5]}
        colors={['#172338', '#25385A']}> */}

      <View style={[tailwind('p-4 bg-dark-3 rounded-t')]}>
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
            {/* {!props.is_practice && (
                <Text
                  style={[
                    tailwind('font-regular font-14 text-white text-right'),
                  ]}>
                  Entry
                </Text>
              )} */}
            <View style={[tailwind('flex-row justify-end py-2 items-center')]}>
              {/* <Text
                  style={[
                    tailwind('font-semibold px-3 line-through font-14'),
                    {color: '#006A4D'},
                  ]}>
                  {'\u20B9 '}
                  {parseInt(props.entry) + 10}
                </Text> */}

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
                  {/* {'\u20B9'}
                    {props.entry} */}
                  Join
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Progress bar */}
        <View
          style={[
            tailwind('w-full bg-dark-1 rounded'),
            {height: PROGRESS_BAR_HEIGHT},
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
            {props.total_spots} spots
          </Text>
        </View>
      </View>

      <LinearGradient colors={['#131e30', '#162135']} style={[tailwind('p-3')]}>
        <View style={[tailwind('flex-row justify-between items-center')]}>
          <View style={[tailwind('flex-row items-center')]}>
            <View style={[tailwind('flex-row items-center')]}>
              <Image
                resizeMode="contain"
                source={assets.money}
                style={[tailwind('app-w-17 app-h-17')]}
              />
              <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
                {'\u20B9 '}
                {props.amount_letters}
              </Text>
            </View>

            <View style={[tailwind('flex-row items-center')]}>
              <Image
                resizeMode="contain"
                source={assets.cup}
                style={[tailwind('app-w-17 app-h-17')]}
              />
              <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
                {props.bonus}
              </Text>
            </View>

            <View style={[tailwind('flex-row items-center')]}>
              <Image
                resizeMode="contain"
                source={assets.M}
                style={[tailwind('app-w-17 app-h-17')]}
              />
              <Text style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
                upto {props.max_entry}
              </Text>
            </View>
          </View>

          {props.guaranteed && (
            <View style={[tailwind('flex-row items-center')]}>
              <Image
                resizeMode="contain"
                source={assets.M}
                style={[tailwind('app-w-17 app-h-17')]}
              />
              <Text
                style={[tailwind('font-regular text-dark-1 pl-2    font-13')]}>
                Gauranteed
              </Text>
            </View>
          )}
        </View>
      </LinearGradient>

      {/* joined with */}

      {props.joined ? (
        <View style={[tailwind(' bg-dark-3 px-2')]}>
          <Text
            style={[
              tailwind('font-regular text-dark-1 py-1 uppercase font-13'),
            ]}>
            Joined with
          </Text>

          <View style={[tailwind('flex-row items-center flex-wrap  py-2')]}>
            {props.joined.map(item => {
              return (
                <View
                  key={item}
                  style={[
                    tailwind('rounded bg-dark-4 py-1 mr-2'),
                    {paddingHorizontal: 16},
                  ]}>
                  <Text
                    style={[
                      tailwind('font-bold text-center text-light font-13'),
                    ]}>
                    {item}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      ) : null}
      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
}
