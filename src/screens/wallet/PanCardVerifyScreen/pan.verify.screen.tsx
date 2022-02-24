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

interface PropTypes {}

export default function PanVerifyScreen(props: PropTypes) {
  const userMeta = useSelector(userInfo);
  const [code, setCode] = useState('');

  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Add Cash'} />
      <ScrollView>
        <EnterAmountAddCash />
        <SubTitleAddCash text={'Coupon Codes'} />
        <EnterCouponAddCash code={code} setCode={setCode} />
        <CouponCardAddCash />
        <CouponCardAddCash />
      </ScrollView>
      <TouchableOpacity onPress={() => {}} style={[tailwind('m-3')]}>
        <ButtonComponent text={'Proceed'} />
      </TouchableOpacity>
      {/* {props.initiatePayment.isLoading && <BlockScreenByLoading />}
      {props.updateWallet.isLoading && <BlockScreenByLoading />} */}
    </View>
  );
}
