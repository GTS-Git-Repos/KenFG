import React from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  name: string;
  text?: string;
  cricket: boolean;
  setCricket(arg: boolean): void;
}

export default function LobbyNav(props: PropTypes) {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation<any>();

  return (
    <View style={[tailwind('bg-dark-3 pt-2 rounded-t-2xl '), styles.root]}>
      <View style={[tailwind('flex-row mx-6')]}>
        <LobbyUserInfo name={props.name} />

        <Cricket cricket={props.cricket} setCricket={props.setCricket} />
        <FootBall cricket={props.cricket} setCricket={props.setCricket} />
        <NotificationBell />
      </View>
    </View>
  );
}

const NotificationBell = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={[tailwind('flex-row justify-end items-center'), {flex: 1.5}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationScreen')}
        style={[tailwind('')]}>
        <Image
          resizeMode="contain"
          source={assets.notify}
          style={{width: 25, height: 25}}
        />
        <View
          style={[
            tailwind('w-3 h-3 absolute right-0 top-0 rounded-full bg-red-500'),
          ]}></View>
      </TouchableOpacity>
    </View>
  );
};

const FootBall = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => props.setCricket(false)}
      style={[
        tailwind('mx-2'),
        {flex: 3.25},
        props.cricket ? {} : styles.activeBorder,
      ]}>
      <View style={[tailwind('flex-row justify-center')]}>
        <Image
          resizeMode="contain"
          source={props.cricket ? assets.football_off : assets.football_on}
          style={[{width: 20, height: 20}]}
        />
      </View>
      <Text
        style={[
          tailwind(
            `font-bold text-center px-2 uppercase  py-0.5  text-xs font-11 tracking-widest`,
          ),
          {color: props.cricket ? '#BAC2C3' : '#BCA04D'},
        ]}>
        FootBall
      </Text>
    </TouchableOpacity>
  );
};

const Cricket = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => props.setCricket(true)}
      style={[
        tailwind('mx-2'),
        {flex: 3.25},
        props.cricket ? styles.activeBorder : {},
      ]}>
      <View style={[tailwind('flex-row justify-center')]}>
        <Image
          resizeMode="contain"
          source={props.cricket ? assets.cricket_on : assets.cricket_off}
          style={[{width: 20, height: 20}]}
        />
      </View>
      <Text
        style={[
          tailwind(
            `font-bold text-center px-2 uppercase  py-0.5  text-xs font-11 tracking-widest`,
          ),
          {letterSpacing: 1.3},
          {color: props.cricket ? '#BCA04D' : '#BAC2C3'},
        ]}>
        Cricket
      </Text>
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
          style={[tailwind('font-regular text-center text-light font-8')]}>
          Hi, {props.name} wsef
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    borderColor: '#202C43',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
  activeBorder: {
    borderColor: '#BCA04D',
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
  },
});
