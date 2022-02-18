import React from 'react';
import tailwind from '../../../../../tailwind';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {errorBox} from '../../../../utils/snakBars';
import assets from '../../../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';

interface PropTypes {
  cricketActive: boolean;
  setIsCricket(arg: boolean): void;
}

export default function MatchTypeSwitch(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-3 pt-2'), styles.root]}>
      <View style={[tailwind('flex-row mx-6')]}>
        <View style={{flex: 2.5}}></View>

        <Cricket
          cricket={props.cricketActive}
          setCricket={props.setIsCricket}
        />
        <FootBall
          cricket={props.cricketActive}
          setCricket={props.setIsCricket}
        />
        <View style={{flex: 2.5}}></View>
      </View>
    </View>
  );
}

const FootBall = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => errorBox('Football Comming Soon !', 0)}
      style={[
        tailwind('mx-2'),
        {flex: 3.5},
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
        {flex: 3.5},
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

const styles = StyleSheet.create({
  root: {
    borderColor: 'rgba(31, 41, 55, 1)',
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
  dBorder:{

  },
});
