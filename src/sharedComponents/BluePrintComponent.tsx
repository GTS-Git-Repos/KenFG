import React from "react";
import tailwind from 'tailwind';
import {View, Text} from 'react-native';

interface PropTypes {
  text?: string;
}

export default function BluePrintComponent(props: PropTypes) {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
