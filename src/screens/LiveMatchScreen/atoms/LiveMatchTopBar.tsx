import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import assets from '../../../constants/assets_manifest';
import {BackIcon, PointsIcon, StarIcon} from '../../../sharedComponents';

interface Props {
  teams?: Array<string>;
  text: string;
  closeicon?: boolean;
}

export default function LiveMatchTopBar(props: Props) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient colors={['#BCA04D', '#D8C872']}>
      <View
        style={[
          tailwind('flex-row items-center justify-between px-4'),
          {paddingVertical: 16},
        ]}>
        <View style={[tailwind('flex-row items-center')]}>
          <TouchableOpacity onPress={goBack}>
            <BackIcon />
          </TouchableOpacity>
          <View style={[tailwind('px-2')]}>
            <Text style={[tailwind('font-bold text-brown-4 font-16')]}>
              {props.text}
            </Text>
            <Text style={[tailwind('font-regular text-brown-4 font-11')]}>
              Entry {'\u20B9'} 0
            </Text>
          </View>
        </View>

        <View style={[tailwind('flex-row items-center')]}>
          <View style={[tailwind('px-2')]}>
            <StarIcon />
          </View>
          <PointsIcon Isbrown={true} />
        </View>
      </View>
    </LinearGradient>
  );
}
