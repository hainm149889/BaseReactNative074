import LottieView from 'lottie-react-native';
import React, {
  createRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {
  FadeInUp,
  FadeOutUp,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import {UnistylesRuntime} from 'react-native-unistyles';
import {useStyles, createStyleSheet} from '../../themes';
import {delay} from '@utils/method';
import {useDisableBackHandler, useDismissKeyboard} from '@utils/hooks';
import {scale} from '@utils/scale';
import {lotties, LottieTypes} from '@assets/lottie';
import {Modal} from '@components/modal';

export type ShowDialogConfig = {
  lottie: LottieTypes;
  lottieStyle: StyleProp<ViewStyle>;
  t18nTitle: string;
  t18nSubtitle: string;
  /** default 2 */
  speed?: number;
  body?: React.ReactNode;
};

export type HideDialogConfig = {
  lottie: LottieTypes;
  lottieStyle?: StyleProp<ViewStyle>;
  t18nTitle?: string;
  t18nSubtitle?: string;
  /** default 1 */
  speed?: number;
  body?: React.ReactNode;
  /**
   * @default 200
   */
  visibleTime?: number;

  /**
   * đợi người dùng ấn ok thì mới đóng modal
   * @default false
   */
  waitConfirm?: boolean;
};

export type ProgressDialogRef = {
  show(config?: ShowDialogConfig): void;
  hide(config?: HideDialogConfig): void;
};

const ProgressDialogComponent = forwardRef<ProgressDialogRef, any>((_, ref) => {
  const {styles} = useStyles(styleSheet);

  const lottieRef = useRef<LottieView>(null);

  const [visible, setVisible] = useState(false);
  const [contentLottie, setContentLottie] = useState<
    | (Pick<ShowDialogConfig, 'lottie' | 'lottieStyle' | 'speed'> & {
        hide?: boolean;
        loop?: boolean;
        visibleTime?: number;
        waitConfirm?: boolean;
      })
    | null
  >(null);

  const [contentText, setContentText] = useState<Pick<
    ShowDialogConfig,
    't18nSubtitle' | 't18nTitle' | 'body'
  > | null>(null);

  const hideModal = useCallback(async () => {
    setVisible(false);

    await delay(100);

    setContentText(null);
    setContentLottie(null);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      show: cf => {
        if (cf) {
          setContentLottie({
            lottie: cf.lottie,
            lottieStyle: cf.lottieStyle,
            speed: cf.speed || 2,
          });

          setContentText({
            t18nTitle: cf.t18nTitle,
            t18nSubtitle: cf.t18nSubtitle,
            body: cf.body,
          });
        }

        setVisible(true);
      },
      hide: cf => {
        if (cf) {
          setContentLottie({
            lottie: cf.lottie,
            lottieStyle: cf.lottieStyle,
            hide: true,
            loop: false,
            speed: cf.speed || 1.2,
            visibleTime: cf.visibleTime,
            waitConfirm: cf.waitConfirm,
          });

          setContentText(prev =>
            prev
              ? {
                  t18nTitle: cf.t18nTitle ?? prev.t18nTitle,
                  t18nSubtitle: cf.t18nSubtitle ?? prev.t18nSubtitle,
                  body: cf.body,
                }
              : null,
          );
        } else {
          hideModal();
        }
      },
    }),
    [hideModal],
  );

  useDisableBackHandler(visible);

  useDismissKeyboard(visible);

  const onAnimationFinish = useCallback(async () => {
    if (contentLottie?.hide && !contentLottie.waitConfirm) {
      await delay(contentLottie?.visibleTime ?? 500);
      hideModal();
    }
  }, [contentLottie, hideModal]);

  if (!visible) {
    return null;
  }

  if (contentLottie && contentText) {
    return (
      <Modal isVisible={visible} entering={SlideInDown} exiting={SlideOutDown}>
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <LottieView
              ref={lottieRef}
              autoPlay
              speed={contentLottie.speed}
              onAnimationFinish={onAnimationFinish}
              loop={contentLottie.loop}
              source={lotties[contentLottie.lottie]}
              style={contentLottie.lottieStyle}
              resizeMode="cover"
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>{contentText.t18nTitle}</Text>
            {contentText.body ?? (
              <Text style={styles.subtitle}>{contentText.t18nSubtitle}</Text>
            )}
            {contentLottie.waitConfirm && (
              <Pressable onPress={hideModal}>
                <Text>Close</Text>
              </Pressable>
            )}
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <Modal isVisible={visible} entering={FadeInUp} exiting={FadeOutUp}>
      <ActivityIndicator color={'red'} size={'large'} />
    </Modal>
  );
});

export const progressDialogRef = createRef<ProgressDialogRef>();

export const ProgressDialog = () => (
  <ProgressDialogComponent ref={progressDialogRef} />
);

export const showLoading = (cf?: ShowDialogConfig) => {
  progressDialogRef.current?.show(cf);
};

export const hideLoading = (cf?: HideDialogConfig) => {
  progressDialogRef.current?.hide(cf);
};

const styleSheet = createStyleSheet(({spacings, textPresets}) => ({
  container: {
    backgroundColor: 'white',
    borderRadius: scale(14),
    minWidth: scale(270),
    alignSelf: 'center',
    maxWidth: (3 * UnistylesRuntime.screen.width) / 4,
    paddingHorizontal: spacings[16],
    paddingBottom: spacings[16],
    paddingTop: spacings[8],
  },
  body: {
    rowGap: spacings[16],
    alignItems: 'center',
    marginTop: spacings[12],
  },
  title: {
    ...textPresets.Font20,
    textAlign: 'center',
    color: 'black',
  },
  subtitle: {
    textAlign: 'center',
    ...textPresets.Font14,
  },
}));
