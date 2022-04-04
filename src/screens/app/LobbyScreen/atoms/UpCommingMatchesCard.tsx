import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TeamFlag} from '../../../../sharedComponents';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';

import {LineupsCap, NotificationIcon} from '../../../../assets/newIcons';
import {useCountDown} from '../../../../shared_hooks/app.hooks';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

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
  dT: boolean;
  team_a_name: string;
  team_b_name: string;
  team_a_flag: string;
  team_b_flag: string;
  set_team_a_flag: any;
  set_team_b_flag: any;
}

export default function UpcommingMatches(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

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

  return (
    <View style={[styles.root]}>
      <View style={[styles.container, dT ? clr.bgd2 : clr.bgw]}>
        {/* Tournament name and bell */}
        <View style={[tailwind('flex-row items-center')]}>
          <View style={[tailwind('mr-1'), {flex: 9}]}>
            <Text
              numberOfLines={1}
              style={[styles.t_name, dT ? clr.tw : clr.td1]}>
              {props.tournament_name}
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.onPressNotification(props.match_key)}
            style={[tailwind('flex-row justify-end pt-0.5'), {flex: 1}]}>
            <NotificationIcon sizeSmall={true} outline={true} isDark={dT} />
          </TouchableOpacity>
        </View>

        <View style={[{height: 2}]}></View>

        <Teams
          dT={dT}
          team_a_name={props.team_a_name}
          team_b_name={props.team_b_name}
          team_a_flag={team_a_flag}
          team_b_flag={team_b_flag}
          set_team_a_flag={set_team_a_flag}
          set_team_b_flag={set_team_b_flag}
        />
        <PrizeandStatus dT={dT} price={props.price} />

        {/* Count Down */}
        <View
          style={[styles.countDownWrapper, dT ? clr.bgGreen : clr.bgLgreen]}>
          <Text style={[styles.countDown, clr.tw]}>{countDown}</Text>
        </View>
      </View>
    </View>
  );
}

const Teams = (props: TeamPropShape) => {
  return (
    <View
      style={[
        tailwind('flex flex-row justify-between items-center'),
        {paddingHorizontal: 16, paddingVertical: 6},
      ]}>
      <View style={[tailwind('')]}>
        <TeamFlag teamCode={props.team_a_name} />
        {/* <View style={[styles.flagWrapper, props.dT ? clr.bgd1 : clr.bgGray]}>
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
        </View> */}
        <Text
          numberOfLines={1}
          style={[
            tailwind('font-bold uppercase font-10 pt-0.5 text-center'),
            props.dT ? clr.tw : clr.td1,
            {maxWidth: 60},
          ]}>
          {props.team_a_name}
        </Text>
      </View>

      <Text
        style={[tailwind('font-bold font-10'), props.dT ? clr.tw : clr.td1]}>
        VS
      </Text>

      <View style={[tailwind('')]}>
        <TeamFlag teamCode={props.team_b_name} />
        <Text
          numberOfLines={1}
          style={[
            tailwind('font-bold uppercase font-10 pt-0.5 text-center'),
            props.dT ? clr.tw : clr.td1,
            {maxWidth: 40},
          ]}>
          {props.team_b_name}
        </Text>
      </View>
    </View>
  );
};

const PrizeandStatus = (props: any) => {
  // TODO: API data required here
  const LINEUPS = false;
  return (
    <View style={[tailwind('flex-row items-center'), {paddingLeft: 10}]}>
      <View style={[tailwind('flex-row items-center'), {flex: 6}]}>
        <LineupsCap lineups={LINEUPS} />
        {LINEUPS && (
          <Text
            numberOfLines={1}
            allowFontScaling={true}
            adjustsFontSizeToFit={true}
            style={[
              tailwind('font-regular pr-1 font-10'),
              props.dT ? clr.td2 : clr.td1,
            ]}>
            Line ups out
          </Text>
        )}
      </View>

      <Text
        style={[
          tailwind('font-regular px-1 font-10'),
          {flex: 1},
          props.dT ? clr.td2 : clr.td1,
        ]}>
        |
      </Text>
      <View style={[tailwind(''), {flex: 3}]}>
        <Text
          style={[
            tailwind('font-regular font-10'),
            props.dT ? clr.tgl : clr.tr,
          ]}>
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
    // borderColor: 'rgba(31, 41, 55, 1)',
    // borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingTop: 4,
    elevation: 1,
  },
  t_name: {
    fontFamily: 'Gadugi-Normal',
    fontSize: 9,
    textAlign: 'center',
  },
  flagWrapper: {
    width: 45,
    height: 25,
    borderRadius: 2,
  },
  countDownWrapper: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginHorizontal: 20,
    marginTop: 4,
    padding: 2,
  },
  countDown: {
    fontFamily: 'Gadugi-Bold',
    fontSize: 10,
    paddingLeft: 4,
    textAlign: 'center',
  },
});
