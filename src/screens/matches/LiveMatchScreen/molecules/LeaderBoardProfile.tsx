import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';
import {errorBox} from '../../../../utils/snakBars';

interface PropTypes {
  image: string;
  name: string;
  teamCode: string;
  points: number;
  rank: string;
  isComparisonActive: boolean;
  onPressCompareTeam(src_team_key: string, opp_team_key: string): void;
}

export default function HorizontalProfile(props: PropTypes) {
  return (
    <TouchableOpacity
      style={[
        styles.playerRoot,
        props.isComparisonActive && styles.playerRootSelected,
      ]}
      onPress={() => {
        props.isComparisonActive
          ? props.onPressCompareTeam('1', '1')
          : errorBox('Team preview is disable', 0);
      }}>
      <View style={[tailwind('flex-row items-center pt-2'), {flex: 5}]}>
        <Image
          resizeMode="contain"
          source={assets.person}
          style={[{width: 40, height: 40}]}
        />
        <View style={[tailwind('px-2 flex-row items-center')]}>
          <Text
            numberOfLines={1}
            style={[tailwind('font-bold text-white font-14')]}>
            {props.name}
          </Text>
          <TeamTag teamCode={props.teamCode} />
        </View>
      </View>

      <View style={[tailwind(''), {flex: 2}]}>
        <Text
          style={[tailwind('font-regular text-center text-dark-1 font-14')]}>
          {props.points}
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 3}]}>
        <Text style={[tailwind('font-bold text-center text-white font-14')]}>
          {props.rank}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const TeamTag = (props: any) => {
  return (
    <View style={[tailwind('px-1 mx-1 bg-dark-4 py-0.5')]}>
      <Text style={[tailwind('font-regular text-white font-12')]}>
        {props.teamCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderTopColor: '#8797B180',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  playerRoot: {
    alignItems: 'center',
    backgroundColor: '#172338',
    borderColor: 'rgba(31, 41, 55, 1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 16,
  },
  playerRootSelected: {
    backgroundColor: '#3C362C',
    opacity: 1,
  },
});
