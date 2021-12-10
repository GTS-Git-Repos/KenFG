import SInfo from 'react-native-sensitive-info';

export const saveToken = async (token: string) => {
  try {
    await SInfo.setItem('jwt_token', token, {
      sharedPreferencesName: 'KenFg',
      keychainService: 'KenFg',
    });
  } catch (err) {
    console.log('saveTokenErr -->', err);

    return false;
  }
};

export const getToken = async () => {
  try {
    const token = await SInfo.getItem('jwt_token', {
      sharedPreferencesName: 'KenFg',
      keychainService: 'KenFg',
    });
    return token;
  } catch {
    return false;
  }
};

export const removeToken = async () => {
  try {
    const token = await SInfo.deleteItem('jwt_token', {
      sharedPreferencesName: 'KenFg',
      keychainService: 'KenFg',
    });
    return true;
  } catch {
    return false;
  }
};
