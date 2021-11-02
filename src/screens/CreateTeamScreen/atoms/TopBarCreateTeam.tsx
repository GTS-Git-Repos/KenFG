import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface PropTypes {
  text?: string;
}

export default function TopBarCreateTeam(props: PropTypes) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }
  return (
    <View style={[tailwind('flex-row items-center justify-between py-2 px-2')]}>
      <TouchableOpacity onPress={goBack}>
        <Icon name="arrow-back-outline" size={25} color="white" />
      </TouchableOpacity>
      <Text style={[tailwind('font-regular text-primary'), {fontSize: 18}]}>
        15h 54m 76s Left
      </Text>
      <TouchableOpacity>
        <Icon name="help-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}
