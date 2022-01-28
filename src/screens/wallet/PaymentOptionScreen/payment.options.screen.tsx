import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import tailwind from '../../../../tailwind';
import {BlockScreenByLoading} from '../../../sharedComponents';

import {PAYMENT_OPTION} from '../../../constants/appContants';
import SubTitleAddCash from './atoms/subtitle.addcash';

import {ButtonComponent, TopBar} from '../../../sharedComponents';
import PaymentOptionWallet from './molecules/payment.option.wallet';

const log = console.log;

interface PropTypes {
  selected_payment: any;
  changePayment(option: number): any;
  proceedToCashFree(): void;
  initiatePayment: any;
}

export default function PaymentOptionScreen(props: PropTypes) {
  return (
    <View style={tailwind('h-full bg-dark')}>
      <TopBar text={'Add Cash'} />
      <ScrollView>
        <SubTitleAddCash text={'Wallets'} />

        <View style={[tailwind('rounded bg-dark-3 p-2 mx-2')]}>
          <PaymentOptionWallet
            selected={PAYMENT_OPTION.GPAY === props.selected_payment}
            text={'Google Pay'}
            option={PAYMENT_OPTION.GPAY}
            changePayment={props.changePayment}
          />

          <PaymentOptionWallet
            selected={PAYMENT_OPTION.PHONEPE === props.selected_payment}
            text={'PhonePe'}
            option={PAYMENT_OPTION.PHONEPE}
            changePayment={props.changePayment}
          />

          <PaymentOptionWallet
            selected={PAYMENT_OPTION.PAYTM === props.selected_payment}
            text={'Paytm'}
            option={PAYMENT_OPTION.PAYTM}
            changePayment={props.changePayment}
          />

          <PaymentOptionWallet
            selected={PAYMENT_OPTION.UPI === props.selected_payment}
            text={'UPI'}
            option={PAYMENT_OPTION.UPI}
            changePayment={props.changePayment}
          />
        </View>

        <SubTitleAddCash text={'Bank Transaction'} />
        <View style={[tailwind('rounded bg-dark-3 p-2 mx-2')]}>
          <PaymentOptionWallet
            selected={PAYMENT_OPTION.CREDIT === props.selected_payment}
            text={'Credit Card'}
            option={PAYMENT_OPTION.CREDIT}
            changePayment={props.changePayment}
          />
          <PaymentOptionWallet
            selected={PAYMENT_OPTION.DEBIT === props.selected_payment}
            option={PAYMENT_OPTION.DEBIT}
            text={'Debit Card'}
            changePayment={props.changePayment}
          />
          <PaymentOptionWallet
            option={PAYMENT_OPTION.NET_BANKING}
            selected={PAYMENT_OPTION.NET_BANKING === props.selected_payment}
            text={'Net Banking'}
            changePayment={props.changePayment}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={props.proceedToCashFree}
        style={[tailwind('m-3')]}>
        <ButtonComponent text={'CONTINUE'} />
      </TouchableOpacity>

      {props.initiatePayment.isLoading && <BlockScreenByLoading />}
    </View>
  );
}
