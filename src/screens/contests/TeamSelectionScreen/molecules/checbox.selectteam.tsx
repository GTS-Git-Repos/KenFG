import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  team_key: string;
  choosenTeams: any;
}

export default function CheckBoxSelectedTeam(props: PropTypes) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const isExists = props.choosenTeams.find(
      (item: any) => item === props.team_key,
    );
    if (isExists) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [props.choosenTeams]);

  return selected ? (
    <Icon name="checkbox-outline" size={24} color="#D8C872" />
  ) : (
    <Icon name="square-outline" size={24} color="#D8C872" />
  );
}
