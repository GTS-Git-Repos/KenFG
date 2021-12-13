import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import assets from '../../constants/assets_manifest';

interface Props {
  teams?: Array<string>;
  text: string;
  closeicon?: boolean;
}

export default function TopBar(props: Props) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient colors={['#BCA04D', '#D8C872']}>
      <View
        style={[
          tailwind('flex-row items-center justify-between px-2'),
          {paddingVertical: 18},
        ]}>
        <View style={[tailwind('flex-row items-center')]}>
          <TouchableOpacity onPress={goBack}>
            <Image
              resizeMode="contain"
              source={assets.arrow_left}
              style={[tailwind('px-4'), {width: 20, height: 20}]}
            />
          </TouchableOpacity>
          <View style={[tailwind('px-2')]}>
            <Text style={[tailwind('font-bold text-brown-4 font-16')]}>
              {props.text}
            </Text>
            {props.teams && (
              <Text
                style={[tailwind('font-bold text-brown-4 uppercase font-12')]}>
                {props.teams[0]} vs {props.teams[1]}
              </Text>
            )}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
