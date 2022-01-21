import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import SubTitleAddCash from './atoms/subtitle.addcash';

import {ButtonComponent, TopBar} from '../../../sharedComponents';
import PaymentOptionWallet from './molecules/payment.option.wallet';

const log = console.log;

interface PropTypes {
  from: string;
}

export default function AddCashScreen(props: PropTypes) {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigation = useNavigation<any>();

  function changePayment(e: any): any {
    log('1');
  }

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Add Cash'} />
      <ScrollView>
        <SubTitleAddCash text={'Bank Transaction'} />
        <View style={[tailwind('rounded bg-dark-3 p-2 mx-2')]}>
          <PaymentOptionWallet
            selected={false}
            text={'Credit Card'}
            changePayment={changePayment}
          />
          <PaymentOptionWallet
            selected={false}
            text={'Debit Card'}
            changePayment={changePayment}
          />
          <PaymentOptionWallet
            selected={false}
            text={'Net Banking'}
            changePayment={changePayment}
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={[tailwind('m-3')]}>
        <ButtonComponent text={'CONTINUE'} />
      </TouchableOpacity>
    </View>
  );
}
