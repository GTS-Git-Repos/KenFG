import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tailwind from '../../../tailwind';
import {useIsScreenReady} from '../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';

// import assets from 'assets';
import {TopBar} from '../../sharedComponents/';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const log = console.log;

export default function NotificationScreen() {
  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark flex-col  justify-between')}>
      <TopBar text={'Notifications'} />

      <View style={[tailwind('flex-col items-center')]}>
        <Icon name="notifications-outline" size={40} color="#B2933D" />
        <Text style={[tailwind('font-regular py-3 text-dark-1 font-20')]}>
          No Notifications
        </Text>
        <Text style={[tailwind('font-regular text-dark-1 font-20')]}>
          Found
        </Text>
      </View>

      <LinearGradient
        end={{x: 0.0, y: 0.5}}
        start={{x: 0.8, y: 2.0}}
        locations={[0.6, 0.5]}
        style={[tailwind('m-8 rounded p-2')]}
        colors={['#B2933D', '#C5A858']}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[
            tailwind('rounded p-1 flex-row  items-center justify-center '),
          ]}>
          <Text style={[tailwind('font-bold text-brown-4 px-2 font-18')]}>
            Go Back
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
