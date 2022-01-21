import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector, useDispatch} from 'react-redux';
import {useIsScreenReady} from '../../../utils/customHoooks';
import {useNavigation} from '@react-navigation/native';
import EnterAmountAddCash from './molecules/enteramount.addcash';
import SubTitleAddCash from './atoms/subtitle.addcash';

import {ButtonComponent, TopBar} from '../../../sharedComponents';
import EnterCouponAddCash from './molecules/entercoupon.addcash';
import CouponCardAddCash from './molecules/coupon.card.addcash';

const log = console.log;

interface PropTypes {
  from: string;
}

export default function AddCashScreen(props: PropTypes) {
  const [amount, setAmount] = useState('');
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Add Cash'} />
      <ScrollView>
        <EnterAmountAddCash amount={amount} setAmount={setAmount} />
        <SubTitleAddCash text={'Coupon Codes'} />
        <EnterCouponAddCash code={code} setCode={setCode} />
        <CouponCardAddCash />
        <CouponCardAddCash />
      </ScrollView>
      <TouchableOpacity style={[tailwind('m-3')]}>
        <ButtonComponent text={'NEXT'} />
      </TouchableOpacity>
    </View>
  );
}
