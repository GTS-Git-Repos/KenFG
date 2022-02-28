import React, {useEffect, useState} from 'react';
import tailwind from '../../../tailwind';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import assets from '../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import Modal from 'react-native-modal';
import {removeToken} from '../../utils/authTokenUtils';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';
import RNRestart from 'react-native-restart';
import {
  EditIcon,
  MoneySideIcon,
  WalletSideIcon,
  LeaderSideIcon,
  SettingSideIcon,
  MoreSideIcon,
  HelpIcon,
  ChatSideIcon,
  HelpSideIcon,
} from '../../assets/newIcons';

const log = console.log;

interface LinkTypes {
  dT: boolean;
  to: string;
  icon: string;
  text: string;
}

export default function CustomDrawer(props: any) {
  const dT = useSelector(getAppThemeSelector);

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
    <View style={[tailwind('h-full'), dT ? clr.bgd2 : clr.bgw]}>
      <ScrollView>
        <UserInfo name={userInfoState?.name} dT={dT} />
        <WalletLink dT={dT} money={'10,0000'} />
        <ReferaAndEarn dT={dT} />
        <Links
          to="LeaderBoardListsScreen"
          icon={'leader'}
          text="Leaderboard"
          dT={dT}
        />
        <Links
          to="AchievementsScreen"
          icon={'achivement'}
          text="Achievements"
          dT={dT}
        />
        <Links
          to="AffliatedScreen"
          icon={'affliate'}
          text="Affilated"
          dT={dT}
        />

        <Links
          to="ProfileEditScreen"
          icon={'settings'}
          text="My Info Settings"
          dT={dT}
        />
        <Links to="HowToPlayScreen" icon={'how'} text="How to Play" dT={dT} />

        <Links to="MoreScreen" icon={'more'} text="More" dT={dT} />
        {/* <View> */}
        <AppVersion version="4.24.4" dT={dT} />
        {/* <View /> */}
        <Support dT={dT} />
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
        <View
          style={[tailwind('p-6 bg-dark-4 rounded border border-gray-900')]}>
          <Text style={[tailwind('font-bold text-white font-17')]}>
            Do you want to Logout ?
          </Text>
          <Text style={[tailwind('pt-2 font-regular text-white font-12')]}>
            This will logged out from the app, Press YES to proceed
          </Text>

          <View style={[tailwind('flex-row items-center justify-end')]}>
            <TouchableOpacity onPress={logout} style={[tailwind('px-6 pt-2')]}>
              <Text
                style={[tailwind('font-bold uppercase text-white font-15')]}>
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setLogoutModal(false)}
              style={[tailwind('pt-2')]}>
              <Text
                style={[tailwind('font-bold uppercase text-white font-15')]}>
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
      style={[
        tailwind('px-4 flex-row items-center py-2 pt-6'),
        props.dT ? clr.bgd1 : clr.bgGray,
      ]}>
      <View style={[tailwind('flex-row items-center'), {flex: 9}]}>
        <View style={[tailwind(''), {flex: 3}]}>
          <View style={[tailwind('rounded-full'), {width: 60, height: 60}]}>
            <Image
              resizeMode="contain"
              source={assets.user_temp_profile}
              style={[tailwind('w-full h-full')]}
            />
          </View>
          <View style={[tailwind('absolute bottom-0 right-0')]}>
            <EditIcon dT={props.dT} />
          </View>
        </View>

        <View style={[tailwind('pl-3'), {flex: 7}]}>
          <Text
            numberOfLines={1}
            style={[
              tailwind('font-bold font-15'),
              props.dT ? clr.tw : clr.td1,
            ]}>
            {props.name}
          </Text>
          <Text
            numberOfLines={1}
            style={[
              tailwind('font-regular py-1 font-12'),
              props.dT ? clr.tw : clr.td1,
            ]}>
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
            <Text
              style={[
                tailwind('font-regular px-1 font-13'),
                props.dT ? clr.tw : clr.td1,
              ]}>
              Level 001
            </Text>
          </View>
        </View>
      </View>

      <View style={[tailwind(''), {flex: 1}]}>
        {/* <TouchableOpacity>
          <Icon name="arrow-forward" size={20} color="white" />
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );
};

// log(tailwind('font-regular text-brown-1 font-13'))
function WalletLink(props: any) {
  return (
    <TouchableOpacity onPress={() => {}} style={[styles.linkRoot]}>
      <View style={[{flex: 2}]}>
        <WalletSideIcon dT={props.dT} />
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <Text style={[styles.linkTxt, props.dT ? clr.tw : clr.td1]}>
          My Balance
        </Text>
      </View>
      <View style={[tailwind('items-end'), {flex: 4}]}>
        <Text style={[styles.linkTxt, props.dT ? clr.tgl : clr.tr]}>
          {'\u20B9 '}
          {props.money}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const Links = (props: LinkTypes) => {
  const navigation = useNavigation<any>();
  const newLocal = 'flex-row items-center py-3 mx-4';
  const newLocal_1 = 'font-regular text-light font-13';

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(props.to)}
      style={[tailwind(newLocal)]}>
      <View style={[tailwind(''), {flex: 2}]}>
        {props.icon === 'leader' && <LeaderSideIcon dT={props.dT} />}
        {props.icon === 'achivement' && <LeaderSideIcon dT={props.dT} />}
        {props.icon === 'affliate' && <LeaderSideIcon dT={props.dT} />}
        {props.icon === 'settings' && <SettingSideIcon dT={props.dT} />}
        {props.icon === 'how' && <HelpSideIcon dT={props.dT} />}
        {props.icon === 'more' && <MoreSideIcon dT={props.dT} />}
      </View>
      <View style={[tailwind(''), {flex: 6}]}>
        <Text style={[tailwind(newLocal_1), props.dT ? clr.tw : clr.td1]}>
          {props.text}
        </Text>
      </View>
      <View style={{flex: 4}}></View>
    </TouchableOpacity>
  );
};

const AppVersion = (props: any) => {
  return (
    <View style={[tailwind('flex-row px-4 py-3')]}>
      <View style={[tailwind(''), {flex: 7}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-12')]}>
          Version 0.1
        </Text>
        <Text style={[tailwind('font-regular py-1 text-dark-1 font-11')]}>
          24/2/22::10:52AM
        </Text>
      </View>
      {/* <View style={[tailwind('justify-end items-end'), {flex: 3}]}>
          <Text
            style={[tailwind('font-regular text-dark-1 uppercase font-13')]}>
            UPDATE
          </Text>
        </View> */}
    </View>
  );
};

