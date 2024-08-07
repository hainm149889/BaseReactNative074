import {appActions} from '@redux-slice';
import {takeLatestListeners} from '@utils/redux/listener';
import isEmpty from 'lodash.isempty';

takeLatestListeners()({
  actionCreator: appActions.startLoadApp,
  effect: async (_, listenerApi) => {
    const {token} = listenerApi.getState().authentication;

    if (!isEmpty(token)) {
    }
  },
});
