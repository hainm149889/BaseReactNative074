import {HttpStatusCode} from 'axios';

export {};
declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function forwardRef<T, P = {}>(
    render: (
      props: P,
      ref: import('react').ForwardedRef<T>,
    ) => import('react').ReactElement | null,
  ): (
    props: P & import('react').RefAttributes<T>,
  ) => import('react').ReactElement | null;
}
declare global {
  type ActionBase<T = undefined> = T extends undefined
    ? {
        type: string;
      }
    : {
        type: string;
        payload: T;
      };

  type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

  type NestedNavigatorParams<ParamList> = {
    [K in keyof ParamList]: undefined extends ParamList[K]
      ? {screen: K; params?: ParamList[K]}
      : {screen: K; params: ParamList[K]};
  }[keyof ParamList];

  type IncludeMatchingProperties<T, V> = Pick<
    T,
    {[K in keyof T]-?: T[K] extends V ? K : never}[keyof T]
  >;

  type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
    T,
    Exclude<keyof T, Keys>
  > &
    {
      [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
    }[Keys];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  type DataResponse = {
    Message: string;
    StatusCode: HttpStatusCode;
    Success: boolean;
    Expired: boolean;
    Language: string;
  };

  type ResponseBase<T = any> = {
    code: number;
    data: DataResponse & T;
    status: true;
  };
}
