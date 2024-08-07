import Actions from '@redux-action-type';
import {dispatch} from '@utils/redux';
import {remove} from '@utils/storage';
import {StorageKey} from '@utils/storage/constants';

type TypesBase =
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined';

export function delay(milliseconds = 500): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

export const onCheckType = (
  source: any,
  type: TypesBase,
): source is TypesBase => {
  return typeof source === type;
};

export const execFunc = <Fn extends (...args: any[]) => any>(
  func?: Fn,
  ...args: Parameters<Fn>
) => {
  if (onCheckType(func, 'function')) {
    func(...args);
  }
};

/**
 * return true when success and false when error
 */
export function validResponse<T = any>(response: T) {
  //@ts-ignore
  if (!response.data?.Success) {
    // TODO: handle error
    return false;
  }

  return true;
}

export const logout = async () => {
  dispatch({type: Actions.LOGOUT});
  await remove(StorageKey.TOKEN);
  await remove(StorageKey.USERNAME);
};
