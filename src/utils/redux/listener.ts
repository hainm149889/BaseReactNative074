import {
  HideDialogConfig,
  hideLoading,
  ShowDialogConfig,
  showLoading,
} from '@components/progress-dialog';
import {createListenerMiddleware, TypedStartListening} from '@reduxjs/toolkit';
import {RootState} from '@store/all-reducers';
import {AppDispatch} from '@store/store';

export const listenerMiddleware = createListenerMiddleware();
const startAppListening = listenerMiddleware.startListening;

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const takeLatestListeners =
  (
    withLoading?: boolean,
    configLoading?: {
      showConfig: ShowDialogConfig;
      successConfig?: HideDialogConfig;
      failedConfig?: HideDialogConfig;
    },
  ): AppStartListening =>
  //@ts-ignore
  (startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        try {
          listenerApi.cancelActiveListeners();

          await listenerApi.delay(15);

          if (withLoading) {
            showLoading(configLoading?.showConfig);
          }

          await startListeningOption.effect(action, listenerApi);

          if (withLoading) {
            hideLoading(configLoading?.successConfig);
          }
        } catch (error: any) {
          console.log(
            '[ERROR] takeLatestListeners:>> ',
            action.type,
            (error as Error).message,
          );
          if (withLoading) {
            const hasErrorMessage = error.message && error.message !== '';

            hideLoading(
              configLoading?.failedConfig
                ? {
                    ...configLoading.failedConfig,
                    waitConfirm: hasErrorMessage,
                    t18nSubtitle: hasErrorMessage
                      ? error.message
                      : configLoading.failedConfig.t18nSubtitle,
                  }
                : undefined,
            );
          }
        }
      },
    });
  };

export const takeMultiListeners =
  (
    withLoading?: boolean,
    configLoading?: {
      showConfig: ShowDialogConfig;
      successConfig: HideDialogConfig;
      failedConfig: HideDialogConfig;
    },
  ): AppStartListening =>
  //@ts-ignore
  (startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        try {
          if (withLoading) {
            showLoading(configLoading?.showConfig);
          }

          await startListeningOption.effect(action, listenerApi);

          if (withLoading) {
            hideLoading(configLoading?.successConfig);
          }
        } catch (error) {
          console.log(
            '[ERROR] takeMultiListeners:>> ',
            action.type,
            (error as Error).message,
          );
          if (withLoading) {
            hideLoading(
              configLoading
                ? {
                    ...configLoading?.failedConfig,
                    t18nSubtitle:
                      (error as Error).message &&
                      (error as Error).message !== ''
                        ? (error as Error).message
                        : configLoading?.failedConfig.t18nSubtitle,
                  }
                : undefined,
            );
          }
        }
      },
    });
  };

export const takeLeadingListeners =
  (
    withLoading?: boolean,
    configLoading?: {
      showConfig: ShowDialogConfig;
      hideConfig: HideDialogConfig;
      failedConfig: HideDialogConfig;
    },
  ): AppStartListening =>
  //@ts-ignore
  (startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        try {
          listenerApi.unsubscribe();

          if (withLoading) {
            showLoading(configLoading?.showConfig);
          }

          await startListeningOption.effect(action, listenerApi);

          if (withLoading) {
            hideLoading(configLoading?.hideConfig);
          }

          listenerApi.subscribe();
        } catch (error) {
          console.log(
            '[ERROR] takeLeadingListeners:>> ',
            (error as Error).message,
          );
          if (withLoading) {
            hideLoading(
              configLoading
                ? {
                    ...configLoading?.failedConfig,
                    t18nSubtitle:
                      (error as Error).message &&
                      (error as Error).message !== ''
                        ? (error as Error).message
                        : configLoading?.failedConfig.t18nSubtitle,
                  }
                : undefined,
            );
          }
        }
      },
    });
  };

export const debounceListeners =
  (
    msDuration: number,
    withLoading?: boolean,
    configLoading?: {
      showConfig: ShowDialogConfig;
      hideConfig: HideDialogConfig;
      failedConfig: HideDialogConfig;
    },
  ): AppStartListening =>
  //@ts-ignore
  (startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        try {
          listenerApi.cancelActiveListeners();

          await listenerApi.delay(msDuration);

          if (withLoading) {
            showLoading(configLoading?.showConfig);
          }

          await startListeningOption.effect(action, listenerApi);

          if (withLoading) {
            hideLoading(configLoading?.hideConfig);
          }
        } catch (error) {
          console.log(
            '[ERROR] debounceListeners:>> ',
            (error as Error).message,
          );
          if (withLoading) {
            hideLoading(
              configLoading
                ? {
                    ...configLoading?.failedConfig,
                    t18nSubtitle:
                      (error as Error).message &&
                      (error as Error).message !== ''
                        ? (error as Error).message
                        : configLoading?.failedConfig.t18nSubtitle,
                  }
                : undefined,
            );
          }
        }
      },
    });
  };

export const throttleListeners =
  (
    msDuration: number,
    withLoading?: boolean,
    configLoading?: {
      showConfig: ShowDialogConfig;
      hideConfig: HideDialogConfig;
      failedConfig: HideDialogConfig;
    },
  ): AppStartListening =>
  //@ts-ignore
  (startListeningOption: any) => {
    return startAppListening({
      ...startListeningOption,
      effect: async (action, listenerApi) => {
        try {
          listenerApi.unsubscribe();

          if (withLoading) {
            showLoading(configLoading?.showConfig);
          }

          await startListeningOption.effect(action, listenerApi);

          if (withLoading) {
            hideLoading(configLoading?.hideConfig);
          }

          await listenerApi.delay(msDuration);

          listenerApi.subscribe();
        } catch (error) {
          console.log(
            '[ERROR] throttleListeners:>> ',
            (error as Error).message,
          );
          if (withLoading) {
            hideLoading(
              configLoading
                ? {
                    ...configLoading?.failedConfig,
                    t18nSubtitle:
                      (error as Error).message &&
                      (error as Error).message !== ''
                        ? (error as Error).message
                        : configLoading?.failedConfig.t18nSubtitle,
                  }
                : undefined,
            );
          }
        }
      },
    });
  };
