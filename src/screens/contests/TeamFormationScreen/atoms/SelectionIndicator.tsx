import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import assets from '../../../../constants/assets_manifest';

interface PropTypes {
  count: number;
  clearRef: any;
}

function SelectionIndicator(props: PropTypes) {
  return (
    <View style={[tailwind('flex-row p-2 my-1 justify-between items-center')]}>
      <View style={[tailwind('h-5'), {flex: 1}]}>
        <View style={[tailwind('mx-1')]}></View>
      </View>
      <View style={[tailwind('flex-row items-center'), {flex: 7}]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => {
          return (
            <View
              key={item}
              style={[
                tailwind('flex-row items-center justify-center'),
                {
                  flex: 1,
                  width: 24,
                  height: 13,
                  marginHorizontal: 1,
                  backgroundColor: item <= props.count ? '#006A4D' : 'white',
                },
              ]}>
              {item === props.count && (
                <Text
                  style={[
                    tailwind('font-bold text-center text-white font-10'),
                  ]}>
                  {props.count}
                </Text>
              )}

              {item === 11 && props.count !== 11 ? (
                <Text
                  style={[
                    tailwind('font-bold text-center font-10'),
                    {color: '#614920'},
                  ]}>
                  11
                </Text>
              ) : null}
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => props.clearRef?.current?.open()}
        style={[tailwind('flex-row items-center justify-center'), {flex: 2}]}>
        <Image
          resizeMode="contain"
          source={assets.minus}
          style={[tailwind(''), {width: 24, height: 24}]}
        />
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(SelectionIndicator);
