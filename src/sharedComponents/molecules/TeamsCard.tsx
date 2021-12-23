import React from 'react';
import tailwind from '../../../tailwind';
import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../constants/assets_manifest';
import {useNavigation} from '@react-navigation/core';
import MyTeamsTopSection from '../atoms/MyTeamTopSection';
import Svg, {Path, Rect} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

interface PropTypes {
  teams_key: string;
  canModify: boolean;
}
interface TeamContInfoTypes {
  name: string;
  count: number;
}

const CARDWIDTH = Dimensions.get('window').width;

export default function TeamsCard(props: PropTypes) {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      // onPress={() => navigation.navigate('MatchGroundScreen')}
      style={[tailwind(' my-2 mt-1 rounded-lg')]}>
      <ImageBackground
        imageStyle={{borderTopLeftRadius: 5, borderTopRightRadius: 5}}
        style={[tailwind('w-full')]}
        source={assets.myTeamsBackground}>
        {/* Header */}

        <MyTeamsTopSection
          teams_key={props.teams_key}
          canModify={props.canModify}
        />

        <View style={[tailwind('flex-row justify-between items-center p-3')]}>
          {/* Players */}
          <View
            style={[
              tailwind('flex-row justify-around items-center'),
              {flex: 6},
            ]}>
            <PlayerProfile cap={true} index={true} name="Player 1" />
            <PlayerProfile cap={false} name="Player 2" />
          </View>

          {/* Count */}
          <View style={[tailwind('items-end'), {flex: 4}]}>
            <TeamCountInfo name={'AUS'} count={6} />
            <TeamCountInfo name={'ENG'} count={4} />
          </View>
        </View>
      </ImageBackground>
      <BottomStats />
    </TouchableOpacity>
  );
}

const TeamCountInfo = (props: TeamContInfoTypes) => {
  return (
    <View style={[tailwind('flex-row mb-0.5 items-center')]}>
      <Text
        style={[tailwind('font-regular text-white text-center px-4 font-12')]}>
        {props.name}
      </Text>
      <Text
        style={[
          tailwind(
            'font-bold bg-gray-100 rounded px-2 text-center  py-1 text-light font-20',
          ),
          {
            backgroundColor: 'rgba(0,0,0,0.2)',
          },
        ]}>
        {props.count}
      </Text>
    </View>
  );
};

const PlayerProfile = (props: any) => {
  return (
    <View style={[tailwind('flex-col')]}>
      <View style={[tailwind(''), {width: 55, height: 55}]}>
        <View style={[tailwind('absolute inset-0'), {}]}>
          {props.cap ? <CIcon /> : <VCIcon />}
        </View>
        <Image
          resizeMode="contain"
          source={assets.player}
          style={[tailwind(''), {width: 55, height: 50}]}
        />
        <PlayerName name={props.name} index={props.index} />
      </View>
    </View>
  );
};

const PlayerName = (props: any) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={props.index ? ['#254987', '#172338'] : ['#172338', '#6C221E']}
      style={[tailwind('bg-blue-500'), {padding: 2, borderRadius: 4}]}>
      <Text
        allowFontScaling={true}
        adjustsFontSizeToFit={true}
        style={[tailwind('font-regular text-center text-white font-9')]}>
        {props.name}
      </Text>
    </LinearGradient>
  );
};

const BottomStats = () => {
  return (
    <View
      style={[
        tailwind(
          'bg-dark-3 rounded-b-lg p-3 flex-row items-center justify-between',
        ),
      ]}>
      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>WK</Text>
        <Text style={[tailwind('font-bold text-white px-2 font-14')]}>1</Text>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>BAT</Text>
        <Text style={[tailwind('font-bold text-white px-2 font-14')]}>3</Text>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>AR</Text>
        <Text style={[tailwind('font-bold text-white px-2 font-14')]}>2</Text>
      </View>

      <View
        style={[tailwind('flex-row items-center justify-center'), {flex: 2.5}]}>
        <Text style={[tailwind('font-regular text-dark-1 font-14')]}>BOWL</Text>
        <Text style={[tailwind('font-bold text-white px-2 font-14')]}>5</Text>
      </View>
    </View>
  );
};

const VCIcon = () => {
  return (
    <Svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.15281 5.34668L7.02016 11.6484H5.44009L3.33334 5.34668H4.8357L6.12651 9.73242C6.19559 9.96973 6.23732 10.1792 6.25171 10.3608H6.27761C6.29776 10.1646 6.34237 9.94922 6.41144 9.71484L7.69363 5.34668H9.15281Z"
        fill="white"
      />
      <Path
        d="M14.3333 11.4243C13.8815 11.647 13.2915 11.7583 12.5633 11.7583C11.6136 11.7583 10.8667 11.4741 10.3227 10.9058C9.77879 10.3374 9.50681 9.58008 9.50681 8.63379C9.50681 7.62598 9.81189 6.80859 10.422 6.18164C11.0351 5.55469 11.8294 5.24121 12.8051 5.24121C13.4095 5.24121 13.9189 5.31885 14.3333 5.47412V6.84082C13.9189 6.58887 13.4469 6.46289 12.9173 6.46289C12.336 6.46289 11.8668 6.64893 11.51 7.021C11.1531 7.39307 10.9746 7.89697 10.9746 8.53271C10.9746 9.14209 11.143 9.62842 11.4797 9.9917C11.8165 10.3521 12.2698 10.5322 12.8396 10.5322C13.3836 10.5322 13.8815 10.3975 14.3333 10.1279V11.4243Z"
        fill="white"
      />
      <Rect x="1.33334" y="1" width="15" height="15" rx="7.5" stroke="white" />
    </Svg>
  );
};

const CIcon = () => {
  return (
    <Svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.2065 11.4243C10.7466 11.647 10.146 11.7583 9.40479 11.7583C8.43799 11.7583 7.67773 11.4741 7.12402 10.9058C6.57031 10.3374 6.29346 9.58008 6.29346 8.63379C6.29346 7.62598 6.604 6.80859 7.2251 6.18164C7.84912 5.55469 8.65771 5.24121 9.65088 5.24121C10.2661 5.24121 10.7847 5.31885 11.2065 5.47412V6.84082C10.7847 6.58887 10.3042 6.46289 9.76514 6.46289C9.17334 6.46289 8.6958 6.64893 8.33252 7.021C7.96924 7.39307 7.7876 7.89697 7.7876 8.53271C7.7876 9.14209 7.95898 9.62842 8.30176 9.9917C8.64453 10.3521 9.10596 10.5322 9.68604 10.5322C10.2397 10.5322 10.7466 10.3975 11.2065 10.1279V11.4243Z"
        fill="white"
      />
      <Rect x="1.25" y="1" width="15" height="15" rx="7.5" stroke="white" />
    </Svg>
  );
};
