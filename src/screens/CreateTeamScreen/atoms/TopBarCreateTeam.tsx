import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  text?: string;
}

export default function TopBarCreateTeam(props: PropTypes) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }
  return (
    <LinearGradient colors={['#B2933D', '#C5A858']}>
      <View
        style={[
          tailwind('flex-row items-center justify-between px-2'),
          {paddingVertical: 16},
        ]}>
        <View style={[tailwind('flex-row items-center')]}>
          <TouchableOpacity onPress={goBack} style={[tailwind('px-4')]}>
            <Icon name="arrow-back-outline" size={25} color="#614920" />
          </TouchableOpacity>
          <Text style={[tailwind('font-bold text-brown-4 font-18')]}>
            15h 54m 36s Left
          </Text>
        </View>
        <View style={[tailwind('flex-row items-center')]}>
          <Image
            resizeMode="contain"
            source={assets.fantasy_points}
            style={[tailwind(''), {width: 30, height: 30}]}
          />
          <Image
            resizeMode="contain"
            source={assets.Info_Square}
            style={[
              tailwind(''),
              {width: 20, height: 20, paddingHorizontal: 26.5},
            ]}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
