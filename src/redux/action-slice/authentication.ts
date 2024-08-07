import {AuthenticationState} from '@redux/type';
import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SLICE_NAME} from './constant';
import Actions from '@redux-action-type';
import {LoginForm} from '@screens/login/type';

const initialState: AuthenticationState = {
  token: undefined,
};

const authenticationSlice = createSlice({
  name: SLICE_NAME.AUTHENTICATION,
  initialState: initialState,
  reducers: {
    setToken: (state, {payload}: PayloadAction<string>) => {
      state.token = payload;
    },
  },
});

const login = createAction(
  Actions.LOGIN,
  /**
   * @param body data đăng nhập, thường là username và password
   * @param onSucceeded callback khi đăng nhập thành công
   * @param isRemember có ghi nhớ tài khoản hay k
   */
  (body: LoginForm, onSucceeded?: () => void, isRemember?: boolean) => ({
    payload: {
      body,
      onSucceeded,
      isRemember,
    },
  }),
);

export const authenticationActions = {
  ...authenticationSlice.actions,
  login,
};
export const authenticationReducer = authenticationSlice.reducer;
