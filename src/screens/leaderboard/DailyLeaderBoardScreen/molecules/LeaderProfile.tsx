import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, StyleSheet, Text} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {
  DownArrowIcon,
  RankIcon,
  TopArrowIcon,
} from '../../../../assets/newIcons';
import {IdleLevel, TeamCode} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import clr from '../../../../constants/colors';

interface PropTypes {
  levelStatus: any;
  isFirst: boolean;
  isSecond: boolean;
  isThird: boolean;
  type: number;
  showPoints: boolean;
  showteams: boolean;
  dT: boolean;
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
      style={[props.dT ? ss.dRoot : ss.lRoot]}>
      <View style={[tailwind('flex-row items-center'), {flex: 7}]}>
        <View style={[tailwind(''), {width: 40, height: 40}]}>
          <Image
            resizeMode="contain"
            source={assets.person}
            style={[tailwind('w-full h-full')]}
          />
        </View>
        <View style={[tailwind('px-2')]}>
          <Text
            style={[
              tailwind('font-regular uppercase font-14'),
              props.dT ? clr.tw : clr.td1,
            ]}>
            Kairo
          </Text>
          <View style={[tailwind('flex-row items-center py-1')]}>
            <Text
              style={[
                tailwind('font-regular font-12'),
                props.dT ? clr.tw : clr.td1,
              ]}>
              98678
            </Text>
            <Text
              style={[
                tailwind('font-regular uppercase px-2 text-dark-1 font-12'),
              ]}>
              Points
            </Text>
          </View>
          {props.showteams && (
            <View style={[tailwind('flex-row items-center flex-wrap')]}>
              <TeamCode code="M1" />
              <TeamCode code="M2" />
              <TeamCode code="M3" />
            </View>
          )}
        </View>
      </View>

      <View style={[tailwind('flex-row items-center justify-end'), {flex: 3}]}>
        <View
          style={[
            tailwind(
              `flex-row justify-center ${
                props.showPoints ? 'justify-center' : 'justify-end'
              }`,
            ),
            {flex: props.showPoints ? 9 : 1},
          ]}>
          {!props.isFirst && !props.isSecond && !props.isThird ? (
            <RankPoints />
          ) : null}
          {props.isFirst ? (
            <Image
              resizeMode="contain"
              source={assets.prize1}
              style={[{width: 33, height: 33}]}
            />
          ) : null}
          {props.isSecond ? (
            <Image
              resizeMode="contain"
              source={assets.prize2}
              style={[{width: 33, height: 33}]}
            />
          ) : null}
          {props.isThird ? (
            <Image
              resizeMode="contain"
              source={assets.prize3}
              style={[{width: 33, height: 33}]}
            />
          ) : null}
        </View>
        {props.showPoints && (
          <View
            style={[tailwind('flex-row items-center justify-end'), {flex: 1}]}>
            {props.levelStatus === null ? <IdleLevel /> : null}
            {props.levelStatus === true ? <TopArrowIcon /> : null}
            {props.levelStatus === false ? (
              <DownArrowIcon invert={false} />
            ) : null}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const RankPoints = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center')]}>
      <RankIcon golden={true} />
      <Text
        style={[
          tailwind('font-regular pl-1 font-14'),
          props.dT ? clr.tw : clr.td1,
        ]}>
        10
      </Text>
    </View>
  );
};

const ss = StyleSheet.create({
  dRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#0c1320',
  },
  lRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(31, 41, 55,0.1)',
    borderTopWidth: 1,
  },
});
