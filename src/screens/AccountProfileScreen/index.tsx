import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import assets_manifest from '../../constants/assets_manifest';
import AccountProfileTopBar from './atoms/AccountProfileTopBar';
import UserProfileCard from './atoms/UserProfileCard';
import LevelCard from './molecules/Levels';
import LinearGradient from 'react-native-linear-gradient';
import AccountSubTitle from './atoms/AccountSubTitle';
import Career from './molecules/Career';
const log = console.log;

const WIDTH = Dimensions.get('window').width;

export default function AccountProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={[tailwind('h-full bg-dark')]}>
      <AccountProfileTopBar />
      <View style={[tailwind('bg-secondary'), {height: 15}]}></View>

      <View
        style={[
          tailwind('bg-dark-4 rounded-2xl'),
          {position: 'relative', bottom: 15},
        ]}>
        <ScrollView contentContainerStyle={tailwind('px-2')}>
          <UserProfileCard
            image={''}
            name={'Naveen Gray 204312'}
            username={'naveen gtech'}
            level={'4'}
          />
          <AccountSubTitle text={'Achivements and reward'} />
          <LevelCard nextReward={'\u20B9 10000'} />
          <View style={[tailwind('my-2')]}>
            <AccountSubTitle text={'Career Stats'} />
          </View>
          <Career/>
        </ScrollView>
      </View>
    </View>
  );

  return (
    <View style={tailwind('h-full bg-primary')}>
      <ImageBackground
        style={[tailwind('w-full'), {flexGrow: 1}]}
        resizeMode="cover"
        source={assets_manifest.ground}>
        <AccountProfileTopBar />
        <View style={[tailwind('h-10')]} />
        <ScrollView
          contentContainerStyle={[
            tailwind('bg-dark rounded-t-3xl p-2'),
            {flex: 1},
          ]}>
          <UserProfileCard
            image={''}
            name={'Naveen Gray 204312'}
            username={'naveen gtech'}
            level={'4'}
            followers={'3'}
            following={'432'}
            friends={'3'}
          />
          <LevelCard currentLevel={4} />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
