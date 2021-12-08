import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  tournament_name: string;
  team_a_name: string;
  team_a_flag: string;
  team_b_name: string;
  team_b_flag: string;
  tournament_shortName: string;
  price: string;
}

export default function UpcommingMatches(props: PropTypes) {
  const navigation = useNavigation<any>();


  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ContestListScreen')}
      style={[tailwind('p-2'), {flex: 6}]}>
      <LinearGradient
        start={{x: 0.0, y: 0.5}}
        end={{x: 0.5, y: 0.0}}
        locations={[0.6, 0.5]}
        colors={['#172338', '#172338']}
        style={[
          tailwind('bg-primary  border border-gray-800 rounded px-2 pt-1'),
        ]}>
        <View
          style={[tailwind('absolute right-0 flex flex-row justify-end p-1')]}>
          <Image
            resizeMode="contain"
            source={assets.bell}
            style={[tailwind(''), {width: 15, height: 15}]}
          />
        </View>

        <View style={[tailwind('pt-4')]}>
          <Text
            numberOfLines={1}
            allowFontScaling={true}
            adjustsFontSizeToFit={true}
            style={[
              tailwind('font-regular text-center font-12'),
              {color: '#F6F7F4'},
            ]}>
            {props.tournament_name}
          </Text>

          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={[tailwind('mx-2 mt-1')]}
            colors={['#162339', '#29344B', '#162339']}>
            <View style={[tailwind(''), {height: 2}]}></View>
          </LinearGradient>
        </View>

        <View
          style={[tailwind('flex flex-row justify-between py-2 items-center')]}>
          <View style={[tailwind('')]}>
            <Image
              resizeMode="contain"
              source={assets.south_africa_flag}
              style={[tailwind(''), {width: 40, height: 40}]}
            />
            <Text
              style={[
                tailwind('font-bold uppercase font-13 text-center'),
                {color: '#D3D3D5'},
              ]}>
              {props.team_a_name}
            </Text>
          </View>

          <Text style={[tailwind('font-bold font-13'), {color: '#D3D3D5'}]}>
            VS
          </Text>

          <View style={[tailwind('')]}>
            <Image
              resizeMode="contain"
              source={assets.australia_flag}
              style={[tailwind(''), {width: 40, height: 40}]}
            />
            <Text
              style={[
                tailwind('font-bold uppercase font-13 text-center'),
                {color: '#D3D3D5'},
              ]}>
              {props.team_b_name}
            </Text>
          </View>
        </View>

        {/* Contest Prize Info */}
        <View style={[tailwind('flex-row items-center')]}>
          <View style={[tailwind(''), {flex: 6}]}>
            <Text
              numberOfLines={1}
              allowFontScaling={true}
              adjustsFontSizeToFit={true}
              style={[tailwind('font-regular font-10'), {color: '#9AABC6'}]}>
              {props.tournament_shortName}
            </Text>
          </View>

          <Text
            style={[
              tailwind('font-regular px-1 font-10'),
              {color: '#9AABC6', flex: 1},
            ]}>
            |
          </Text>
          <View style={[tailwind(''), {flex: 3}]}>
            <Text
              style={[tailwind('font-regular font-10'), {color: '#DBC872'}]}>
              {'\u20B9'} {props.price}
            </Text>
          </View>
        </View>

        {/* Count Down */}
        <View
          style={[
            tailwind(
              'flex flex-row items-center mx-5 mt-2 py-1 rounded-t-2xl justify-center',
            ),
            {backgroundColor: '#006046'},
          ]}>
          <Image
            resizeMode="contain"
            source={assets.running_clock}
            style={[tailwind(''), {width: 13, height: 13}]}
          />
          <Text
            style={[
              tailwind('font-bold text-center pl-1 font-12'),
              {color: '#FEFEFF'},
            ]}>
            3h:40:23
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}
