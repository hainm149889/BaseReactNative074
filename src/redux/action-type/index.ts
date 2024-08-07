import * as CounterActions from './counter';
import * as AppActions from './app';
import * as AuthenticationActions from './authentication';

const Actions = {
  ...CounterActions,
  ...AppActions,
  ...AuthenticationActions,
};

export default Actions;
