import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

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
  joined?: [];
}

const PROGRESS_BAR_HEIGHT = 3;

export default function ContestCard(props: PropTypes) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[tailwind('rounded')]}
      onPress={() => navigation.navigate('ContentInfoScreen')}>
      {/* <LinearGradient
        end={{x: 0.0, y: 0.5}}
        start={{x: 0.8, y: 2.0}}
        locations={[0.6, 0.5]}
        colors={['#172338', '#25385A']}> */}
        <View style={[tailwind('px-2 pt-4 pb-3 rounded-t')]}>
          <View style={[tailwind('flex-row items-center justify-between ')]}>
            <View style={[tailwind('')]}>
              <Text style={[tailwind('font-regular font-14 text-light')]}>
                {props.name}
              </Text>
              <Text
                style={[
                  tailwind('font-bold text-gray-300 py-2'),
                  {fontSize: 14},
                ]}>
                {'\u20B9 '}
                {props.title}
              </Text>
            </View>

            <View style={[tailwind('')]}>
              {!props.practice && (
                <Text
                  style={[
                    tailwind('font-regular font-14 text-light text-right'),
                  ]}>
                  Entry
                </Text>
              )}
              <View
                style={[tailwind('flex-row justify-end py-2 items-center')]}>
                <Text
                  style={[
                    tailwind('font-semibold px-3 line-through font-14'),
                    {color: '#006A4D'},
                  ]}>
                  {'\u20B9 '}
                  {props.demo_entry_amount}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('CreateTeamScreen')}
                  style={[
                    tailwind('rounded px-6 py-2'),
                    {
                      backgroundColor: '#006A4D',
                    },
                  ]}>
                  <Text
                    style={[
                      tailwind('font-bold text-center text-light font-14'),
                    ]}>
                    {'\u20B9'}
                    {props.entry_amount}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={[
              tailwind('mt-3 mb-2 w-full bg-dark-1 rounded'),
              {height: PROGRESS_BAR_HEIGHT},
            ]}>
            <View
              style={[
                tailwind('w-full'),
                {
                  backgroundColor: '#B2933D',
                  width: `76%`,
                  height: PROGRESS_BAR_HEIGHT,
                },
              ]}></View>
          </View>

          <View style={[tailwind('flex-row justify-between items-center')]}>
            <Text style={[tailwind('font-regular text-secondary font-14')]}>
              {props.left_spot} spots left
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 font-14')]}>
              {props.total_spot} spots
            </Text>
          </View>
        </View>

        <LinearGradient
          colors={['#131e30', '#162135']}
          style={[tailwind('p-2')]}>
          <View style={[tailwind('flex-row justify-between items-center')]}>
            <View style={[tailwind('flex-row items-center')]}>
              <View style={[tailwind('flex-row items-center')]}>
                <Image
                  resizeMode="contain"
                  source={assets.money}
                  style={[tailwind('app-w-17 app-h-17')]}
                />
                <Text
                  style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
                  {'\u20B9 '}
                  {props.first_reward}
                </Text>
              </View>

              <View style={[tailwind('flex-row items-center')]}>
                <Image
                  resizeMode="contain"
                  source={assets.cup}
                  style={[tailwind('app-w-17 app-h-17')]}
                />
                <Text
                  style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
                  61%
                </Text>
              </View>

              <View style={[tailwind('flex-row items-center')]}>
                <Image
                  resizeMode="contain"
                  source={assets.M}
                  style={[tailwind('app-w-17 app-h-17')]}
                />
                <Text
                  style={[tailwind('font-regular text-dark-1 px-1 font-13')]}>
                  upto 20
                </Text>
              </View>
            </View>

            {props.gaurantee && (
              <View style={[tailwind('flex-row items-center')]}>
                <Image
                  resizeMode="contain"
                  source={assets.M}
                  style={[tailwind('app-w-17 app-h-17')]}
                />
                <Text
                  style={[
                    tailwind('font-regular text-dark-1 pl-2    font-13'),
                  ]}>
                  Gauranteed
                </Text>
              </View>
            )}
          </View>

        {/* </LinearGradient> */}

        
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
      </LinearGradient>
    </TouchableOpacity>
  );
}
