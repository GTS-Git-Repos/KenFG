import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import assets from '../../../../constants/assets_manifest';
import {useDispatch} from 'react-redux';

import FastImage from 'react-native-fast-image';
import {LineupsCap, NotificationIcon} from '../../../../assets/newIcons';
import {useCountDown} from '../../../../shared_hooks/app.hooks';
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
  onPressNotification(match_key: string): void;
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

  const countDown = useCountDown(props.start_at);
  // log(countDown);

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
      // log('Unmounted');
      isMounted.current = false;
      // clearInterval(interval);
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

  return (
    <View style={[styles.root]}>
      <View style={[styles.container]}>
        {/* Tournament name and bell */}
        <View style={[tailwind('flex-row items-center')]}>
          <View style={[tailwind('mr-1'), {flex: 9}]}>
            <Text numberOfLines={1} style={[styles.t_name]}>
              {props.tournament_name}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => props.onPressNotification(props.match_key)}
            style={[tailwind('flex-row justify-end pt-0.5'), {flex: 1}]}>
            <NotificationIcon sizeSmall={true} outline={false} isDark={false} />
          </TouchableOpacity>
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
        <View style={[styles.countDownWrapper]}>
          <Text style={[styles.countDown]}>{countDown}</Text>
        </View>
      </View>
    </View>
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
      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <Text
          numberOfLines={1}
          allowFontScaling={true}
          adjustsFontSizeToFit={true}
          style={[tailwind('font-regular pr-1 font-10'), {color: '#9AABC6'}]}>
          Line ups out
        </Text>
        <LineupsCap lineups={false} />
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
  root: {
    flex: 6,
    padding: 4,
  },
  container: {
    backgroundColor: '#172339',
    borderColor: 'rgba(31, 41, 55, 1)',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  t_name: {
    color: '#FFFFFF',
    fontFamily: 'gadugi-normal',
    fontSize: 9,
    textAlign: 'center',
  },
  flagWrapper: {
    width: 45,
    height: 25,
    backgroundColor: '#0c1320',
    borderRadius: 2,
  },
  countDownWrapper: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginHorizontal: 20,
    marginTop: 4,
    padding: 2,
    backgroundColor: '#006046',
  },
  countDown: {
    fontFamily: 'gadugi-bold',
    fontSize: 10,
    paddingLeft: 4,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
