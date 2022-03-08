import React, {useState} from 'react';
import {useMutation} from 'react-query';
import {errorBox, infoBox} from '../../../utils/snakBars';
import BankVerifyScreen from './bank.verify.screen';
import {useDispatch, useSelector} from 'react-redux';
import {userInfo} from '../../../store/selectors';
import {updateUserInfo} from '../../../store/actions/userAction';
import {useNavigation} from '@react-navigation/core';
import {useImageUpload} from '../../../shared_hooks/app.hooks';
import {format} from 'date-fns';
import {uploadBankInfoRemote} from '../../../remote/userRemote';

export default function BankVerifyHOC() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userMeta = useSelector(userInfo);
  const {image, openLibrary, removeImage} = useImageUpload();

  const [loading, setLoading] = useState(false);

  const [acno, setAcno] = useState('1234567890');
  const [reacno, setReacno] = useState('1234567890');
  const [ifsc, setIfsc] = useState('IOBA0000072');
  const [name, setName] = useState('hello');
  const [branch, setBranch] = useState('hello');
  const [state, setState] = useState('hello');

  const [error, setError] = useState<any>({
    target: null,
    msg: '',
  });

  function validateInputs() {
    try {
      setError({target: null, msg: ''});

      const iAcno = acno.replace(/ /g, '');
      const iReano = reacno.replace(/ /g, '');
      const iIfsc = ifsc.replace(/ /g, '');
      const iName = name.replace(/ /g, '');
      const iBranch = branch.replace(/ /g, '');
      const iState = state.replace(/ /g, '');

      if (!iAcno.match('[0-9]{9,18}')) {
        throw {name: 'acno', msg: '* Invalid account number'};
      }
      if (iAcno !== iReano) {
        throw {name: 'reacno', msg: '* Account number mismatch'};
      }
      if (!iIfsc.match('[A-Za-z]{4}[a-zA-Z0-9]{7}$')) {
        throw {name: 'ifsc', msg: '* Invalid IFSC code'};
      }
      if (iName.length === 0) {
        throw {name: 'name', msg: '* Invalid Bank name'};
      }
      if (iBranch.length === 0) {
        throw {name: 'branch', msg: '* Invalid Branch name'};
      }
      if (iState.length === 0) {
        throw {name: 'state', msg: '* Invalid State name'};
      }

      if (!image) {
        throw {name: 'image', msg: '* Image is required'};
      }
      uploadBank();
    } catch (err: any) {
      console.log(err);
      setError({target: err.name, msg: err.msg});
    }
  }

  async function uploadBank() {
    const photo: any = {
      uri: image.path,
      type: image.mime,
      name: `${userMeta.mobile}-pan.jpg`,
    };

    const formData = new FormData();
    formData.append('player_key', userMeta.mobile);
    formData.append('bank_ac', acno);
    formData.append('bank_name', name);
    formData.append('bank_ifsc', ifsc);
    formData.append('bank_branch', branch);
    formData.append('bank_state', state);
    formData.append('file', photo);
    setLoading(true);
    const response = await uploadBankInfoRemote(formData);
    setLoading(false);
    if (response) {
      infoBox('Bank information updated', 500);
      navigation.goBack();
    } else {
      infoBox('Failed to submit', 500);
    }
  }

  return (
    <BankVerifyScreen
      acno={acno}
      setAcno={setAcno}
      reacno={reacno}
      setReacno={setReacno}
      ifsc={ifsc}
      setIfsc={setIfsc}
      name={name}
      setName={setName}
      branch={branch}
      setBranch={setBranch}
      state={state}
      setState={setState}
      image={image}
      openLibrary={openLibrary}
      removeImage={removeImage}
      error={error}
      validateInputs={validateInputs}
    />
  );
}
