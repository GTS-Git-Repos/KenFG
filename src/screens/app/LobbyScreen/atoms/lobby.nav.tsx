import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import {NotificationIcon} from '../../../../assets/newIcons';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  name: string;
  text?: string;
  cricket: boolean;
  setCricket(arg: boolean): void;
}

export default function LobbyNav(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.rootRadius, dT ? clr.bgg : clr.bgRed]}>
      <View style={[ss.sR, dT ? clr.bgd2 : clr.bgw]}>
        <View style={[tailwind('pt-2'), ss.root]}>
          <View style={[tailwind('flex-row mx-6')]}>
            <LobbyUserInfo dT={dT} name={props.name} />

            <Cricket
              dT={dT}
              cricket={props.cricket}
              setCricket={props.setCricket}
            />
            <FootBall
              dT={dT}
              cricket={props.cricket}
              setCricket={props.setCricket}
            />
            <NotificationBell dT={dT} dot={true} />
          </View>
        </View>
      </View>
    </View>
  );
}

const NotificationBell = (props: any) => {
  const navigation = useNavigation<any>();

  return (
    <View style={[tailwind('flex-row justify-end items-center'), {flex: 1.5}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationScreen')}
        style={[tailwind('')]}>
        <NotificationIcon outline={false} isDark={props.dT} sizeSmall={false} />
        {props.dot && <View style={[ss.nDot, !props.dT && clr.bgg]}></View>}
      </TouchableOpacity>
    </View>
  );
};

const Cricket = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => props.setCricket(true)}
      style={[
        tailwind('mx-2'),
        {flex: 3.25},
        props.cricket ? ss.activeBorder : {},
      ]}>
      <View style={[tailwind('flex-row justify-center')]}>
        <Image
          resizeMode="contain"
          source={props.cricket ? assets.cricket_on : assets.cricket_off}
          style={[{width: 20, height: 20}]}
        />
      </View>
      {props.dT ? (
        <Text style={[ss.sportName, props.cricket ? clr.tgl : clr.tdgray]}>
          Cricket
        </Text>
      ) : (
        <Text style={[ss.sportName, props.cricket ? clr.tr : clr.tdgray]}>
          Cricket
        </Text>
      )}
    </TouchableOpacity>
  );
};

const FootBall = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => props.setCricket(false)}
      style={[
        tailwind('mx-2'),
        {flex: 3.25},
        props.cricket ? {} : ss.activeBorder,
      ]}>
      <View style={[tailwind('flex-row justify-center')]}>
        <Image
          resizeMode="contain"
          source={props.cricket ? assets.football_off : assets.football_on}
          style={[{width: 20, height: 20}]}
        />
      </View>
      {props.dT ? (
        <Text style={[ss.sportName, !props.cricket ? clr.tgl : clr.tdgray]}>
          FootBall
        </Text>
      ) : (
        <Text style={[ss.sportName, !props.cricket ? clr.tr : clr.tdgray]}>
          FootBall
        </Text>
      )}
    </TouchableOpacity>
  );
};

const LobbyUserInfo = (props: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      style={[tailwind(''), {flex: 2}]}
      onPress={() => navigation.openDrawer()}>
      <View style={[tailwind('ml-2 pb-0.5')]}>
        <Image
          resizeMode="contain"
          source={assets.profile_round}
          style={[
            {
              width: 25,
              height: 25,
            },
          ]}
        />
      </View>
      <View style={[tailwind('w-8/12')]}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            tailwind('font-regular text-center font-8'),
            props.dT ? clr.tw : clr.td1,
          ]}>
          Hi, {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const ss = StyleSheet.create({
  rootRadius: {
    paddingTop: 4,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    bottom: 6,
  },
  root: {
    borderColor: '#202C43',
    borderStyle: 'solid',
    borderRadius: 1,
  },

  sR: {
    paddingTop: 4,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
  },
  activeBorder: {
    borderColor: '#BCA04D',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
  nDot: {
    backgroundColor: 'rgba(239, 68, 68, 1)',
    borderRadius: 100,
    height: 12,
    width: 12,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  sportName: {
    fontFamily: 'gadugi-bold',
    fontSize: 11,
    letterSpacing: 1.3,
    lineHeight: 16,
    paddingVertical: 2,
    paddingHorizontal: 8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
