// used in contests card shared, and Joinned contest footer

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {DollarIcon, CupIcon, MIcon, TickIcon} from '../../assets/newIcons';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

interface PropTypes {
  amount_letters: string;
  bonus: string;
  max_entry?: number;
  guaranteed: boolean;
}

export default function ContestFooter(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);
  return (
    <View style={[styles.footerRoot, !dT && clr.bgGray]}>
      <View style={styles.footerItemSpace}>
        <View style={styles.footerItemSpace}>
          <DollarIcon dT={dT} />
          <Text
            numberOfLines={1}
            style={[styles.footerItem, !dT && clr.tdgray]}>
            {'\u20B9 '}
            {props.amount_letters}
          </Text>
        </View>

        <View style={styles.footerItemSpace}>
          <CupIcon dT={true} />
          <Text
            numberOfLines={1}
            style={[styles.footerItem, !dT && clr.tdgray]}>
            {props.bonus || '0%'}
          </Text>
        </View>

        {props.max_entry ? (
          <View style={styles.footerItemSpace}>
            <MIcon dT={true} />
            <Text
              numberOfLines={1}
              style={[styles.footerItem, !dT && clr.tdgray]}>
              upto {props.max_entry}
            </Text>
          </View>
        ) : null}
      </View>
      {props.guaranteed && (
        <View style={styles.footerItemSpace}>
          <TickIcon dT={true} />
          <Text style={[styles.footerItem, !dT && clr.tdgray]}>Gauranteed</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  footerRoot: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#121D2E',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItemSpace: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerItem: {
    maxWidth: 100,
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingHorizontal: 6,
    textTransform: 'capitalize',
  },
});
