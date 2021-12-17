import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {BottomLine} from '../../../sharedComponents';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('PlayerProfileScreen')}>
      <View style={[tailwind('flex-row pt-3 bg-dark-3 items-center')]}>
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
    </TouchableOpacity>
  );
};

const Filter = () => {
  return (
    <View style={[tailwind('flex-row m-3 items-center')]}>
      <View
        style={[
          tailwind('flex-row rounded-3xl border border-gray-600'),
          {flex: 8},
        ]}>
        <TouchableOpacity
          style={[tailwind('bg-secondary rounded-l-3xl p-2 flex-grow')]}>
          <Text
            style={[
              tailwind('font-bold uppercase text-center text-brown-5 font-12'),
            ]}>
            By Contest
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tailwind('p-2 flex-grow border-gray-600 border-r')]}>
          <Text
            style={[
              tailwind('font-bold uppercase text-center text-white font-12'),
            ]}>
            By Match
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[tailwind('p-2 flex-grow')]}>
          <Text
            style={[
              tailwind('font-bold uppercase text-center text-white font-12'),
            ]}>
            By Teams
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[tailwind(''), {flex: 2}]}></View>
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
