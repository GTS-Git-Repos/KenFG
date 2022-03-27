import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {useSelector, useDispatch} from 'react-redux';
// import {useIsScreenReady} from '../../../shared_hooks/app.hooks';
// import {useNavigation} from '@react-navigation/native';
import EnterAmountAddCash from './molecules/enteramount.addcash';
import SubTitleAddCash from './atoms/subtitle.addcash';
import {getAppThemeSelector} from '../../../store/selectors';
import clr from '../../../constants/colors';

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
  const dT = useSelector(getAppThemeSelector);

  const userMeta = useSelector(userInfo);
  const [code, setCode] = useState('');

  return (
    <View style={[tailwind('h-full'), dT ? clr.bgd1 : clr.bgGray]}>
      <TopBar text={'Add Cash'} />
      <ScrollView>
        <EnterAmountAddCash
          dT={dT}
          amount={props.amount}
          setAmount={props.setAmount}
        />
        <SubTitleAddCash dT={dT} text={'Coupon Codes'} />
        <EnterCouponAddCash dT={dT} code={code} setCode={setCode} />
        <CouponCardAddCash dT={dT} />
        <CouponCardAddCash dT={dT} />
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
