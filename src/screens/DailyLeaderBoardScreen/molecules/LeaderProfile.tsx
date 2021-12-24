import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {
  DownArrowIcon,
  IdleLevel,
  RankIcon,
  TopArrowIcon,
} from '../../../sharedComponents';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface PropTypes {
  levelStatus: any;
  isFirst: boolean;
  isSecond: boolean;
  isThird: boolean;
  type: number;
  showPoints: boolean;
}

export default function LeaderProfile(props: PropTypes) {
  const navigation = useNavigation<any>();

  const navigate = () => {
    if (props.type === 0) {
      navigation.navigate('LeaderProfileScreen', {
        type: props.type,
      });
    }
    if (props.type === 1) {
      navigation.navigate('LeaderProfileScreen', {
        type: props.type,
      });
    } else {
      navigation.navigate('LeaderProfileScreen', {
        type: props.type,
      });
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={navigate}
      style={[
        tailwind(
          'px-4 py-3 bg-dark-3 border-b border-gray-800 flex-row items-center',
        ),
      ]}>
      <View style={[tailwind('flex-row items-center'), {flex: 7}]}>
        <View style={[tailwind(''), {width: 40, height: 40}]}>
          <Image
            resizeMode="contain"
            source={assets.person}
            style={[tailwind('w-full h-full')]}
          />
        </View>
        <View style={[tailwind('px-2')]}>
          <Text style={[tailwind('font-regular uppercase text-white font-14')]}>
            Kairo
          </Text>
          <View style={[tailwind('flex-row items-center py-1')]}>
            <Text style={[tailwind('font-regular text-white font-12')]}>
              98678
            </Text>
            <Text
              style={[
                tailwind('font-regular uppercase px-2 text-dark-1 font-12'),
              ]}>
              Points
            </Text>
          </View>
          <View style={[tailwind('flex-row items-center flex-wrap')]}>
            <TeamTag teamCode="M1" />
            <TeamTag teamCode="M2" />
            <TeamTag teamCode="M3" />
          </View>
        </View>
      </View>

      <View style={[tailwind('flex-row items-center justify-end'), {flex: 4}]}>
        <View style={[tailwind('')]}>
          {props.isFirst && (
            <Image
              resizeMode="contain"
              source={assets.prize1}
              style={[{width: 39, height: 33}]}
            />
          )}
          {props.isSecond && (
            <Image
              resizeMode="contain"
              source={assets.prize2}
              style={[{width: 39, height: 33}]}
            />
          )}
          {props.isThird && (
            <Image
              resizeMode="contain"
              source={assets.prize3}
              style={[{width: 39, height: 33}]}
            />
          )}
        </View>

        {!props.isFirst && !props.isSecond && !props.isThird && (
          <View style={[tailwind('flex-row items-center px-2')]}>
            <RankIcon golden={true} />
            <Text style={[tailwind('font-regular text-white font-14')]}>
              10
            </Text>
          </View>
        )}
        {props.showPoints ? (
          <View>
            {props.levelStatus == null && (
              <View style={[tailwind('pl-1')]}>
                <IdleLevel />
              </View>
            )}
            {props.levelStatus === true && (
              <View style={[tailwind('pl-1')]}>
                <TopArrowIcon />
              </View>
            )}
            {props.levelStatus === false && (
              <View style={[tailwind('pl-1')]}>
                <DownArrowIcon />
              </View>
            )}
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const TeamTag = (props: any) => {
  return (
    <View
      style={[
        tailwind('bg-dark-4 py-0.5 mr-1'),
        {paddingHorizontal: 6, borderRadius: 2},
      ]}>
      <Text style={[tailwind('font-regular text-white font-12')]}>
        {props.teamCode}
      </Text>
    </View>
  );
};
