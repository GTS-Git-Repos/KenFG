import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import tailwind from '../../../../../../tailwind';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect, useNavigation} from '@react-navigation/core';
import assets from '../../../../../constants/assets_manifest';
import {useDispatch} from 'react-redux';
import {
  updateSelectedContestAction,
  updateSelectedMatchAction,
} from '../../../../../store/actions/appActions';
import {addSeconds, differenceInSeconds, format} from 'date-fns';
import {subSeconds} from 'date-fns/esm';
import {getCountDown} from '../../../../../utils/formatters';
import FastImage from 'react-native-fast-image';
const log = console.log;

interface PropTypes {
  match_key: string;
  tournament_name: string;
  team_a_name: string;
  team_a_flag: string;
  team_b_name: string;
  team_b_flag: string;
  tournament_shortName: string;
  price: string;
  start_at: Date;
}

interface TeamPropShape {
  team_a_name: string;
  team_b_name: string;
  team_a_flag: string;
  team_b_flag: string;
  set_team_a_flag: any;
  set_team_b_flag: any;
}

export default function UpcommingMatches(props: PropTypes) {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const isMounted = useRef(true);
  const [currentTime, setCurrentTime] = useState<any>('00:00:00');
  const [team_a_flag, set_team_a_flag] = useState('');
  const [team_b_flag, set_team_b_flag] = useState('');

  useLayoutEffect(() => {
    let interval: any = null;
    try {
      set_team_a_flag(props.team_a_flag);
      set_team_b_flag(props.team_b_flag);

      if (isMounted.current) {
        // interval = setInterval(() => {
        //   setCurrentTime(getCountDown(props.start_at));
        // }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
    return () => {
      log('Unmounted');
      isMounted.current = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // let interval: any = null;
    // try {
    //   set_team_a_flag(props.team_a_flag);
    //   set_team_b_flag(props.team_b_flag);
    //   if (isMounted.current) {
    //     interval = setInterval(() => {
    //       setCurrentTime(getCountDown(props.start_at));
    //     }, 1000);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
    // return () => {
    //   log('Unmounted');
    //   isMounted.current = false;
    //   clearInterval(interval);
    // };
  }, []);

  const navigateToContestList = () => {
    dispatch(updateSelectedContestAction(null));
    dispatch(
      updateSelectedMatchAction({
        match_key: props.match_key,
        name: props.tournament_name,
        team_a: props.team_a_name,
        team_b: props.team_b_name,
        start_at: props.start_at,
      }),
    );
    navigation.navigate('Contest');
  };

  return (
    <TouchableOpacity
      onPress={navigateToContestList}
      style={[tailwind('p-1'), {flex: 6}]}>
      <View
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
          style={[tailwind('mx-2 border-t border-gray-800'), {marginTop: 2}]}>
          <View style={[tailwind(''), {height: 2}]}></View>
        </View>
        <Teams
          team_a_name={props.team_a_name}
          team_b_name={props.team_b_name}
          team_a_flag={team_a_flag}
          team_b_flag={team_b_flag}
          set_team_a_flag={set_team_a_flag}
          set_team_b_flag={set_team_b_flag}
        />
        <PrizeandStatus price={props.price} />

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
            {currentTime}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const Teams = (props: TeamPropShape) => {
  return (
    <View
      style={[
        tailwind('flex flex-row justify-between py-0.5 items-center'),
        {paddingHorizontal: 16, paddingTop: 6},
      ]}>
      <View style={[tailwind('')]}>
        <View style={styles.flagWrapper}>
          <FastImage
            style={{width: 45, height: 25}}
            source={{
              uri: props.team_a_flag,
              priority: FastImage.priority.normal,
            }}
            // onError={e =>
            //   props.set_team_a_flag('http://kenfg.com/images/flag/IND.png')
            // }
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
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
        <View style={styles.flagWrapper}>
          <FastImage
            style={{width: 45, height: 25}}
            source={{
              uri: props.team_b_flag,
              priority: FastImage.priority.normal,
            }}
            // onError={e =>
            //   props.set_team_b_flag('http://kenfg.com/images/flag/IND.png')
            // }
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <Text
          style={[
            tailwind('font-bold uppercase font-10 pt-0.5 text-center'),
            {color: '#D3D3D5'},
          ]}>
          {props.team_b_name}
        </Text>
      </View>
    </View>
  );
};

const PrizeandStatus = (props: any) => {
  return (
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
        <Text style={[tailwind('font-regular font-10'), {color: '#DBC872'}]}>
          {'\u20B9'} {props.price}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flagWrapper: {
    width: 45,
    height: 25,
    backgroundColor: '#0c1320',
    borderRadius: 2,
  },
});
