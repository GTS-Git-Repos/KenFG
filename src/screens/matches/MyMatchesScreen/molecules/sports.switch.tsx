import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {errorBox} from '../../../../utils/snakBars';
import assets from '../../../../constants/assets_manifest';
import clr from '../../../../constants/colors';

interface PropTypes {
  dT: boolean;
  cricketActive: boolean;
  setIsCricket(arg: boolean): void;
}

export default function MatchTypeSwitch(props: PropTypes) {
  const dT = props.dT;
  return (
    <View style={[dT ? styles.dRoot : styles.lRoot]}>
      <View style={[styles.ct]}>
        <View style={styles.space}></View>

        <Cricket
          cricket={props.cricketActive}
          setCricket={props.setIsCricket}
          dT={dT}
        />
        <FootBall
          cricket={props.cricketActive}
          setCricket={props.setIsCricket}
        />
        <View style={styles.space}></View>
      </View>
    </View>
  );
}

const FootBall = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => errorBox('Football Comming Soon !', 0)}
      style={[styles.option, props.cricket ? {} : styles.activeBorder]}>
      <View style={[styles.logoC]}>
        <Image
          resizeMode="contain"
          source={props.cricket ? assets.football_off : assets.football_on}
          style={[{width: 20, height: 20}]}
        />
      </View>
      <Text
        style={[
          styles.sportTxt,
          {color: props.cricket ? '#BAC2C3' : '#9C181E'},
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
      style={[styles.option, props.cricket ? styles.activeBorder : {}]}>
      <View style={[styles.logoC]}>
        <Image
          resizeMode="contain"
          source={props.cricket ? assets.cricket_on : assets.cricket_off}
          style={[styles.logo]}
        />
      </View>
      {props.dT ? (
        <Text
          style={[
            styles.sportTxt,
            {color: props.cricket ? '#BCA04D' : '#BAC2C3'},
          ]}>
          Cricket
        </Text>
      ) : (
        <Text
          style={[
            styles.sportTxt,
            {color: props.cricket ? '#9C181E' : '#FFFFFF'},
          ]}>
          Cricket
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dRoot: {
    borderColor: 'rgba(31, 41, 55, 1)',
    borderStyle: 'solid',
    borderRadius: 1,
    backgroundColor: '#0D1320',
    borderBottomWidth: 2,
    paddingTop: 6,
  },
  lRoot: {
    borderColor: '#E0E0E0',
    borderStyle: 'solid',
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    paddingTop: 6,
  },
  logoC: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 20,
    height: 20,
  },
  sportTxt: {
    fontFamily: 'gadugi-bold',
    textAlign: 'center',
    paddingHorizontal: 8,
    textTransform: 'uppercase',
    paddingVertical: 2,
    letterSpacing: 1.3,
    fontSize: 11,
  },
  activeBorder: {
    borderStyle: 'solid',
    borderRadius: 1,
    borderBottomWidth: 2,
    borderColor: '#D8C872',
  },
  dBorder: {
    borderColor: '#BCA04D',
  },
  lBorder: {
    borderColor: '#9C181E',
  },
  ct: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  space: {flex: 2.5},
  option: {
    marginHorizontal: 8,
    flex: 3.5,
  },
});
