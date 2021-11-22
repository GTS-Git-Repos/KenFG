import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  text: string;
  closeicon?: boolean;
}

export default function TopBar(props: Props) {
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
          <TouchableOpacity onPress={goBack}>
            <Icon
              name={props.closeicon ? 'close-outline' : 'arrow-back-outline'}
              size={25}
              color="#172339"
            />
          </TouchableOpacity>
          <Text style={[tailwind('font-bold text-brown-4 px-2 font-18')]}>
            {props.text}
          </Text>
          <Text style={[tailwind('font-regular font-15')]}></Text>
        </View>
      </View>
    </LinearGradient>
  );
}
