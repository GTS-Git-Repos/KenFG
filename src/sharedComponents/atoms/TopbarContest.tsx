import React from 'react';
import tailwind from '../../../tailwind';
import AppView from '../../coreComponets/app.View';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {BackIcon, ContestBellIcon} from '../../sharedComponents';
import {WalletIcon} from '../../assets/newIcons/';
interface PropTypes {
  title: string;
  subtitle: string;
  enableNotification(e: any): void;
  openWallet(e: any): void;
}

export default function TopBarContest(props: PropTypes) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        tailwind(
          'py-2 px-4 flex-row items-center bg-secondary justify-between',
        ),
      ]}>
      <View style={[tailwind('flex flex-row items-center')]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon />
        </TouchableOpacity>

        <View style={[tailwind('px-4')]}>
          <Text style={[tailwind('font-bold uppercase text-brown-4 font-14')]}>
            {props.title}
          </Text>
          <Text style={[tailwind('font-regular text-brown-5 pt-1 font-10')]}>
            {props.subtitle}
          </Text>
        </View>
      </View>

      <View style={[tailwind('flex flex-row items-center')]}>
        <TouchableOpacity onPress={props.openWallet} style={[tailwind('px-1')]}>
          <WalletIcon darkColor={true} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

{
  /* <TouchableOpacity style={[tailwind('px-1')]}>
          <CapWithVSIcon />
        </TouchableOpacity> */
}
{
  /* <TouchableOpacity
          onPress={props.enableNotification}
          style={[tailwind('px-1')]}>
          <ContestBellIcon />
        </TouchableOpacity> */
}
