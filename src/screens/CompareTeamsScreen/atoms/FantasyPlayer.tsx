import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image} from 'react-native';
import assets from '../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  player1?: string;
  player2?: string;
}

export default function FantasyPlayer(props: PropTypes) {
  return (
    <View style={[tailwind('pt-4 px-4 flex-row items-center')]}>
      <View style={[tailwind('px-1 flex-row items-center'), {flex: 6}]}>
        <View style={[tailwind(''), {flex: 7}]}>
          <Text numberOfLines={1} style={TEXTSTYLE}>
            {props.player1}
          </Text>
          <View
            style={[
              tailwind(
                'border border-gray-500 p-1 flex-row items-center justify-between rounded-2xl',
              ),
            ]}>
            <Text style={[tailwind('font-regular px-1 text-dark-1 font-15')]}>
              Team 1
            </Text>
            <Icon name="chevron-down-outline" size={20} color="gray" />
          </View>

          <Text
            style={[
              tailwind('font-regular text-light font-15 py-2 text-right'),
            ]}>
            #8368
          </Text>
        </View>
        {/* Image */}
        <View style={[tailwind('px-2'), {flex: 3}]}>
          <Image
            resizeMode="contain"
            source={assets.teamIndia}
            style={{width: '100%', height: 48}}
          />
        </View>
      </View>

      {/* Another Team */}

      <View style={[tailwind('px-1 flex-row items-center'), {flex: 6}]}>
        <View style={[tailwind('px-2'), {flex: 3}]}>
          <Image
            resizeMode="contain"
            source={assets.teamIndia}
            style={{width: '100%', height: 48}}
          />
        </View>
        <View style={[tailwind(''), {flex: 7}]}>
          <Text numberOfLines={1} style={TEXTSTYLE}>
            {props.player2}
          </Text>
          <View
            style={[
              tailwind(
                'border border-gray-500 p-1 flex-row items-center justify-between rounded-2xl',
              ),
            ]}>
            <Text style={[tailwind('font-regular px-1 text-dark-1 font-15')]}>
              Team 7
            </Text>
            <Icon name="chevron-down-outline" size={20} color="gray" />
          </View>

          <Text
            style={[
              tailwind('font-regular text-light font-15 py-2 text-left'),
            ]}>
            #1
          </Text>
        </View>
      </View>
    </View>
  );
}

const TEAMTAGSTYLE = tailwind(
  'font-regular text-center bg-secondary my-2 rounded py-0.5 px-2 font-15',
);
const TEXTSTYLE = [tailwind('font-bold py-2 text-light font-20')];

const IMAGESTYLE = [tailwind(''), {width: 50, height: 50}];

const RANKSTYLE = [tailwind('text-light font-bold font-15')];
