import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import assets from '../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  title: string;
  subtitle: string;
}

export default function TopBarContest(props: PropTypes) {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#B2933D', '#C5A858']}
      style={[tailwind('p-3 flex-row items-center justify-between')]}>
      <View style={[tailwind('flex flex-row items-center')]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={25} color="#172339" />
        </TouchableOpacity>

        <View style={[tailwind('px-4')]}>
          <Text style={[tailwind('font-bold text-brown-4 font-18')]}>
            {props.title}
          </Text>
          <Text style={[tailwind('font-regular text-brown-5 pt-1 font-12')]}>
            {props.subtitle}
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex flex-row items-center')]}>
        <Image
          resizeMode="contain"
          source={assets.walletIcon}
          style={[tailwind(''), {width: 24, height: 24}]}
        />
      </View>
    </LinearGradient>
  );
}
