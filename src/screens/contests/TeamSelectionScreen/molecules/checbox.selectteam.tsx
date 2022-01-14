import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  selected: any;
}

export default function CheckBoxSelectedTeam(props: PropTypes) {
  return props.selected ? (
    <Icon name="checkbox-outline" size={24} color="#D8C872" />
  ) : (
    <Icon name="square-outline" size={24} color="#D8C872" />
  );
}
