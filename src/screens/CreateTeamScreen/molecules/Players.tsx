import React from 'react';
import tailwind from '../../../../tailwind';
import assets from '../../../constants/assets_manifest';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  player_id: string;
  teamname: string;
  image: string;
  name: string;
  info: string;
  anounced: boolean;
  points: number;
  credits: number;
  isSelected: boolean;
}

export default function Player(props: PropTypes) {
  return (
    <LinearGradient
      end={{x: 0.0, y: 0.5}}
      start={{x: 0.8, y: 3.0}}
      locations={[0.6, 0.5]}
      style={[tailwind('pt-5 flex-row')]}
      // colors={['red', 'green']}>
      colors={['#1C2B46', '#172338']}>
      {/* colors={['#172338', '#1C2B46']}> */}
      {/* Image */}
      <View style={[tailwind(''), {flex: 2}]}>
        <InfoIcon />
        <Image
          resizeMode="contain"
          source={assets.player}
          style={[tailwind(''), {height: 72, width: '100%'}]}
        />
        <TeamBadge team1={true} name="IND" />
      </View>
      <View style={[tailwind('pl-4'), {flex: 4}]}>
        <Text
          numberOfLines={1}
          style={[tailwind('font-bold text-light font-15 pb-0.5')]}>
          {props.name}
        </Text>
        <Text
          numberOfLines={1}
          style={[
            tailwind('font-regular text-light font-12 text-dark-1 py-1'),
          ]}>
          Sel by 33.4%
        </Text>
        <View style={[tailwind('flex-row items-center')]}>
          <View
            style={[
              tailwind('w-1 h-1 mr-2 rounded-full'),
              {backgroundColor: '#B2933D'},
            ]}></View>
          <Text
            numberOfLines={1}
            style={[tailwind('font-regular text-secondary font-10')]}>
            Played Last Match
          </Text>
        </View>
      </View>
      <View
        style={[tailwind('flex-col items-center justify-center'), {flex: 2}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-15')]}>
          {props.points}
        </Text>
      </View>
      <View
        style={[tailwind('flex-row justify-start items-center'), {flex: 2}]}>
        <Text
          style={[tailwind('font-bold px-2 text-center text-light font-17')]}>
          {props.credits}
        </Text>
        <AddButton />
      </View>
    </LinearGradient>
  );
}

const TeamBadge = (props: any) => {
  return (
    <View
      style={[
        tailwind('absolute bottom-0 rounded-t'),
        {backgroundColor: props.team1 ? '#244785' : '#70211E', padding: 3},
      ]}>
      <Text style={[tailwind('font-bold text-light font-9')]}>
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
          'flex-col items-center justify-center absolute rounded-l-lg py-2 right-0',
        ),
      ]}>
      <Icon name="add" color="white" size={24} />
    </LinearGradient>
  );
};

const InfoIcon = () => {
  return (
    <View style={[tailwind('absolute left-1 top-1')]}>
      <Image
        tintColor="#8797B"
        resizeMode="contain"
        source={assets.Info_Square}
        style={[tailwind(''), {width: 12, height: 12}]}
      />
    </View>
  );
};
