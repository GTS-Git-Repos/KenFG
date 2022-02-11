import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector, useDispatch} from 'react-redux';
// import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
// import {useNavigation} from '@react-navigation/native';
import EnterAmountAddCash from './molecules/enteramount.addcash';
import SubTitleAddCash from './atoms/subtitle.addcash';

import {
  ButtonComponent,
  TopBar,
  BlockScreenByLoading,
} from '../../../sharedComponents';
import EnterCouponAddCash from './molecules/entercoupon.addcash';
import CouponCardAddCash from './molecules/coupon.card.addcash';
import {userInfo} from '../../../store/selectors';

const log = console.log;

interface PropTypes {
  from: string;
  amount: string;
  setAmount(value: string): any;
  initiatePayment: any;
  updateWallet: any;
}

export default function AddCashScreen(props: PropTypes) {
  const userMeta = useSelector(userInfo);
  const [code, setCode] = useState('');

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Add Cash'} />
      <ScrollView>
        <EnterAmountAddCash amount={props.amount} setAmount={props.setAmount} />
        <SubTitleAddCash text={'Coupon Codes'} />
        <EnterCouponAddCash code={code} setCode={setCode} />
        <CouponCardAddCash />
        <CouponCardAddCash />
      </ScrollView>
      <TouchableOpacity
        onPress={() =>
          props.initiatePayment.mutate({
            order_amount: props.amount,
            player_key: userMeta.mobile,
          })
        }
        style={[tailwind('m-3')]}>
        <ButtonComponent text={'NEXT'} />
      </TouchableOpacity>
      {props.initiatePayment.isLoading && <BlockScreenByLoading />}
      {props.updateWallet.isLoading && <BlockScreenByLoading />}
    </View>
  );
}
