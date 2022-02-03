import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import {RankIcon} from '../../../../sharedComponents';

interface PropTypes {
  player1?: string;
  player2?: string;
  selectSheet: any;
  selected_team: any;
  op_team: any;
  selectOpponentSheet: any;
}

export default function FantasyPlayer(props: PropTypes) {
  return (
    <View style={[tailwind('pt-4 px-4 flex-row items-center')]}>
      <View style={[tailwind('px-1 flex-row items-center'), {flex: 6}]}>
        <View style={[tailwind(''), {flex: 7}]}>
          <Text numberOfLines={1} style={TEXTSTYLE}>
            {props.player1}
          </Text>

          <TouchableOpacity
            onPress={() => props.selectSheet?.current?.open()}
            style={[
              tailwind(
                'border border-gray-500 p-1 flex-row items-center justify-between rounded-2xl',
              ),
            ]}>
            <Text
              style={[
                tailwind('font-regular px-1 uppercase text-dark-1 font-14'),
              ]}>
              {props.selected_team.team_key}
            </Text>
            <Icon name="chevron-down-outline" size={16} color="gray" />
          </TouchableOpacity>
          <View style={[tailwind('flex-row items-center justify-end')]}>
            <Text
              style={[
                tailwind(
                  'font-regular text-light font-15 py-2 px-1 text-right',
                ),
              ]}>
              {props.selected_team.team_rank}
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
          <Text numberOfLines={1} style={TEXTSTYLE}>
            {props.player2}
          </Text>
          <TouchableOpacity
            onPress={() => props.selectOpponentSheet?.current?.open()}
            style={[
              tailwind(
                'border border-gray-500 p-1 flex-row items-center justify-between rounded-2xl',
              ),
            ]}>
            <Text
              style={[
                tailwind('font-regular uppercase px-1 text-dark-1 font-14'),
              ]}>
              {props.op_team.team_key}
            </Text>
            <Icon name="chevron-down-outline" size={16} color="gray" />
          </TouchableOpacity>
          <View style={[tailwind('flex-row items-center')]}>
            <RankIcon golden={true} />
            <Text
              style={[
                tailwind('font-regular text-light font-15 py-2 px-1 text-left'),
              ]}>
              {props.op_team.team_rank}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const TEAMTAGSTYLE = tailwind(
  'font-regular text-center bg-secondary my-2 rounded py-0.5 px-2 font-15',
);
const TEXTSTYLE = [tailwind('font-bold py-2 text-light font-18')];

const IMAGESTYLE = [tailwind(''), {width: 50, height: 50}];

const RANKSTYLE = [tailwind('text-light font-bold font-15')];
