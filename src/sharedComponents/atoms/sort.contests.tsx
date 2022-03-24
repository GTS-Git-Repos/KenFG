import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {DownArrowIcon} from '../../assets/newIcons/';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ContestPageType} from '../../types/contest';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../store/selectors';
import clr from '../../constants/colors';

export default function SortContests(
  props: Pick<ContestPageType, 'sortStatus' | 'sortByOnPress'>,
) {
  // console.log(props.sortStatus);
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[ss.root, !dT && ss.lRoot]}>
      <TouchableOpacity
        onPress={() =>
          props.sortByOnPress({
            price: !props.sortStatus.price,
            entry: null,
          })
        }
        style={[ss.btn]}>
        {props.sortStatus.price !== null && (
          <DownArrowIcon invert={props.sortStatus.price} />
        )}
        <Text style={[ss.btntxt, !dT && clr.tdgray]}>Total Price</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          props.sortByOnPress({
            price: null,
            entry: !props.sortStatus.entry,
          })
        }
        style={[ss.btn]}>
        <Text style={[ss.btntxt, !dT && clr.tdgray]}>Entry Fee</Text>
        {props.sortStatus.entry !== null && (
          <DownArrowIcon invert={props.sortStatus.entry} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'transparent',
    borderTopColor: 'rgba(31, 41, 55, 1)',
    borderBottomColor: 'rgba(31, 41, 55, 1)',
    borderWidth: 1,
  },
  lRoot: {
    backgroundColor: '#FFFFFF',
    borderTopColor: 'rgba(135, 151, 177, 0.3)',
    borderBottomColor: 'rgba(135, 151, 177, 0.3)',
    borderWidth: 1,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  btntxt: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingHorizontal: 8,
  },
});
