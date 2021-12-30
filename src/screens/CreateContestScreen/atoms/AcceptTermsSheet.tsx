import React from 'react';
import tailwind from '../../../../tailwind';
import {View, Image, TouchableOpacity, Text} from 'react-native';

interface PropTypes {
  termsSheet: any;
  enableCreateContest: any;
}

export default function AcceptTermsSheet(props: PropTypes) {
  return (
    <View style={[tailwind('bg-dark-4 rounded-t-lg py-5')]}>
      <View>
        <Text
          style={[tailwind('font-bold text-white text-center font-16 pb-2')]}>
          Terms and Condition
        </Text>
        <Text
          style={[
            tailwind('font-regular text-white text-center px-20 font-12'),
          ]}>
          By clicking on ‘I Agree’ button you are accepting to the T&C set by
          KenFG for hosting a Private contest
        </Text>
      </View>
      <LaterButton termsSheet={props.termsSheet} />
      <AgreeButton enableCreateContest={props.enableCreateContest} />
    </View>
  );
}

const LaterButton = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => props.termsSheet?.current?.close()}
      style={[tailwind('py-3 bg-dark-3 mx-4 my-3 rounded')]}>
      <Text
        style={[
          tailwind('font-bold text-white text-center  uppercase font-12'),
        ]}>
        May be Later
      </Text>
    </TouchableOpacity>
  );
};

const AgreeButton = (props: any) => {
  return (
    <TouchableOpacity
      onPress={props.enableCreateContest}
      style={[tailwind('py-3 bg-green mx-4 mb-3 rounded')]}>
      <Text
        style={[
          tailwind('font-bold text-white text-center  uppercase font-12'),
        ]}>
        I Agree
      </Text>
    </TouchableOpacity>
  );
};
