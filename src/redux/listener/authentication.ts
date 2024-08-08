import {Data} from '@services/axios/service';
import {handleErrorApi, validResponse} from '@utils/method';
import {takeLatestListeners} from '@utils/redux/listener';
import {load, remove, save} from '@utils/storage';
import {StorageKey} from '@utils/storage/constants';
import {authenticationActions} from '../action-slice/authentication';

takeLatestListeners(true)({
  actionCreator: authenticationActions.login,
  effect: async (action, listenerApi) => {
    const {body, onFailure, isRemember} = action.payload;

    const response = await Data.userAccountUserAccountLoginCreate({
      ...body,
      AgentCode: 'DC10899',
      Remember: isRemember,
    });

    if (!response) {
      onFailure('Lỗi mạng rồi kìa');
      return;
    }

    if (validResponse(response)) {
      if (!isRemember) {
        remove(StorageKey.USERNAME);
        remove(StorageKey.AGENT_CODE);
      } else {
        save(StorageKey.USERNAME, body.username);
      }

      save(StorageKey.TOKEN, response.data.TokenLogin);

      if (load(StorageKey.CHECK_FIRST_APP_LAUNCH) !== 0) {
        save(StorageKey.CHECK_FIRST_APP_LAUNCH, 0);
      }

      listenerApi.dispatch(
        authenticationActions.setToken(response.data.TokenLogin as string),
      );

      // listenerApi.dispatch(currentAccountActions.loadAccountData());
    } else {
      onFailure(handleErrorApi(response.data.StatusCode as string).msg);
    }
  },
});
