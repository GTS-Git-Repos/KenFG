import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  text?: string;
}

export default function SelectionTabs(props: PropTypes) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[tailwind('bg-dark-3')]}>
      <TabItem tabName="WK" count={2} active={true} />
      <TabItem tabName="BAT" count={0} active={false} />
      <TabItem tabName="AR" count={0} active={false} />
      <TabItem tabName="BOWL" count={0} active={false} />
    </ScrollView>
  );
}

const TabItem = ({tabName, count, active}) => {
  return (
    <View style={[{width: 100}, tailwind('')]}>
      <View style={[tailwind('pt-3')]}>
        <Text
          style={[
            tailwind(`font-bold text-center font-13`),
            {
              color: active ? '#FFFF' : '#8797B1',
            },
          ]}>
          {tabName} ({count})
        </Text>
        {active && (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={[tailwind('mx-3 mt-3 rounded h-1')]}
            colors={['#816D2E', '#614920']}></LinearGradient>
        )}
      </View>
    </View>
  );
};
