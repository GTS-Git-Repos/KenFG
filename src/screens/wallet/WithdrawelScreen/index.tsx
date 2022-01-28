import React, {useState} from 'react';
import WithDrawelScreen from './withdrawel.screen';

export default function WithDrawelHOC() {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <WithDrawelScreen
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
    />
  );
}
