import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {BottomLine} from '../../../sharedComponents/';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  image?: string;
  player_key: string;
  name: string;
  points: string;
  teamname: string;
  title: string;
  c: string;
  vc: string;
  is_captain: boolean;
  is_vice_captain: boolean;
  captainSelectAction(player_key: string): any;
  viceCaptainSelect(player_key: string): any;
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
            {/* <Text
              style={[
                tailwind('font-regular font-10 rounded-r bg-secondary'),
                {paddingHorizontal: 2, paddingVertical: 1},
              ]}>
              {props.title}
            </Text> */}
          </View>

          <View style={[tailwind('flex-col justify-center'), {flex: 1}]}>
            <Text
              numberOfLines={1}
              style={[
                tailwind('font-semibold font-16 overflow-hidden text-light'),
              ]}>
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
            <TouchableOpacity
              onPress={() => props.captainSelectAction(props.player_key)}
              style={[
                tailwind(
                  `rounded-3xl ${
                    props.is_captain
                      ? 'bg-secondary p-3 '
                      : 'px-4 py-3 border border-gray-400 '
                  }`,
                ),
              ]}>
              <Text
                style={[
                  tailwind(
                    `font-bold font-12 ${
                      props.is_captain ? 'text-brown-5' : 'text-light'
                    }`,
                  ),
                ]}>
                {props.is_captain ? '2x' : 'C'}
              </Text>
            </TouchableOpacity>
            <Text style={[tailwind('font-regular  text-dark-1 py-1 font-15')]}>
              {props.c}
            </Text>
          </View>

          <View
            style={[
              tailwind(`flex-col justify-center items-center`),
              {flex: 5},
            ]}>
            <TouchableOpacity
              onPress={() => props.viceCaptainSelect(props.player_key)}
              style={[
                tailwind(
                  `rounded-3xl ${
                    props.is_vice_captain
                      ? 'bg-secondary px-2 py-3'
                      : ' p-3 border border-gray-400'
                  }`,
                ),
              ]}>
              <Text
                style={[
                  tailwind(
                    `font-bold  text-light  ${
                      props.is_vice_captain
                        ? 'text-brown-5 font-10'
                        : 'text-light font-10'
                    }`,
                  ),
                ]}>
                {props.is_vice_captain ? '1.5x' : 'VC'}
              </Text>
            </TouchableOpacity>

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
