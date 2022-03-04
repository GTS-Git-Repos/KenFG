import React from 'react';
import tailwind from '../../../../../tailwind';
import {View, Text, useWindowDimensions, ScrollView} from 'react-native';
import CreateTeamButton from '../atoms/CreateTeamButton';
import {
  PriceDistributionSwitch,
  WinningsListRank,
} from '../../../../sharedComponents';
const log = console.log;

interface itemTypes {
  key: string;
  value: string;
}

interface PropTypes {
  index: number;
  activeIndex:number,
  data: Array<itemTypes>;
  priceDist: boolean;
  changePriceDistribution(): any;
}

export default function WinningsList(props: PropTypes) {
  const {width} = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={{width: width}}>
      <PriceDistributionSwitch
        priceDist={props.priceDist}
        action={props.changePriceDistribution}
      />

      {props.data.map((item: any) => {
        return (
          <WinningsListRank key={item.key} rank={item.key} value={item.value} />
        );
      })}

      <View style={[tailwind('h-20')]}></View>
    </ScrollView>
  );
}
