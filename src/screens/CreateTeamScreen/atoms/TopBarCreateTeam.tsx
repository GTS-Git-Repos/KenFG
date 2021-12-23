import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../../constants/assets_manifest';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {BackIcon} from '../../../sharedComponents/';
import {useDispatch} from 'react-redux';
import {clearTeamAction} from '../../../store/actions/teamActions';

interface PropTypes {
  text?: string;
}

export default function TopBarCreateTeam(props: PropTypes) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function goBack() {
    dispatch(clearTeamAction());
    navigation.goBack();
  }
  return (
    <LinearGradient colors={['#BCA04D', '#D8C872']}>
      <View
        style={[
          tailwind('flex-row items-center justify-between px-2'),
          {paddingVertical: 16},
        ]}>
        <View style={[tailwind('flex-row items-center')]}>
          <TouchableOpacity onPress={goBack} style={[tailwind('pl-4 px-2')]}>
            <BackIcon />
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
