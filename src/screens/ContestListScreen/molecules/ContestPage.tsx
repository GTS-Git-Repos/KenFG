import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Text, ScrollView} from 'react-native';
import {ContestCard} from '../../../sharedComponents';
import FilterTab from './Filtertab';
import ContestSubTitle from '../atoms/ContestSubTitle';
const log = console.log;

interface PropTypes {
  status: string;
  data: any;
}

export default function ContestPage(props: PropTypes) {
  if (props.status === 'loading') {
    return (
      <Text style={[tailwind('font-regular text-light font-15')]}>
        Loading...
      </Text>
    );
  }
  if (props.status === 'success' && !props.data) {
    return (
      <Text style={[tailwind('font-regular text-light font-15')]}>
        No Contests Found
      </Text>
    );
  }

  log(props.data);

  return (
    <ScrollView>
      <FilterTab />
      <ContestSubTitle
        title={'Your Favorite Contests'}
        subText={'Ready for One more match'}
      />
      <View style={[tailwind('mx-2')]}>
        <View style={[tailwind('')]}>
          {props.data.map((item: any) => {
            return (
              <View
                key={item.key}
                style={[tailwind('my-2 border border-gray-800 rounded')]}>
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
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
