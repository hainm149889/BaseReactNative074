import {API_DATA_URL, DEFAULT_CURRENCY, PRIVATE_KEY_API} from '@env';
import {Api as DataApi} from './axios-data';

import {AxiosError} from 'axios';
import {delay, logout, validResponse} from '@utils/method';
import {load} from '@utils/storage';
import {StorageKey} from '@utils/storage/constants';
import {TIME_OUT} from './constant';
import {showModalConfirm} from '@components/modal-confirm';

const DataClient = new DataApi({baseURL: API_DATA_URL, timeout: TIME_OUT});

/**
 * Kiểm tra xem có phải là lỗi network error && có RequestKey thì thực hiện call RequestGetResponse
 **/
async function getResponseError(error: any) {
  console.log('🚀 ~ interceptors.response: ~ error:', JSON.stringify(error));

  const requestKey =
    error?.config?.data && typeof error?.config?.data === 'string'
      ? JSON.parse(error?.config?.data)?.RequestKey
      : undefined;

  if (error.code === AxiosError.ERR_NETWORK && requestKey) {
    while (true) {
      const res = await Data.requestRequestGetResponseCreate({
        Forced: true,
        Id: requestKey,
      });

      if (validResponse(res)) {
        return {data: JSON.parse(res.data.Item!)};
      } else {
        await delay(1000);
      }
    }
  }

  return Promise.reject(error);
}

/**
 * * Data
 */
DataClient.instance.interceptors.request.use(
  config => {
    config.data.RequestInfo = {
      PrivateKey: PRIVATE_KEY_API,
      UserToken: load(StorageKey.TOKEN),
      SubAgentId: load(StorageKey.SUB_AGENT_ID) ?? '',
      Currency: load(StorageKey.CURRENCY) ?? DEFAULT_CURRENCY,
      Language: load(StorageKey.LANGUAGE),
      IpAddress: load(StorageKey.IP_ADDRESS),
    };
    return config;
  },
  async function (error) {
    console.log(
      '🚀 ~ DataClient.instance.interceptors.request: ~ error:',
      error,
    );
    return Promise.reject(error);
  },
);

DataClient.instance.interceptors.response.use(response => {
  // console.log(`<< Response << [${response.config.url}] =>`, response);
  //nếu token hết hạn thì logout
  if (response.data.StatusCode === '004') {
    logout();
    //show modal notify
    showModalConfirm({
      t18nTitle: 'modal_confirm:expired_session',
      t18nSubtitle: 'modal_confirm:login_again',
      t18nCancel: 'modal_confirm:close',
    });
  }

  return response;
}, getResponseError);

export const Data = DataClient.api;
