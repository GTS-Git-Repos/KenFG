import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {BottomLine} from '../../../sharedComponents/';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  image?: string;
  name: string;
  points: string;
  teamname: string;
  title: string;
  cap: boolean;
  vc: boolean;
}

export default function PlayerProfile(props: PropTypes) {
  return (
    <LinearGradient
      colors={['#1C2B46', '#172338']}
      end={{x: 0.0, y: 0.5}}
      start={{x: 0.8, y: 3.0}}
      locations={[0.6, 0.5]}>
      <View style={[tailwind('pt-3 flex-row items-center')]}>
        <View style={[tailwind('flex-row'), {flex: 5}]}>
          <Image
            resizeMode="contain"
            source={assets.player}
            style={{width: 75, height: 75}}
          />
          <Icon
            style={[tailwind('absolute mx-1')]}
            name="information-circle-outline"
            color="white"
            size={20}
          />
          <View
            style={[tailwind('absolute bottom-1  px-3 flex-row items-center')]}>
            <Text
              style={[
                tailwind(
                  'font-regular uppercase font-10 rounded-l  text-light bg-primary',
                ),
                {paddingHorizontal: 2, paddingVertical: 1},
              ]}>
              {props.teamname}
            </Text>
            <Text
              style={[
                tailwind('font-regular font-10 rounded-r bg-secondary'),
                {paddingHorizontal: 2, paddingVertical: 1},
              ]}>
              {props.title}
            </Text>
          </View>

          <View style={[tailwind('flex-col justify-center')]}>
            <Text style={[tailwind('font-semibold font-16 text-light')]}>
              {props.name}
            </Text>
            <Text style={[tailwind('font-regular py-1 font-13 text-dark-1')]}>
              {props.points}
            </Text>
          </View>
        </View>

        {/* Points */}
        <View
          style={[
            tailwind('flex-row justify-between items-center'),
            {flex: 5},
          ]}>
          <View
            style={[
              tailwind('flex-col justify-center items-center'),
              {flex: 5},
            ]}>
            <View
              style={[
                tailwind(
                  `border border-gray-400 px-4 py-3 rounded-3xl ${
                    props.cap ? 'bg-secondary' : ''
                  }`,
                ),
              ]}>
              <Text
                style={[
                  tailwind(
                    `font-bold font-12 ${
                      props.cap ? 'text-brown-5' : 'text-light'
                    }`,
                  ),
                ]}>
                C
              </Text>
            </View>
            <Text style={[tailwind('font-regular  text-dark-1 py-1 font-15')]}>
              {props.c}
            </Text>
          </View>
          <View
            style={[
              tailwind('flex-col justify-center items-center'),
              {flex: 5},
            ]}>
            <View style={[tailwind('border border-gray-400 p-3 rounded-3xl')]}>
              <Text style={[tailwind('font-bold font-12 text-light')]}>VC</Text>
            </View>
            <Text style={[tailwind('font-regular text-dark-1 py-1 font-15')]}>
              {props.vc}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <BottomLine />
      </View>
    </LinearGradient>
  );
}
