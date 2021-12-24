import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/core';
import assets from '../../../../constants/assets_manifest';
import {useDispatch} from 'react-redux';
import {
  updateSelectedContestAction,
  updateSelectedMatchAction,
} from '../../../../store/actions/appActions';

interface PropTypes {
  match_key: string;
  tournament_name: string;
  team_a_name: string;
  team_a_flag: string;
  team_b_name: string;
  team_b_flag: string;
  tournament_shortName: string;
  price: string;
}

export default function UpcommingMatches(props: PropTypes) {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const navigateToContestList = () => {
    dispatch(updateSelectedContestAction(null));
    dispatch(
      updateSelectedMatchAction({
        match_key: props.match_key,
        team_a: props.team_a_name,
        team_b: props.team_b_name,
      }),
    );

    navigation.navigate('ContestListScreen');
  };

  return (
    <TouchableOpacity
      onPress={navigateToContestList}
      style={[tailwind('p-1'), {flex: 6}]}>
      <LinearGradient
        start={{x: 0.0, y: 0.5}}
        end={{x: 0.5, y: 0.0}}
        locations={[0.6, 0.5]}
        colors={['#172338', '#172338']}
        style={[
          tailwind('bg-primary  border border-gray-800 rounded px-2'),
          {paddingTop: 4},
        ]}>
        <View style={[tailwind('flex-row items-center')]}>
          <View style={[tailwind('mr-1'), {flex: 9}]}>
            <Text
              numberOfLines={1}
              // allowFontScaling={true}
              adjustsFontSizeToFit={true}
              style={[tailwind('font-regular text-center text-white font-11')]}>
              {props.tournament_name}
            </Text>
          </View>

          <View style={[tailwind('flex-row justify-end pt-0.5'), {flex: 1}]}>
            <Image
              resizeMode="contain"
              source={assets.bell}
              style={[tailwind(''), {aspectRatio: 16 / 9}]}
            />
          </View>
        </View>

        <View
          // start={{x: 0, y: 0}}
          // end={{x: 1, y: 0}}
          style={[tailwind('mx-2 border-t border-gray-800'), {marginTop: 2}]}
          // colors={['#162339', '#29344B', '#162339']}
        >
          <View style={[tailwind(''), {height: 2}]}></View>
        </View>

        <View
          style={[
            tailwind('flex flex-row justify-between py-0.5 items-center'),
            {paddingHorizontal: 16, paddingTop: 6},
          ]}>
          <View style={[tailwind('')]}>
            {/* <Image
              resizeMode="contain"
              source={assets.south_africa_flag}
              style={[tailwind(''), {width: 40, height: 40}]}
            /> */}
            <PlaceHolderImage color="green" />
            <Text
              style={[
                tailwind('font-bold uppercase font-10 pt-0.5 text-center'),
                {color: '#D3D3D5'},
              ]}>
              {props.team_a_name}
            </Text>
          </View>

          <Text style={[tailwind('font-bold font-10'), {color: '#D3D3D5'}]}>
            VS
          </Text>

          <View style={[tailwind('')]}>
            <PlaceHolderImage color="red" />
            <Text
              style={[
                tailwind('font-bold uppercase font-10 pt-0.5 text-center'),
                {color: '#D3D3D5'},
              ]}>
              {props.team_b_name}
            </Text>
          </View>
        </View>

        {/* Contest Prize Info */}
        <View style={[tailwind('flex-row items-center'), {paddingLeft: 10}]}>
          <View style={[tailwind(''), {flex: 6}]}>
            <Text
              numberOfLines={1}
              allowFontScaling={true}
              adjustsFontSizeToFit={true}
              style={[tailwind('font-regular font-10'), {color: '#9AABC6'}]}>
              Line ups out
            </Text>
          </View>

          <Text
            style={[
              tailwind('font-regular px-1 font-10'),
              {color: '#9AABC6', flex: 1},
            ]}>
            |
          </Text>
          <View style={[tailwind(''), {flex: 3}]}>
            <Text
              style={[tailwind('font-regular font-10'), {color: '#DBC872'}]}>
              {'\u20B9'} {props.price}
            </Text>
          </View>
        </View>

        {/* Count Down */}
        <View
          style={[
            tailwind(
              'flex flex-row items-center mx-5 mt-1 py-0.5 rounded-t-2xl justify-center',
            ),
            {backgroundColor: '#006046'},
          ]}>
          <Image
            resizeMode="contain"
            source={assets.running_clock}
            style={[tailwind(''), {width: 10, height: 10}]}
          />
          <Text
            style={[
              tailwind('font-bold text-center pl-1 font-10'),
              {color: '#FEFEFF'},
            ]}>
            3h:40:23
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const PlaceHolderImage = (props: any) => {
  return (
    <View style={{width: 45, height: 25}}>
      <Image
        resizeMode="stretch"
        source={assets.australia_flag}
        style={[tailwind(''), {width: 45, height: 25}]}
      />
    </View>
  );
};
