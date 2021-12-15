import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import assets from '../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {BackIcon, WalletIcon} from '../../sharedComponents';

interface PropTypes {
  title: string;
  subtitle: string;
}

export default function TopBarContest(props: PropTypes) {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#BCA04D', '#D8C872']}
      style={[tailwind('p-3 flex-row items-center justify-between')]}>
      <View style={[tailwind('flex flex-row items-center')]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>

        <View style={[tailwind('px-4')]}>
          <Text style={[tailwind('font-bold uppercase text-brown-4 font-17')]}>
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
          source={assets.newWallet}
          style={[tailwind(''), {width: 24, height: 24}]}
        />
      </View>
    </LinearGradient>
  );
}
