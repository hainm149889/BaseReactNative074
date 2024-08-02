import {counterActions} from '@redux/action-slice';
import {takeLatestListeners} from '@utils/redux/listener';

takeLatestListeners()({
  actionCreator: counterActions.increment,
  effect: async (_, listenerApi) => {
    listenerApi.dispatch(counterActions.saveIncrement());
  },
});
