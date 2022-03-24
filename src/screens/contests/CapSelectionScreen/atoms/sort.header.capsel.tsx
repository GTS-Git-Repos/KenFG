import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DownArrowIcon, TopArrowIcon} from '../../../../assets/newIcons';
import {useSelector} from 'react-redux';
import {getAppThemeSelector} from '../../../../store/selectors';
import clr from '../../../../constants/colors';

interface PropTypes {
  sort: any;
  sortByAction(input: any): any;
}

export default function SortHeader(props: PropTypes) {
  const dT = useSelector(getAppThemeSelector);

  return (
    <View style={[tailwind('flex-row items-center'), !dT && clr.bgw]}>
      <TouchableOpacity
        onPress={() =>
          props.sortByAction({
            category: true,
          })
        }
        style={[ss.tab, {flex: 2.2}]}>
        <Text style={[ss.headText]}>CATEGORY</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          props.sortByAction({
            points: true,
          })
        }
        style={[ss.tab, {flex: 2.7}]}>
        <Text style={[ss.headText]}>Points</Text>
        {props.sort.sortByPoints === true && <DownArrowIcon invert={true} />}
        {props.sort.sortByPoints === false && <DownArrowIcon invert={false} />}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          props.sortByAction({
            selc: true,
          })
        }
        style={[ss.tab, {flex: 2}]}>
        <Text style={[ss.headText]}>% C By</Text>
        {props.sort.sortByC === true && <DownArrowIcon invert={true} />}
        {props.sort.sortByC === false && <DownArrowIcon invert={false} />}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          props.sortByAction({
            selvc: true,
          })
        }
        style={[ss.tab, {flex: 2}]}>
        <Text style={[ss.headText]}>% VC By</Text>
        {props.sort.sortByVc === true && <DownArrowIcon invert={true} />}
        {props.sort.sortByVc === false && <DownArrowIcon invert={false} />}
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  tab: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headText: {
    color: '#8797B1',
    fontFamily: 'gadugi-normal',
    fontSize: 13,
    paddingRight: 4,
    textTransform: 'uppercase',
  },
});
