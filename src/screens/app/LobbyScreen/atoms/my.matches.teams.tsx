import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Image, Text, StyleSheet} from 'react-native';
import assets from '../../../../constants/assets_manifest';
import FastImage from 'react-native-fast-image';

interface PropTypes {
  team_a: any;
  team_b: any;
  status: string;
  countDown: string;
}

export default function Teams(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row'), {paddingTop: 3}]}>
      <View style={[tailwind('flex-row'), {flex: 4}]}>
        <View
          style={[
            tailwind('bg-blue-900'),
            {width: 10, height: 14, top: 24 / 4.3},
          ]}></View>
        <View>
          <View style={[styles.flagWrapper]}>
            <FastImage
              style={{width: 45, height: 25}}
              source={{
                uri: `http://kenfg.com/images/flag/${props?.team_a?.code?.toUpperCase()}`,
                priority: FastImage.priority.normal,
              }}
              // onError={e =>
              //   props.set_team_a_flag('http://kenfg.com/images/flag/IND.png')
              // }
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text
            style={[
              tailwind(
                'font-bold text-center uppercase py-0.5 text-light font-12',
              ),
            ]}>
            {props.team_a.code}
          </Text>
        </View>
      </View>

      {/* Count down */}

      <View style={[tailwind('justify-between items-center'), {flex: 4}]}>
        {props.status === 'completed' ? (
          <IsCompleted />
        ) : (
          <CountDown countDown={props.countDown} />
        )}

        {/* <IsLive /> */}
      </View>

      <View style={[tailwind('flex-row justify-end'), {flex: 4}]}>
        <View>
          <View style={[styles.flagWrapper]}>
            <FastImage
              style={{width: 45, height: 25}}
              source={{
                uri: `http://kenfg.com/images/flag/${props?.team_b?.code?.toUpperCase()}`,
                priority: FastImage.priority.normal,
              }}
              // onError={e =>
              //   props.set_team_a_flag('http://kenfg.com/images/flag/IND.png')
              // }
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text
            style={[
              tailwind(
                'font-bold text-center uppercase py-0.5 text-light font-12',
              ),
            ]}>
            {props.team_b.code}
          </Text>
        </View>
        <View
          style={[
            tailwind('bg-red-700'),
            {width: 10, height: 14, top: 25 / 4},
          ]}></View>
      </View>
    </View>
  );
}

const IsLive = () => {
  return (
    <View style={[tailwind('flex-row pt-2 items-center')]}>
      <Text
        style={[
          tailwind('font-regular text-center pr-1 font-10'),
          {fontSize: 13, color: '#FEFEFF'},
        ]}>
        LIVE
      </Text>
      <View
        style={[
          tailwind('rounded-full'),
          {backgroundColor: 'green', width: 5, height: 5},
        ]}></View>
    </View>
  );
};

const IsCompleted = () => {
  return (
    <View style={[tailwind('flex-row pt-2 items-center')]}>
      <Text
        style={[
          tailwind('font-regular text-center pr-1 font-10'),
          {fontSize: 13, color: '#FEFEFF'},
        ]}>
        COMPLETED
      </Text>
      <View
        style={[
          tailwind('rounded-full'),
          {backgroundColor: 'green', width: 5, height: 5},
        ]}></View>
    </View>
  );
};

const CountDown = (props: any) => {
  return (
    <View style={[tailwind('flex-row pt-2')]}>
      <Image
        resizeMode="contain"
        source={assets.running_clock}
        style={[tailwind(''), {width: 16, height: 16}]}
      />
      <Text style={[tailwind('font-bold text-white font-13 px-1')]}>
        {props.countDown}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flagWrapper: {
    width: 45,
    height: 25,
    backgroundColor: '#0c1320',
    borderRadius: 2,
  },
});
