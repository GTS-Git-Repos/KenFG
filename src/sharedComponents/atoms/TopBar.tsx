import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface Props {
  text: string;
}

export default function TopBar(props: Props) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <View
      style={[
        tailwind('flex flex-row justify-between bg-primary items-center p-3'),
      ]}>
      <View style={[tailwind('flex-row items-center')]}>
        {navigation.canGoBack() ? (
          <TouchableOpacity onPress={goBack}>
            <Icon name="arrow-back-outline" size={25} color="white" />
          </TouchableOpacity>
        ) : null}

        <Text style={[tailwind('font-semibold text-white px-3 font-16')]}>
          {props.text}
        </Text>
      </View>
      <Text style={[tailwind('font-regular font-15')]}></Text>
    </View>
  );
}
