import {selectToken} from '@redux-selector';
import isEmpty from 'lodash.isempty';
import {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {useSelector} from 'react-redux';

export const useHandleLogin = () => {
  const token = useSelector(selectToken);
  console.log('🚀 ~ useHandleLogin ~ token:', token);

  useEffect(() => {
    let timeId: NodeJS.Timeout | null = null;
    if (!isEmpty(token)) {
      timeId = setTimeout(async () => {
        await BootSplash.hide({fade: true});
      }, 800);
    }

    return () => {
      if (timeId) {
        clearTimeout(timeId);
      }
    };
  }, [token]);

  return token;
};
