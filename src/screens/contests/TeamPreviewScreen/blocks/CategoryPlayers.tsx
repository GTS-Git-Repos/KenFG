import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {CapIcon, VCIcon} from '../../../../assets/newIcons';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  cap_key: string;
  vc_key: string;
  title: string;
  players: any;
  team_a: string;
  onPressPlayerProfile(player_key: string): any;
}

interface PlayerPropTypes {
  player_key: string;
  image: string;
  name: string;
  amount: string;
  isteam_a: boolean;
  isCaptain: boolean;
  isViceCaptain: boolean;
  onPressPlayerProfile(player_key: string): any;
}

export default function CategoryPlayers(props: PropTypes) {
  return (
    <View style={[tailwind('py-2')]}>
      <View style={[tailwind('')]}>
        <Text
          style={[
            tailwind('font-regular text-light text-center font-12 py-1'),
          ]}>
          {props.title}
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[tailwind('mx-28 my-1')]}
          colors={['#8797B14D', '#FFFFFF4D', '#FFFFFF4D', '#8797B14D']}>
          <View style={[tailwind(''), {height: 1}]}></View>
        </LinearGradient>
      </View>

      <View
        style={[tailwind('flex-row justify-center flex-wrap items-center')]}>
        {props.players.map((item: any) => {
          return (
            <PlayerProfile
              key={item.key}
              player_key={item.key}
              isteam_a={item.team_key === props.team_a}
              image={''}
              name={item.name}
              amount={'8.4 crore'}
              isCaptain={props.cap_key === item.key}
              isViceCaptain={props.vc_key === item.key}
              onPressPlayerProfile={props.onPressPlayerProfile}
            />
          );
        })}
      </View>
    </View>
  );
}

const PlayerProfile = (props: PlayerPropTypes) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPressPlayerProfile(props.player_key)}
      style={[tailwind('flex-col px-2 items-center')]}>
      <Image
        resizeMode="contain"
        source={assets.player}
        style={[tailwind(''), {width: 48, height: 48}]}
      />
      <Name isteam_a={props.isteam_a} name={props.name} />
      <Text style={[tailwind('font-regular font-7 text-light')]}>
        {props.amount}
      </Text>
      {props.isCaptain && (
        <View style={[tailwind('absolute left-2')]}>
          <CapIcon white={true} />
        </View>
      )}

      {props.isViceCaptain && (
        <View style={[tailwind('absolute left-2')]}>
          <VCIcon white={true} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const Name = (props: any) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[
        tailwind('px-2 bottom-1 py-1 border-2 border-green-600'),
        styles.tag,
      ]}
      colors={props.isteam_a ? ['#172338', '#254987'] : ['#73221D', '#172338']}>
      <Text
        numberOfLines={1}
        style={[
          tailwind('font-bold text-light text-center font-10'),
          {width: 60},
        ]}>
        {props.name}
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  tag: {
    borderTopColor: '#00513B',
    borderLeftColor: '#00513B',
    borderRightColor: '#00513B',
    borderBottomColor: '#00513B',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 42,
  },
});
