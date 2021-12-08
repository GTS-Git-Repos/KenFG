import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  teams: Array<string>;
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
