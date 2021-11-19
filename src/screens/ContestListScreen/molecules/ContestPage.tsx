import React from 'react';
import tailwind from '../../../../tailwind';
import {View, ScrollView} from 'react-native';
import {ContestCard} from '../../../sharedComponents';
import FilterTab from './Filtertab';
import ContestSubTitle from '../atoms/ContestSubTitle';

interface PropTypes {
  text?: string;
}

export default function ContestPage(props: PropTypes) {
  return (
    <ScrollView>
      <FilterTab />
      <ContestSubTitle
        title={'Your Favorite Contests'}
        subText={'Ready for One more match'}
      />
      <View style={[tailwind('mx-2')]}>
        <View style={[tailwind('my-2 border border-gray-800 rounded')]}>
            <ContestCard
              name={'Prize Pool'}
              title="10 Crores"
              left_spot={10}
              total_spot={100}
              first_reward={'1 Crore'}
              gaurantee={true}
              practice={false}
              demo_entry_amount={56}
              entry_amount={20}
            />
        </View>

        <ContestSubTitle
          title={'Big Winnings Lower Entry'}
          subText={'Ready for One more match'}
        />
        <View style={[tailwind('my-2 border border-gray-800 rounded')]}>
          <ContestCard
            name={'Prize Pool'}
            title="3 Crores"
            left_spot={432}
            total_spot={1000}
            first_reward={'1 Crore'}
            gaurantee={true}
            practice={false}
            demo_entry_amount={17}
            entry_amount={10}
          />
        </View>
        <View style={[tailwind('my-2 border border-gray-800 rounded')]}>
          <ContestCard
            name={'Prize Pool'}
            title="10 Croes"
            left_spot={10}
            total_spot={100}
            first_reward={'1 Crore'}
            gaurantee={true}
            practice={false}
            demo_entry_amount={17}
            entry_amount={10}
          />
        </View>
      </View>
    </ScrollView>
  );
}
