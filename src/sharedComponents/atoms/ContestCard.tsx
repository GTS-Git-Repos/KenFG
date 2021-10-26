import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import assets from '../../constants/assets_manifest';
interface PropTypes {
  text?: string;
}

export default function ContestCard(props: PropTypes) {
  return (
    <View style={[tailwind('pb-2')]}>
      <LinearGradient
        colors={['#172336', '#172239']}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.5]}
        style={[
          tailwind('bg-primary  border border-gray-800 rounded px-2 pt-1'),
        ]}>
        <View
          style={[tailwind('absolute right-0 flex flex-row justify-end p-1')]}>
          <Icon name="notifications-outline" size={15} color="white" />
        </View>
        <View style={[tailwind('flex flex-row pt-4')]}>
          <Text
            numberOfLines={1}
            allowFontScaling={true}
            adjustsFontSizeToFit={true}
            style={[
              tailwind('font-regular text-center font-12 text-gray-400'),
            ]}>
            World T20 Championship
          </Text>
        </View>

        <View
          style={[tailwind('flex flex-row justify-between py-2 items-center')]}>
          <View style={[tailwind('')]}>
            <Image
              resizeMode="contain"
              source={assets.south_africa_flag}
              style={[tailwind(''), {width: 40, height: 40}]}
            />
            <Text
              style={[
                tailwind('font-regular font-10 text-gray-400 text-center'),
              ]}>
              AUS
            </Text>
          </View>

          <Text style={[tailwind('font-regular text-gray-400 font-10')]}>
            VS
          </Text>

          <View style={[tailwind('')]}>
            <Image
              resizeMode="contain"
              source={assets.australia_flag}
              style={[tailwind(''), {width: 40, height: 40}]}
            />
            <Text
              style={[
                tailwind('font-regular font-10 text-gray-400 text-center'),
              ]}>
              AS
            </Text>
          </View>
        </View>

        {/* Contest Prize Info */}
        <View style={[tailwind('flex flex-row items-center justify-between')]}>
          <Text
            allowFontScaling={true}
            adjustsFontSizeToFit={true}
            style={[tailwind('font-regular font-10 text-gray-400')]}>
            T20 WorldCup
          </Text>
          <Text style={[tailwind('font-regular px-1 font-10 text-gray-400')]}>
            |
          </Text>
          <Text style={[tailwind('font-regular font-10'), {color: '#c4b76a'}]}>
            $ 20,000
          </Text>
        </View>

        {/* Count Down */}
        <View
          style={[
            tailwind(
              'flex flex-row items-center mx-4 mt-2 rounded-t-full justify-center',
            ),
            {backgroundColor: '#01694c'},
          ]}>
          <Text
            style={[tailwind('font-bold text-gray-100 text-center font-12')]}>
            3h:40:23
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}
