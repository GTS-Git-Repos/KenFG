import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  teamname: string;
  teamcount: number;
  reverseUI: boolean;
}

export default function Team1(props: PropTypes) {
  return (
    <View
      style={[
        tailwind(
          `px-1 items-center ${
            props.reverseUI ? 'flex-row-reverse' : 'flex-row'
          }`,
        ),
        {flex: 6},
      ]}>
      <View
        style={[tailwind('flex-row justify-center items-center'), {flex: 8}]}>
        <View style={[tailwind('flex-col items-center')]}>
          <View style={styles.flagWrapper}>
            <FastImage
              style={{width: 45, height: 25}}
              source={{
                uri: `http://kenfg.com/images/flag/${props.teamname.toUpperCase()}`,
                priority: FastImage.priority.normal,
              }}
              // onError={e =>
              //   props.set_team_a_flag('http://kenfg.com/images/flag/IND.png')
              // }
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text
            allowFontScaling={true}
            adjustsFontSizeToFit={true}
            style={[tailwind('font-bold text-white py-1 uppercase font-12')]}>
            {props.teamname}
          </Text>
        </View>
      </View>
      <View
        style={[
          tailwind(
            `flex-row items-center justify-center ${
              props.reverseUI ? 'justify-end' : 'justify-center'
            }`,
          ),
          {flex: 4},
        ]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={
            props.reverseUI ? ['#872525', '#0D1320'] : ['#172338', '#254987']
          }
          style={[tailwind('rounded-full p-0.5 px-2')]}>
          <Text
            style={[
              tailwind(
                `font-bold text-white  font-20 ${
                  props.reverseUI ? 'text-left' : 'text-right'
                }`,
              ),
            ]}>
            {props.teamcount}
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flagWrapper: {
    width: 45,
    height: 25,
    backgroundColor: '#0c1320',
    borderRadius: 2,
  },
});
