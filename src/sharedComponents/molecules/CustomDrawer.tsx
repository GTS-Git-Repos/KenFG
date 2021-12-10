import React, {useEffect, useState} from 'react';
import tailwind from '../../../tailwind';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';
import {BottomLine} from '../';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {removeToken} from '../../utils/authTokenUtils';
//@ts-expect-error
import RNRestart from 'react-native-restart';
const log = console.log;
export default function CustomDrawer(props: any) {
  
  const [logoutModal, setLogoutModal] = useState(false);

  const userInfoState: any = useSelector<any>(state => state.user.user_info);

  useEffect(() => {
    // log(userInfoState);
  }, []);

  const logout = async () => {
    setLogoutModal(false);
    await removeToken();
    RNRestart.Restart();
  };

  return (
    <View style={[tailwind('h-full bg-dark-3 rounded-r-xl')]}>
      <ScrollView>
        <UserInfo name={userInfoState?.name} />
        <Links
          to="WalletScreen"
          icon={assets.drawer_wallet}
          text="My Balance"
          children={
            <Text style={[tailwind('font-regular text-brown-1 font-13')]}>
              {'\u20B9'}00.00
            </Text>
          }
        />
        <Links
          to="HowToPlayScreen"
          icon={assets.cash_icon}
          text="How to Play"
        />
        <Links to="LeaderBoard" icon={assets.joystick} text="Leaderboard" />
        <Links
          to="ProfileEditScreen"
          icon={assets.settings_icon}
          text="My Info Settings"
        />
        <Links to="MoreScreen" icon={assets.more_icon} text="More" />
        <BottomLine />
        <AppVersion version="4.24.4" />
        <BottomLine />
        <Support />
      </ScrollView>
      <TouchableOpacity
        onPress={() => setLogoutModal(true)}
        style={[
          tailwind('p-4'),
          {
            backgroundColor: '#816D2E',
          },
        ]}>
        <Text
          style={[
            tailwind('font-bold text-center text-light uppercase font-15'),
          ]}>
          Logout
        </Text>
      </TouchableOpacity>

      <Modal
        isVisible={logoutModal}
        animationInTiming={150}
        animationOutTiming={150}
        useNativeDriver={true}
        useNativeDriverForBackdrop={true}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        scrollHorizontal={true}>
        <View style={[tailwind('bg-white p-6 bg-dark-3 rounded')]}>
          <Text style={[tailwind('font-bold text-light font-18')]}>
            Do you want to Logout ?
          </Text>

          <View style={[tailwind('flex-row items-center mt-4')]}>
            <TouchableOpacity onPress={logout} style={[tailwind('py-4 pr-7')]}>
              <Text
                style={[tailwind('font-regular uppercase text-light font-15')]}>
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLogoutModal(false)}
              style={[tailwind('px-4 py-4')]}>
              <Text
                style={[tailwind('font-regular uppercase text-light font-15')]}>
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const UserInfo = (props: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate('AccountProfileScreen')}
      style={[tailwind('px-4 flex-row items-center bg-dark-4 py-2 pt-6')]}>
      <View style={[tailwind('flex-row items-center'), {flex: 9}]}>
        <View style={[tailwind(''), {flex: 3}]}>
          <View style={[tailwind('rounded-full'), {width: 60, height: 60}]}>
            <Image
              resizeMode="contain"
              source={assets.user_temp_profile}
              style={[tailwind('w-full h-full')]}
            />
          </View>
        </View>

        <View style={[tailwind(''), {flex: 7}]}>
          <Text
            numberOfLines={1}
            style={[tailwind('font-bold text-light font-15')]}>
            {props.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[tailwind('font-regular text-light py-1 font-12')]}>
            {props.name}
          </Text>
          <View style={[tailwind('flex-row items-center py-0.5')]}>
            <View style={[tailwind('rounded-full'), {width: 16, height: 16}]}>
              <Image
                resizeMode="contain"
                source={assets.levels}
                style={[tailwind('w-full h-full')]}
              />
            </View>
            <Text style={[tailwind('font-regular px-1 text-light font-15')]}>
              Level 001
            </Text>
          </View>
        </View>
      </View>

      <View style={[tailwind(''), {flex: 1}]}>
        <TouchableOpacity>
          <Icon name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const Links = (props: any) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(props.to)}
      style={[tailwind('flex-row items-center py-3 mx-4')]}>
      <View style={[tailwind(''), {flex: 3}]}>
        <View style={[tailwind('rounded-full'), {width: 26, height: 26}]}>
          <Image
            resizeMode="contain"
            source={props.icon}
            style={[tailwind('w-full h-full')]}
          />
        </View>
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <Text style={[tailwind('font-regular text-light font-13')]}>
          {props.text}
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 3}]}>
        {props.children && props.children}
      </View>
    </TouchableOpacity>
  );
};

const AppVersion = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center px-4 py-3')]}>
      <View style={[tailwind(''), {flex: 7}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
          Version {props.version}
        </Text>
        <Text style={[tailwind('font-regular py-1 text-dark-1 font-11')]}>
          App upto date
        </Text>
      </View>
      <View style={[tailwind(''), {flex: 3}]}>
        <Text style={[tailwind('font-regular text-dark-1 uppercase font-13')]}>
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
        <View style={[tailwind(''), {flex: 3}]}>
          <View style={[tailwind('rounded-full'), {width: 18, height: 18}]}>
            <Image
              resizeMode="contain"
              source={assets.question_icon}
              style={[tailwind('w-full h-full')]}
            />
          </View>
        </View>
        <Text style={[tailwind('font-regular text-light font-12'), {flex: 7}]}>
          Helpdesk
        </Text>
      </View>

      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <View style={[tailwind(''), {flex: 3}]}>
          <View style={[tailwind('rounded-full'), {width: 18, height: 18}]}>
            <Image
              resizeMode="contain"
              source={assets.chat_icon}
              style={[tailwind('w-full h-full')]}
            />
          </View>
        </View>
        <Text style={[tailwind('font-regular text-light font-12'), {flex: 7}]}>
          Chat With Us
        </Text>
      </View>
    </View>
  );
};
