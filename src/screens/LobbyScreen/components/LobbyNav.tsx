import React from 'react';
import tailwind from '../../../../tailwind';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
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
    <View style={[tailwind('')]}>
      <View style={[tailwind('bg-dark-3 pt-3 rounded-t-2xl  flex-row')]}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={[
            tailwind('flex-col items-center'),
            {width: width / 5.5, left: 16},
          ]}>
          <Image
            resizeMode="contain"
            source={assets.profile_round}
            style={[tailwind('w-7 h-7 relative bottom-1')]}
          />
          <Text
            numberOfLines={1}
            style={[tailwind('font-regular text-light font-10')]}>
            Hi, {props.name}
          </Text>
        </TouchableOpacity>

        <View style={[tailwind(''), {flex: 1}]}>
          <View style={[tailwind('flex-row items-center')]}>
            <TouchableOpacity
              onPress={() => props.setCricket(true)}
              style={[
                tailwind('flex-col items-center border-b-2 mb-0.5'),
                {
                  borderBottomColor: props.cricket ? '#162238' : 'transparent',
                  flex: 6,
                  paddingLeft: 10,
                },
              ]}>
              <Image
                resizeMode="contain"
                source={props.cricket ? assets.cricket_on : assets.cricket_off}
                style={[{width: 20, height: 20}]}
              />
              <Text
                style={[
                  tailwind(
                    `font-bold text-center px-2 py-0.5 uppercase text-xs font-11 tracking-widest ${
                      props.cricket ? 'text-brown-2' : 'text-dark-1'
                    }`,
                  ),
                  {letterSpacing: 1.3},
                ]}>
                Cricket
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => props.setCricket(false)}
              style={[
                tailwind('flex flex-col items-center border-b-2 mb-0.5'),
                {
                  borderBottomColor: !props.cricket ? '#162238' : 'transparent',
                  flex: 6,
                },
              ]}>
              <Image
                resizeMode="contain"
                source={
                  props.cricket ? assets.football_off : assets.football_on
                }
                style={[{width: 20, height: 20}]}
              />
              <Text
                style={[
                  tailwind(
                    `font-bold text-center px-2 uppercase  py-0.5  text-xs font-11 tracking-widest ${
                      props.cricket ? 'text-dark-1' : 'text-brown-3'
                    }`,
                  ),
                ]}>
                FootBall
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            tailwind('flex-col items-center justify-end'),
            {width: width / 5.5},
          ]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('NotificationScreen')}
            style={[tailwind('relative bottom-2')]}>
            <Image
              resizeMode="contain"
              source={assets.notify}
              style={{width: 28, height: 28}}
            />
            <View
              style={[
                tailwind(
                  'w-3 h-3 absolute right-0 top-0 rounded-full bg-red-500',
                ),
              ]}></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

{
  /* <View
            style={{
              width: 0,
              height: 4,
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderRightWidth: 20,
              borderTopWidth: 10,
              borderRightColor: '#172339',
              borderTopColor: 'transparent',
            }}></View> */
}

{
  /* <LinearGradient
start={{x: 0, y: 0}}
end={{x: 1, y: 0}}
style={[tailwind('')]}
colors={['#172338', '#FFFFFF', '#172338']}>
<View style={[tailwind(''), {height: 0.5}]}></View>
</LinearGradient> */
}
