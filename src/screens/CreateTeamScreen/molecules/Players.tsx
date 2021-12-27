import React from 'react';
import tailwind from '../../../../tailwind';
import assets from '../../../constants/assets_manifest';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {BottomLine} from '../../../sharedComponents';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  player_key: string;
  teamname: string;
  image: string;
  name: string;
  role: string;
  info: string;
  anounced: boolean;
  points: number;
  credits: number;
  isSelected: boolean;
  canBeSelected: boolean;
  team_a: string;
  team_b: string;
  checkPlayerSelection(player_key: string, player_role: string): void;
  status(player_key: string, player_role: string, team_key: string): void;
}

export default function Player(props: PropTypes) {
  const navigation = useNavigation<any>();

  return (
    <View>
      <View
        style={[
          tailwind('pt-3 flex-row border-b border-gray-800'),
          {
            backgroundColor: props.isSelected ? '#3C362C' : '#172338',
            // opacity: props.canBeSelected ? 1 : 0.3,
          },
          // true ? styles.disabledUser : {},
        ]}>
        {/* Image */}
        <TouchableOpacity
          onPress={() => navigation.navigate('PlayerProfileScreen')}
          activeOpacity={0.5}
          style={[tailwind('ml-4'), {flex: 2}]}>
          <Image
            resizeMode="contain"
            source={assets.player}
            style={[tailwind(''), {height: 62, width: 70}]}
          />
          <TeamBadge
            name={props.teamname}
            team_a={props.teamname === props.team_a}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            props.checkPlayerSelection(props.player_key, props.role)
          }
          style={[tailwind('flex-row'), {flex: 8}]}>
          {/* name */}
          <View style={[tailwind('pl-4'), {flex: 4}]}>
            <Text
              numberOfLines={1}
              style={[tailwind('font-bold text-light font-14 pb-0.5')]}>
              {props.name}
            </Text>
            <Text
              numberOfLines={1}
              style={[
                tailwind('font-regular text-light font-11 text-dark-1 py-1'),
              ]}>
              {props.info}
            </Text>
            <View style={[tailwind('flex-row items-center')]}>
              <View
                style={[
                  tailwind('w-1 h-1 mr-2 rounded-full'),
                  {backgroundColor: '#B2933D'},
                ]}></View>
              <Text
                numberOfLines={1}
                style={[
                  tailwind('font-regular font-9'),
                  {
                    color: '#B2933D',
                  },
                ]}>
                Played Last Match
              </Text>
            </View>
          </View>

          {/* Points */}
          <View
            style={[
              tailwind('flex-col items-start  justify-center'),
              {flex: 2},
            ]}>
            <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
              {props.points}
            </Text>
          </View>

          {/* credits */}

          <View style={[tailwind('flex-row items-center'), {flex: 2}]}>
            <Text
              style={[
                tailwind('font-bold px-2 text-white text-right font-13'),
              ]}>
              {props.credits}
            </Text>
            {props.isSelected ? <AddedButton /> : <AddButton />}
          </View>
        </TouchableOpacity>
      </View>

      {/* <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[tailwind('')]}
        colors={['#172338B3', '#FFFFFF4D', '#172338B3']}>
        <View style={[tailwind(''), {height: 0.5}]}></View>
      </LinearGradient> */}
    </View>
  );
}

const TeamBadge = (props: any) => {
  return (
    <View
      style={[
        tailwind('absolute bottom-0 rounded-t'),
        {backgroundColor: props.team_a ? '#244785' : '#70211E', padding: 3},
      ]}>
      <Text style={[tailwind('font-bold uppercase text-light font-9')]}>
        {props.name}
      </Text>
    </View>
  );
};

const AddButton = (props: any) => {
  return (
    <LinearGradient
      colors={['#006A4D', '#00513B']}
      style={[
        tailwind(
          'flex-col items-center justify-center absolute rounded-l-lg px-1 right-0',
        ),
      ]}>
      <Icon name="add" color="white" size={20} />
    </LinearGradient>
  );
};

const AddedButton = (props: any) => {
  return (
    <LinearGradient
      colors={['#816D2E', '#614920']}
      style={[
        tailwind(
          'flex-col items-center justify-center absolute rounded-l-lg px-1 right-0',
        ),
      ]}>
      <Icon name="remove" color="white" size={20} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  disabledUser: {
    // backgroundColor: 'rgba(255,255,255,0.)',
    // opacity: 0.3,
  },
});
