import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import clr from '../../../../constants/colors';
import {MinusIcon} from '../../../../assets/newIcons';

interface PropTypes {
  count: number;
  clearRef: any;
  dT: boolean;
}

function SelectionIndicator(props: PropTypes) {
  return (
    <View style={[ss.root]}>
      <View style={[ss.space]}>
        <View style={[ss.space2]}></View>
      </View>
      <View style={[ss.container]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => {
          return (
            <View
              key={item}
              style={[
                ss.item,
                {
                  backgroundColor: item <= props.count ? '#006A4D' : 'white',
                },
              ]}>
              {item === props.count && (
                <Text style={[ss.count]}>{props.count}</Text>
              )}

              {item === 11 && props.count !== 11 ? (
                <Text style={[ss.count, {color: '#614920'}]}>11</Text>
              ) : null}
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => props.clearRef?.current?.open()}
        style={[ss.clearC]}>
        <MinusIcon dT={props.dT} />
      </TouchableOpacity>
    </View>
  );
}

const ss = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 8,
    marginVertical: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  space: {
    height: 20,
    flex: 1,
  },
  space2: {
    marginHorizontal: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 7,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 24,
    height: 13,
    marginHorizontal: 1,
  },
  dEmpty: {
    backgroundColor: '#ffffff',
  },
  lEmpty: {
    backgroundColor: '#E5E5E5',
  },
  count: {
    fontFamily: 'Gadugi-Bold',
    textAlign: 'center',
    fontSize: 10,
    color: '#FFFFFF',
  },
  clearC: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default React.memo(SelectionIndicator);
