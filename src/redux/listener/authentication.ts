import {takeLatestListeners} from '@utils/redux/listener';
import {load, remove, save} from '@utils/storage';
import {StorageKey} from '@utils/storage/constants';
import {authenticationActions} from '../action-slice/authentication';

takeLatestListeners(true)({
  actionCreator: authenticationActions.login,
  effect: async (action, listenerApi) => {
    const {body, isRemember} = action.payload;

    if (!isRemember) {
      remove(StorageKey.USERNAME);
    } else {
      save(StorageKey.USERNAME, body.username);
    }

    save(StorageKey.TOKEN, body.username + '123');

    if (load(StorageKey.CHECK_FIRST_APP_LAUNCH) !== 0) {
      save(StorageKey.CHECK_FIRST_APP_LAUNCH, 0);
    }

    listenerApi.dispatch(
      authenticationActions.setToken((body.username + '123') as string),
    );
  },
});
