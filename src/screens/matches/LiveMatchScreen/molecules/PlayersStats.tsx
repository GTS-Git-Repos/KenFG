import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {BottomLine} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import contestPlayerStats from '../../../../constants/mocks/contestPlayerStats.json';

interface PropTypes {
  index: number;
  activeIndex: number;
}

export default function PlayersStats(props: PropTypes) {
  const navigation = useNavigation<any>();

  return (
    <ScrollView>
      <Filter />

      <View style={[tailwind('flex-row bg-dark-3')]}>
        <View style={[tailwind('')]}>
          <View style={[tailwind('bg-dark-4 p-2'), {width: 150}]}>
            <Text style={[tailwind('font-regular text-dark-1 px-2 font-12')]}>
              PLAYERS
            </Text>
          </View>

          {contestPlayerStats.map((item: any) => {
            return (
              <TouchableOpacity
                key={item.name}
                onPress={() => navigation.navigate('MyContestPlayersScreen')}
                style={[tailwind('flex-row items-center mt-2'), {width: 150}]}>
                <Image
                  resizeMode="contain"
                  source={assets.player}
                  style={[{width: 36, height: 36}]}
                />
                <View style={[tailwind('px-2')]}>
                  <Text
                    numberOfLines={1}
                    style={[
                      tailwind(
                        'font-bold text-white capitalize font-14 py-0.5',
                      ),
                    ]}>
                    {item.name}
                  </Text>
                  <Text style={[tailwind('font-regular text-dark-1 font-11')]}>
                    IND-BAT
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[tailwind('border-l  border-gray-800')]}>
          <View>
            <TableRow />
            {contestPlayerStats.map((item: any) => {
              return (
                <TouchableOpacity
                  key={item.name}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('MyContestPlayersScreen')}
                  style={[tailwind('flex-row flex-grow items-center mt-2')]}>
                  <View style={[tailwind('px-2'), {width: 62}]}>
                    <Text
                      style={[tailwind('font-regular text-dark-1 font-14')]}>
                      {item.points}
                    </Text>
                  </View>
                  <View style={[tailwind(''), {width: 62}]}>
                    <Text
                      style={[tailwind('font-regular text-dark-1 font-14')]}>
                      {item.sell_by} %
                    </Text>
                  </View>
                  <View style={[tailwind(''), {width: 62}]}>
                    <Text
                      style={[tailwind('font-regular text-dark-1 font-14')]}>
                      {item.c_by} %
                    </Text>
                  </View>
                  <View style={[tailwind(''), {width: 62}]}>
                    <Text
                      style={[tailwind('font-regular text-dark-1 font-14')]}>
                      {item.c_by} %
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}

const Filter = () => {
  return (
    <View style={[tailwind('flex-row m-3 items-center')]}>
      <View
        style={[
          tailwind('flex-row rounded-3xl border border-gray-800'),
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
          style={[tailwind('p-2 flex-grow border-gray-800 border-r')]}>
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
    <View style={[tailwind('flex-row items-center bg-dark-4 py-2 pl-1')]}>
      <View
        style={[
          tailwind('flex-row justify-between items-center'),
          {width: 62},
        ]}>
        <Text style={[tailwind('font-regular text-dark-1 font-12 uppercase')]}>
          Points
        </Text>
      </View>

      <View
        style={[
          tailwind('flex-row justify-between items-center'),
          {width: 62},
        ]}>
        <Text style={[tailwind('font-regular text-dark-1 font-12 uppercase')]}>
          L BY
        </Text>
      </View>
      <View
        style={[
          tailwind('flex-row  justify-between items-center'),
          {width: 62},
        ]}>
        <Text style={[tailwind('font-regular text-dark-1 font-12 uppercase')]}>
          %C by
        </Text>
      </View>
      <View
        style={[
          tailwind('flex-row justify-between items-center'),
          {width: 62},
        ]}>
        <Text style={[tailwind('font-regular text-dark-1 font-12 uppercase')]}>
          % VC BY
        </Text>
      </View>
    </View>
  );
};
