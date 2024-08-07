export type CounterState = {
  value: number;
};

export interface SplashState {
  isMounted: boolean;
}

export interface AuthenticationState {
  token: string | undefined;
}
