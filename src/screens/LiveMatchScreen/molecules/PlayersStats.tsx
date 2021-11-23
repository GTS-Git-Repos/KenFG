import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {BottomLine} from '../../../sharedComponents';

interface PropTypes {
  text?: string;
}

export default function PlayersStats(props: PropTypes) {
  return (
    <View>
      <ScrollView style={[tailwind('')]}>
        <Filter />
        <TableRow />
        <PlayerStats name="Virat Kohli" />
        <PlayerStats name="R Sharma" />
        <PlayerStats name="M Dhoni" />
        <PlayerStats name="Virat Kohli" />
        <PlayerStats name="R Sharma" />
        <PlayerStats name="M Dhoni" />
        <View style={[tailwind('h-10')]}></View>
      </ScrollView>
    </View>
  );
}

const PlayerStats = (props: any) => {
  return (
    <LinearGradient
      end={{x: 0.0, y: 0.5}}
      start={{x: 0.9, y: 2.0}}
      locations={[0.6, 0.5]}
      colors={['#25385A', '#172338']}>
      <View style={[tailwind('flex-row py-4 items-center')]}>
        <View style={[tailwind('flex-row items-center'), {flex: 4}]}>
          <View style={[tailwind('px-2')]}>
            <Image
              resizeMode="contain"
              source={assets.player}
              style={[{width: 36, height: 36}]}
            />
          </View>

          <View>
            <Text
              numberOfLines={1}
              style={[tailwind('font-bold text-light font-14')]}>
              {props.name}
            </Text>
            <Text style={[tailwind('font-regular text-dark-1 font-12 pt-1')]}>
              IND - BAT
            </Text>
          </View>
        </View>
        <View style={[tailwind(''), {flex: 2}]}>
          <Text style={[tailwind('font-regular text-dark-1 font-14 py-2')]}>
            34.3%
          </Text>
        </View>
        <View style={[tailwind(''), {flex: 2}]}>
          <Text style={[tailwind('font-regular text-dark-1 font-14 py-2')]}>
            34.3%
          </Text>
        </View>
        <View style={[tailwind(''), {flex: 2}]}>
          <Text style={[tailwind('font-regular text-dark-1 font-14 py-2')]}>
            34.3%
          </Text>
        </View>
      </View>
      <View>
        <BottomLine />
      </View>
    </LinearGradient>
  );
};

const Filter = () => {
  return (
    <View style={[tailwind('flex-row m-3 items-center')]}>
      <View
        style={[
          tailwind('flex-row rounded-3xl border border-gray-600'),
          {flex: 6},
        ]}>
        <TouchableOpacity
          style={[tailwind('bg-secondary rounded-l-3xl py-3 px-2')]}>
          <Text
            style={[
              tailwind('font-bold uppercase text-center text-brown-5 font-12'),
            ]}>
            By Contest
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[tailwind('')]}>
          <Text
            style={[
              tailwind(
                'font-bold uppercase text-center text-light font-12 py-3 px-2',
              ),
            ]}>
            By Match
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[tailwind(''), {flex: 6}]}></View>
    </View>
  );
};

const TableRow = () => {
  return (
    <View style={[tailwind('flex-row items-center pb-4 pt-1')]}>
      <View
        style={[
          tailwind('flex-row justify-between items-center'),
          {flex: 3.5},
        ]}>
        <Text
          style={[tailwind('font-regular text-dark-1 font-12 uppercase px-4')]}>
          Players
        </Text>
      </View>
      <View
        style={[tailwind('flex-row justify-between items-center'), {flex: 2}]}>
        <Text
          style={[tailwind('font-regular text-dark-1 font-12 uppercase px-4')]}>
          L BY
        </Text>
      </View>
      <View
        style={[tailwind('flex-row  justify-between items-center'), {flex: 2}]}>
        <Text
          style={[tailwind('font-regular text-dark-1 font-12 uppercase px-4')]}>
          %C by
        </Text>
      </View>
      <View
        style={[
          tailwind('flex-row justify-between items-center'),
          {flex: 2.5},
        ]}>
        <Text
          style={[tailwind('font-regular text-dark-1 font-12 uppercase px-4')]}>
          % VC BY
        </Text>
      </View>
    </View>
  );
};
