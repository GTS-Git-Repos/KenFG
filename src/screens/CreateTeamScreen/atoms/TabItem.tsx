import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import assets from '../../../constants/assets_manifest';
import LinearGradient from 'react-native-linear-gradient';
import {useWindowDimensions} from 'react-native';
import {TabsBottomLine} from '../../../sharedComponents';

interface PropTypes {
  active: boolean;
  tabName: string;
  count: number;
  onTabPressed(index: number): any;
  index: number;
}

export default function TabItem(props: PropTypes) {
  const width = useWindowDimensions('window').width;
  const TABWIDTH = (width - 32) / 4;

  const onLayoutAction = (e: any) => {
    console.log(e.nativeEvent.layout);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        props.onTabPressed(props.index);
      }}
      style={[{width: TABWIDTH}, tailwind('')]}>
      <View style={[tailwind('pt-3')]}>
        <Text
          style={[
            tailwind(
              `font-bold text-center font-13 
              `,
            ),
            {
              color: props.active ? '#FFFF' : '#8797B1',
            },
          ]}>
          {props.tabName} ({props.count})
        </Text>
        {props.active && <TabsBottomLine />}
      </View>
    </TouchableOpacity>
  );
}
