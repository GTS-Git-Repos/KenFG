import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, StyleSheet, Image, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {CapIcon, VCIcon} from '../../../../assets/newIcons';

import {playerRole} from '../compare.team.controller';

interface PropTypes {
  srcTeamPlayers: Array<any>;
  oppTeamPlayers: Array<any>;
}

export default function DiffPlayers(props: PropTypes) {
  // console.log(JSON.stringify(props.srcTeamPlayers));

  return (
    <View style={[tailwind('bg-dark-3 flex-row')]}>
      <View style={[{flex: 4.9}]}>
        {/* Players */}
        {props.srcTeamPlayers.map((item: any) => {
          return (
            <View
              key={item.key}
              style={[ss.playerRoot, tailwind('border-b border-gray-800')]}>
              <View style={[{flex: 2.5}]}>
                <Image
                  resizeMode="contain"
                  source={assets.player}
                  style={[{width: 40, height: 40}]}
                />
                <View style={[tailwind('absolute inset-0')]}>
                  {item.cap && <CapIcon white={false} />}
                  {item.vc && <VCIcon white={false} />}
                </View>
              </View>
              <View style={[tailwind('px-2'), {flex: 6.5}]}>
                <Text style={[ss.name]} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={[ss.role]}>
                  {playerRole(item.team_key, item.seasonal_role)}
                </Text>
              </View>
              {/* Points */}
              <View style={[tailwind(''), {flex: 1.5}]}>
                <Text style={[ss.playerPoint]}>{item.calc_points}</Text>
              </View>
            </View>
          );
        })}
      </View>

      <View style={[tailwind('bg-gray-800'), {flex: 0.05}]}></View>

      <View style={[{flex: 4.9}]}>
        {/* op players */}
        {props.oppTeamPlayers.map((item: any) => {
          return (
            <View
              key={item.key}
              style={[ss.playerRoot, tailwind('border-b border-gray-800')]}>
              {/* Points */}
              <View style={[tailwind(''), {flex: 1.5}]}>
                <Text style={ss.playerPoint}>{item.calc_points}</Text>
              </View>
              <View style={[tailwind('px-2'), {flex: 6.5}]}>
                <Text style={[ss.name]} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={[ss.role]}>
                  {playerRole(item.team_key, item.seasonal_role)}
                </Text>
              </View>
              <View style={[{flex: 2.5}]}>
                <Image
                  resizeMode="contain"
                  source={assets.player}
                  style={[{width: 40, height: 40}]}
                />
                <View style={[tailwind('absolute inset-0')]}>
                  {item.cap && <CapIcon white={false} />}
                  {item.vc && <VCIcon white={false} />}
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  name: {
    color: '#FFFFFF',
    fontFamily: 'Gadugi-Normal',
    fontSize: 14,
    width: 75,
  },
  role: {
    color: '#8797B1',
    fontFamily: 'Gadugi-Normal',
    fontSize: 12,
    paddingVertical: 4,
  },
  playerRoot: {
    flexDirection: 'row',
    paddingHorizontal: 2,
    paddingTop: 6,
  },
  playerPoint: {
    color: '#FFFFFF',
    fontFamily: 'Gadugi-Bold',
    fontSize: 12,
    paddingTop: 4,
    textAlign: 'center',
  },
});
