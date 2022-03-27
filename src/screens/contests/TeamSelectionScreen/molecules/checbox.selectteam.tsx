import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface PropTypes {
  team_key: string;
  choosenTeams: any;
  dT: boolean;
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
  return (
    <Icon
      name={selected ? 'checkbox-outline' : 'square-outline'}
      size={24}
      color={props.dT ? '#D8C872' : '#9C181E'}
    />
  );
}
