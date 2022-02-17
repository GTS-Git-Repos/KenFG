import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BackIcon, ContestBellIcon} from '../../sharedComponents';
import {WalletIcon} from '../../assets/newIcons/';
import {useSelector} from 'react-redux';
import {appColorsSelector} from '../../store/selectors';
interface PropTypes {
  title: string;
  subtitle: string;
  enableNotification(e: any): void;
  openWallet(e: any): void;
}

export default function TopBarContest(props: PropTypes) {
  const navigation = useNavigation();
  const clr = useSelector(appColorsSelector);

  return (
    <View style={[ss.root, clr.bg_2]}>
      <View style={[tailwind('flex flex-row items-center')]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon dark={false} />
        </TouchableOpacity>

        <View style={[tailwind('px-4')]}>
          <Text style={[ss.title, clr.txt_4]}>{props.title}</Text>
          <Text style={[ss.subtitle, clr.txt_4]}>{props.subtitle}</Text>
        </View>
      </View>

      <View style={[tailwind('flex flex-row items-center')]}>
        <TouchableOpacity onPress={props.openWallet} style={[tailwind('px-1')]}>
          <WalletIcon darkColor={clr.dark} />
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

const ss = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#d1b45a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  title: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'gadugi-normal',
    fontSize: 10,
    paddingTop: 4,
  },
});
