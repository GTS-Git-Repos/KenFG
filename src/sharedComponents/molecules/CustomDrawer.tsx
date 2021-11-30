import React from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';
import {BottomLine} from '../';

export default function CustomDrawer(props: any) {
  return (
    <View style={[tailwind('h-full bg-dark rounded-r-xl')]}>
      <UserInfo />
      <Links
        icon={assets.walletIcon}
        text="My Balance"
        children={
          <Text style={[tailwind('font-regular text-light font-15')]}>
            {'\u20B9'}322.03
          </Text>
        }
      />
      <Links icon={assets.walletIcon} text="How to Play" />
      <Links icon={assets.walletIcon} text="Leader board" />
      <Links icon={assets.walletIcon} text="More" />
      <BottomLine />
      <AppVersion version="4.24.4" />
      <BottomLine />
      <Support />
    </View>
  );
}

const UserInfo = (props: any) => {
  return (
    <View style={[tailwind('px-4 flex-row items-stretch pt-3')]}>
      {/* Image */}
      <View style={[tailwind('box'), {flex: 3}]}></View>
      <View style={[tailwind(''), {flex: 7}]}>
        <Text style={[tailwind('font-regular text-light font-15')]}>
          Kai Ro
        </Text>
        <Text
          numberOfLines={1}
          style={[tailwind('font-bold text-light font-15')]}>
          Karthikeyan
        </Text>
        <View style={[tailwind('flex-row items-center')]}>
          <Image
            resizeMode="contain"
            source={props.icon}
            style={[tailwind(''), {width: 10, height: 20}]}
          />
          <Text style={[tailwind('font-regular text-light font-15')]}>
            Level 231
          </Text>
        </View>
      </View>
    </View>
  );
};

const Links = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center py-3 mx-4')]}>
      <View style={[tailwind(''), {flex: 3}]}>
        <Image
          resizeMode="contain"
          source={assets.walletIcon}
          style={[tailwind(''), {width: 32, height: 32}]}
        />
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <Text style={[tailwind('font-regular text-light font-15')]}>
          {props.text}
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 3}]}>
        {props.children && props.children}
      </View>
    </View>
  );
};

const AppVersion = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center px-4 py-3')]}>
      <View style={[tailwind(''), {flex: 7}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-13')]}>
          Version {props.version}
        </Text>
        <Text style={[tailwind('font-regular py-1 text-dark-1 font-12')]}>
          App upto date
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 3}]}>
        <Text style={[tailwind('font-regular text-dark-1 uppercase font-14')]}>
          UPDATE
        </Text>
      </View>
    </View>
  );
};

const Support = () => {
  return (
    <View style={[tailwind('flex-row items-center py-3 px-4')]}>
      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <View style={[tailwind(''), {flex: 3}]}></View>
        <Text style={[tailwind('font-regular text-light font-15'), {flex: 7}]}>
          Helpdesk
        </Text>
      </View>

      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <View style={[tailwind(''), {flex: 3}]}></View>
        <Text style={[tailwind('font-regular text-light font-15'), {flex: 7}]}>
          Chat With Us
        </Text>
      </View>
    </View>
  );
};
