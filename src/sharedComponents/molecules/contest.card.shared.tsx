import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProgressBarContestCard from './progressbar.contest';
import {CupIcon, DollarIcon, MIcon, TickIcon} from '..';
import {appColorsSelector} from '../../store/selectors';
import {useSelector} from 'react-redux';
const log = console.log;

// type ContestType = 'public' | 'practice';

interface PropTypes {
  navigate(contest_key: string): any;
  contest_key: string;
  match_key: string;
  title: string;
  filled_spots: Array<any>;
  total_spots: number;
  amount_letters: string;
  amount: string;
  guaranteed: boolean;
  entry: string;
  max_entry: number;
  bonus: string;
  is_practice: boolean;
  contest_type: string;
  proceedToJoin(contest_key: string): any;
}

export default function ContestCard(props: PropTypes) {
  const clr = useSelector(appColorsSelector);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.root, clr.bg_1]}
      onPress={() => props.navigate(props.contest_key)}>
      <View style={styles.content}>
        <View style={[styles.topSection, tailwind('')]}>
          <View>
            <Text style={[styles.contestTitle, clr.txt_1]}>{props.title}</Text>
            <Text style={[styles.contestAmount, clr.txt_3]}>
              {'\u20B9 '}
              {props.amount_letters}
            </Text>
          </View>
          <ContestEntryType
            proceedToJoin={props.proceedToJoin}
            contest_type={props.contest_type}
            entry={props.entry}
            contest_key={props.contest_key}
          />
        </View>

        {/* Progress bar */}
        <ProgressBarContestCard
          isDarkMode={clr.dark}
          total_spots={props.total_spots}
          filled_spots={props.filled_spots}
        />
      </View>
      <Footer
        amount_letters={props.amount_letters}
        bonus={props.bonus}
        guaranteed={props.guaranteed}
      />
    </TouchableOpacity>
  );
}

const ContestEntryType = (props: any) => {
  const clr = useSelector(appColorsSelector);
  return (
    <TouchableOpacity
      onPress={() => props.proceedToJoin(props.contest_key)}
      style={[tailwind('')]}>
      <View style={[tailwind('flex-row justify-end py-2 items-center')]}>
        <View
          style={[
            tailwind('rounded px-4 py-0.5'),
            {
              backgroundColor: '#006A4D',
            },
          ]}>
          {props.contest_type === 'public' ? (
            <Text style={[styles.entryAmount, {color: '#ffffff'}]}>
              {'\u20B9 '}
              {props.entry}
            </Text>
          ) : (
            <Text
              style={[tailwind('font-bold text-center text-light font-14')]}>
              Join
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Footer = (props: any) => {
  return (
    <View style={[styles.footerRoot]}>
      <View style={styles.footerItemSpace}>
        <View style={styles.footerItemSpace}>
          <DollarIcon />
          <Text style={styles.footerItem}>
            {'\u20B9 '}
            {props.amount_letters}
          </Text>
        </View>

        <View style={styles.footerItemSpace}>
          <CupIcon />
          <Text style={styles.footerItem}>{props.bonus}</Text>
        </View>

        <View style={styles.footerItemSpace}>
          <MIcon />
          <Text style={styles.footerItem}>upto {props.max_entry}</Text>
        </View>
      </View>

      {props.guaranteed && (
        <View style={styles.footerItemSpace}>
          <TickIcon />
          <Text style={styles.footerItem}>Gauranteed</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#172338',
    borderRadius: 8,
    elevation: 5,
  },
  topSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  content: {
    padding: 16,
  },
  contestTitle: {
    fontFamily: 'gadugi-normal',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  contestAmount: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'gadugi-bold',
    paddingVertical: 8,
    fontSize: 14,
  },
  footerRoot: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: 12,
    // backgroundColor: '#121D2E',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItemSpace: {alignItems: 'center', flexDirection: 'row'},
  footerItem: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingHorizontal: 4,
  },
  entryAmount: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    textAlign: 'center',
  },
});