const Support = (props: any) => {
  return (
    <View style={[tailwind('flex-row items-center py-4 px-4')]}>
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
        <Text
          style={[
            tailwind('font-regular font-12'),
            props.dT ? clr.td2 : clr.td1,
            {flex: 7},
          ]}>
          Helpdesk
        </Text>
      </View>

      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <View style={[tailwind(''), {flex: 3}]}>
          <ChatSideIcon dT={props.dT} />
        </View>
        <Text
          style={[
            tailwind('font-regular text-light font-12'),
            props.dT ? clr.td2 : clr.td1,
            {flex: 7},
          ]}>
          Chat With Us
        </Text>
      </View>
    </View>
  );
};

const ReferaAndEarn = (props: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('InviteScreen')}
      style={[tailwind('flex-row items-center py-3 mx-4')]}>
      <View style={[tailwind(''), {flex: 2}]}>
        <MoneySideIcon dT={props.dT} />
      </View>
      <View style={[tailwind('flex-row  items-center'), {flex: 7}]}>
        <Text style={[styles.linkTxt, props.dT ? clr.tw : clr.td1]}>
          Refer and Earn
        </Text>
        <Text
          style={[
            styles.linkTxt,
            tailwind('px-2'),
            props.dT ? clr.tgl : clr.td1,
          ]}>
          {'\u20B9'} 500
        </Text>
      </View>
      <View style={[tailwind('items-end'), {flex: 3}]}>
        <View
          style={[
            tailwind('border px-2 py-1 rounded'),
            props.dT ? styles.dinvite : styles.linvite,
          ]}>
          <Text
            style={[
              styles.linkTxt,
              props.dT ? clr.tgl : clr.td1,
              {fontSize: 12},
            ]}>
            INVITE
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dinvite: {
    borderColor: '#d1b45a',
  },
  linvite: {
    borderColor: '#d80203',
  },
  linkRoot: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 12,
  },
  linkTxt: {
    fontFamily: 'gadugi-normal',
    fontSize: 13,
  },
});
