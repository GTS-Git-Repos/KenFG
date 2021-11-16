import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import assets from '../../../constants/assets_manifest';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  player1?: string;
  player2?: string;
}

export default function FantasyPlayer(props: PropTypes) {
  return (
    <View style={[tailwind('p-3 bg-primary flex-row items-center')]}>
      <View style={[tailwind('flex-col items-start'), {flex: 5}]}>
        <View style={[tailwind('flex-row items-center')]}>
          <Image
            resizeMode="contain"
            source={assets.playerImage}
            style={IMAGESTYLE}
          />
          <Text numberOfLines={1} style={TEXTSTYLE}>
            {props.player1}
          </Text>
        </View>
        <Text style={TEAMTAGSTYLE}>Team 1</Text>
        <Text style={RANKSTYLE}># 32</Text>
      </View>
      <View style={[tailwind(''), {flex: 1}]}></View>

      <View style={[tailwind('flex-col items-start'), {flex: 5}]}>
        <View style={[tailwind('flex-row items-center')]}>
          <Text numberOfLines={1} style={TEXTSTYLE}>
            {props.player1}
          </Text>
          <Image
            resizeMode="contain"
            source={assets.playerImage}
            style={IMAGESTYLE}
          />
        </View>
        <Text style={[TEAMTAGSTYLE, tailwind('relative')]}>Team 1</Text>
        <Text style={RANKSTYLE}># 231</Text>
      </View>
    </View>
  );
}

const TEAMTAGSTYLE = tailwind(
  'font-regular text-center bg-secondary my-2 rounded py-0.5 px-2 font-15',
);
const TEXTSTYLE = [tailwind('font-regular text-light font-15'), {width: '70%'}];

const IMAGESTYLE = [tailwind(''), {width: 50, height: 50}];

const RANKSTYLE = [tailwind('text-light font-bold font-15')];
