import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  players: Array<any>;
}

export default function CommanPlayers(props: PropTypes) {
  console.log(tailwind('font-bold text-white text-center font-15'));

  return (
    <View style={[tailwind('bg-dark-3')]}>
      {props.players.map((item: any) => {
        return (
          <View key={item.key} style={[ss.playerRoot]}>
            <View style={[tailwind('flex-row'), {flex: 4}]}>
              <View>
                <Image
                  resizeMode="contain"
                  source={assets.player}
                  style={[{width: 40, height: 40}]}
                />
              </View>
              <View style={[tailwind('px-2')]}>
                <Text style={[ss.name]} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={[ss.role]}>IND BAT</Text>
              </View>
            </View>
            {/* Points */}
            <View style={{flex: 2}}>
              <Text style={[ss.playerPoint]}>{item.calc_points}</Text>
            </View>
            {/* Op Team players */}
            <View style={[tailwind('flex-row justify-between'), {flex: 4}]}>
              <View style={[tailwind('px-2')]}>
                <Text style={[ss.name]} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={[ss.role]}>IND BAT</Text>
              </View>
              <View>
                <Image
                  resizeMode="contain"
                  source={assets.player}
                  style={[{width: 40, height: 40}]}
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const ss = StyleSheet.create({
  name: {
    color: '#FFFFFF',
    fontFamily: 'gadugi-normal',
    fontSize: 14,
    width: 80,
  },
  role: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 12,
    paddingVertical: 4,
  },
  playerRoot: {
    alignItems: 'center',
    borderBottomColor: 'rgba(31, 41, 55, 1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 4,
  },
  playerPoint: {
    color: '#FFFFFF',
    fontFamily: 'gadugi-bold',
    fontSize: 15,
    textAlign: 'center',
  },
});
