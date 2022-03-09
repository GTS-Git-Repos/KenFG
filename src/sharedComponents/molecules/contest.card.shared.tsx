/**
 * Contest card, appears in contest list screen contest info page
 * second innings contests
 */
import React from 'react';
import tailwind from '../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProgressBarContestCard from './progressbar.contest';
import ContestFooter from '../atoms/footer.contest';
import {appColorsSelector} from '../../store/selectors';
import {useSelector} from 'react-redux';

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
  const clr = useSelector(appColorsSelector);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.root, clr.bg_1]}
      onPress={() => props.onContestCardPress(props.contest_key)}>
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
  return (
    <TouchableOpacity onPress={() => props.proceedToJoin(props.contest_key)}>
      <View style={[styles.entryContainer]}>
        <View style={[styles.entryBtn]}>
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
  entryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 8,
  },
  entryBtn: {
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 16,
    backgroundColor: '#006A4D',
  },
  entryAmount: {
    fontFamily: 'gadugi-bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
