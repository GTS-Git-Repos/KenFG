import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import {RankIcon} from '../../../../sharedComponents';

interface PropTypes {
  player1: string;
  player2: string;
  srcTeam: TeamType;
  opTeam: TeamType;
  selectSheet: any;
  selectOpponentSheet: any;
}

interface TeamType {
  team_key: string;
  rank: string;
  points: number;
}

export default function FantasyPlayer(props: PropTypes) {

  return (
    <View style={[tailwind('pt-4 px-4 flex-row items-center')]}>
      <View style={[tailwind('px-1 flex-row items-center'), {flex: 6}]}>
        <View style={[tailwind(''), {flex: 7}]}>
          <Text numberOfLines={1} style={[ss.playerName]}>
            {props.player1}
          </Text>

          <TouchableOpacity
            onPress={() => props.selectSheet?.current?.open()}
            style={[ss.teamBorder]}>
            <Text style={[ss.teamKey]}>{props.srcTeam.team_key}</Text>
            <Icon name="chevron-down-outline" size={16} color="gray" />
          </TouchableOpacity>
          <View style={[tailwind('flex-row items-center justify-end')]}>
            <Text
              style={[
                tailwind(
                  'font-regular text-white font-15 py-2 px-1 text-right',
                ),
              ]}>
              {props.srcTeam.rank}
            </Text>
            <RankIcon golden={true} />
          </View>
        </View>
        {/* Image */}
        <View style={[tailwind('px-2'), {flex: 3}]}>
          <Image
            resizeMode="contain"
            source={assets.person}
            style={{width: 40, height: 40}}
          />
        </View>
      </View>

      {/* Another Team */}

      <View style={[tailwind('px-1 flex-row items-center'), {flex: 6}]}>
        <View style={[tailwind('px-2'), {flex: 3}]}>
          <Image
            resizeMode="contain"
            source={assets.person}
            style={{width: 40, height: 40}}
          />
        </View>
        <View style={[tailwind(''), {flex: 7}]}>
          <View style={[tailwind('items-end')]}>
            <Text numberOfLines={1} style={[ss.playerName]}>
              {props.player2}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => props.selectOpponentSheet?.current?.open()}
            style={[ss.teamBorder]}>
            <Text style={[ss.teamKey]}>{props.opTeam.team_key}</Text>
            <Icon name="chevron-down-outline" size={16} color="gray" />
          </TouchableOpacity>
          <View style={[tailwind('flex-row items-center')]}>
            <RankIcon golden={true} />
            <Text
              style={[
                tailwind('font-regular text-white font-15 py-2 px-1 text-left'),
              ]}>
              {props.opTeam.rank}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const ss = StyleSheet.create({
  playerName: {
    fontFamily: 'Gadugi-Bold',
    paddingVertical: 8,
    color: '#FFFFFF',
    fontSize: 18,
  },
  opPlayer: {},
  teamBorder: {
    alignItems: 'center',
    borderColor: 'rgba(107, 114, 128, 1)',
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
  teamKey: {
    color: '#8797B1',
    fontFamily: 'Gadugi-Normal',
    fontSize: 14,
    paddingHorizontal: 4,
    textTransform: 'uppercase',
  },
});
