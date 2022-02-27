import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, ActivityIndicator, Text} from 'react-native';
import LobbyTopBar from './lobby.top.bar';
import LobbyNav from './lobby.nav';
import Icon from 'react-native-vector-icons/Ionicons';
import clr from '../../../../constants/colors';
import {getAppThemeSelector} from '../../../../store/selectors';
import {useSelector} from 'react-redux';

interface PropTypes {
  failed: boolean;
}

export default function LobbyScreenLoading(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[tailwind('h-full'), dT ? clr.bgd1 : clr.bgGray]}>
      <View style={[dT ? clr.bgd1 : clr.bgGray]}>
        <LobbyTopBar amount={'0,000'} appColors={{}} />
        <LobbyNav cricket={true} setCricket={() => {}} name={''} />
      </View>

      <View style={[tailwind('py-5')]}>
        {props.failed ? (
          <View style={[tailwind('items-center')]}>
            <Icon name="warning-outline" size={100} color="#BCA04D" />
            <Text
              style={[tailwind('font-regular font-20'), dT ? clr.tw : clr.td1]}>
              Failed to Load
            </Text>
          </View>
        ) : (
          <ActivityIndicator color={dT ? '#d1b45a' : 'red'} size={'large'} />
        )}
      </View>
    </View>
  );
}
