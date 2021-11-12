import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import tailwind from '../../../tailwind';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';
import {TopBar} from '../../sharedComponents';
// import Icon from 'react-native-vector-icons/Ionicons';
import {useQuery} from 'react-query';
import assets_manifest from '../../constants/assets_manifest';
import AccountProfileTopBar from './atoms/AccountProfileTopBar';
import UserProfileCard from './atoms/UserProfileCard';
import LevelCard from './molecules/Levels';
import LinearGradient from 'react-native-linear-gradient';
const log = console.log;

const WIDTH = Dimensions.get('window').width;

export default function AccountProfileScreen() {
  const navigation = useNavigation();

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
          <LevelCard />
         
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
