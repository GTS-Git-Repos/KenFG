/**
 * Contest card, appears in contest list screen contest info page
 * second innings contests
 * private contest screen share page
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProgressBarContestCard from './progressbar.contest';
import ContestFooter from '../atoms/footer.contest';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

// type ContestType = 'public' | 'practice';

interface PropTypes {
  onContestCardPress(contest_key: string): any;
  contest_key: string;
  match_key: string;
  title: string;
  filled_spots: number;
  total_spots: number;
  occupaid_cent: number;
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
  const dT = useSelector(getAppThemeSelector);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.root, dT ? clr.bgd2 : clr.bgw]}
      onPress={() => props.onContestCardPress(props.contest_key)}>
      <View style={styles.content}>
        <View style={[styles.topSection]}>
          <View>
            <Text style={[styles.contestTitle, dT ? clr.tw : clr.td1]}>
              {props.title}
            </Text>
            <Text style={[styles.contestAmount, dT ? clr.tw : clr.td1]}>
              {'\u20B9 '}
              {props.amount_letters}
            </Text>
          </View>
          <ContestEntryType
            dT={dT}
            proceedToJoin={props.proceedToJoin}
            contest_type={props.contest_type}
            entry={props.entry}
            contest_key={props.contest_key}
          />
        </View>

        {/* Progress bar */}
        <ProgressBarContestCard
          total_spots={props.total_spots}
          occupaid_cent={props.occupaid_cent}
          filled_spots={props.filled_spots}
        />
      </View>
      <ContestFooter
        amount_letters={props.amount_letters}
        bonus={props.bonus}
        guaranteed={props.guaranteed}
        max_entry={props.max_entry}
      />
    </TouchableOpacity>
  );
}

const ContestEntryType = (props: any) => {
  const dT = props.dT;
  return (
    <TouchableOpacity onPress={() => props.proceedToJoin(props.contest_key)}>
      <Text
        style={[styles.contestTitle, styles.entryTxt, dT ? clr.tw : clr.td1]}>
        Entry
      </Text>
      <View style={[styles.entryContainer]}>
        <View style={[styles.entryBtn,]}>
          {props.entry === 0 ? (
            <Text style={[styles.entryAmount]}>Join</Text>
          ) : (
            <Text style={[styles.entryAmount]}>
              {'\u20B9 '}
              {props.entry}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#172338',
    borderRadius: 8,
    elevation: 5,
  },
  topSection: {
    // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
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
    paddingTop: 8,
    paddingBottom: 12,
    top: 4,
    fontSize: 14,
  },
  entryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  entryBtn: {
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 16,
    backgroundColor: '#006A4D',
  },
  entryTxt: {
    textAlign: 'right',
    paddingBottom: 6,
  },

  entryAmount: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
