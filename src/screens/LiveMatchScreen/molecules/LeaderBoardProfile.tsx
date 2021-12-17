import React from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  image: string;
  name: string;
  teamCode: string;
  points: number;
  rank: string;
}

export default function HorizontalProfile(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={[tailwind('px-4 bg-dark-3 flex-row items-center'), styles.root]}
      onPress={() => navigation.navigate('CompareTeamsScreen')}>
      <View style={[tailwind('flex-row items-center'), {flex: 5}]}>
        <Image
          resizeMode="contain"
          source={assets.player}
          style={[{width: 38, height: 38}]}
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
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});
