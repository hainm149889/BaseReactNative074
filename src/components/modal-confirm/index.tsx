import {lotties} from '@assets/lottie';
import {createStyleSheet, useStyles} from '@theme';
import LottieView from 'lottie-react-native';
import React, {
  createRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import {SlideInDown, SlideOutDown} from 'react-native-reanimated';
import {ModalConfirmComponentProps} from './type';
import {Modal} from '@components/modal';
import {scale} from '@utils/scale';
import {ModalWidth} from '@utils/constant';
import {Pressable, Text, View} from 'react-native';

const ModalConfirmComponent = forwardRef((_, ref) => {
  const {styles} = useStyles(styleSheet);

  const [data, setData] = useState<ModalConfirmComponentProps | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const _onCancel = useCallback(() => {
    setIsVisible(false);
    if (typeof data?.onCancel === 'function') {
      data.onCancel();
    }
  }, [data]);

  const _onOk = useCallback(() => {
    if (typeof data?.onOk === 'function') {
      data.onOk();
    }

    if (data?.hideWhenDone) {
      setIsVisible(false);
    }
  }, [data]);

  useImperativeHandle(
    ref,
    () => ({
      show: (params: ModalConfirmComponentProps) => {
        setData({...params, hideWhenDone: params?.hideWhenDone ?? true});
        setIsVisible(true);
      },
      hide: () => {
        setIsVisible(false);
        setData(null);
      },
    }),
    [],
  );

  // render
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={data?.onCancel}
      onBackButtonPress={data?.onCancel}
      entering={SlideInDown}
      exiting={SlideOutDown}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {data?.lottie && (
            <View style={{alignItems: 'center'}}>
              <LottieView
                autoPlay
                speed={1}
                loop={false}
                source={lotties[data.lottie]}
                style={data?.lottieStyle}
                resizeMode="cover"
              />
            </View>
          )}
          {/* {data?.iconName && <View />} */}
          {/* {data?.svg && <data?.svg />} */}
          {data?.t18nTitle && (
            <Text style={styles.title} numberOfLines={2}>
              {data.t18nTitle}
            </Text>
          )}
          {data?.t18nSubtitle && (
            <Text style={styles.subtitle} numberOfLines={2}>
              {data.t18nSubtitle}
            </Text>
          )}
          {data?.renderBody?.()}
        </View>
        <View style={styles.bodyContainer(data?.flexDirection)}>
          <View style={styles.btnContainer(data?.flexDirection)}>
            <Pressable onPress={_onCancel}>
              <Text>{data?.t18nCancel ?? 'Đóng'}</Text>
            </Pressable>
            {/* <Button
              t18n={data?.t18nCancel ?? 'modal_confirm:close'}
              onPress={_onCancel}
              fullWidth
              size="medium"
              buttonColorTheme={data?.themeColorCancel ?? 'primary500'}
              textColorTheme={data?.themeColorTextCancel ?? 'white'}
            /> */}
          </View>
          {typeof data?.onOk === 'function' && (
            <View style={styles.btnContainer(data?.flexDirection)}>
              <Pressable onPress={_onOk}>
                <Text>{data?.t18nOk ?? 'OK'}</Text>
              </Pressable>
              {/* <Button
                t18n={data?.t18nOk ?? 'modal_confirm:ok'}
                onPress={_onOk}
                fullWidth
                size="medium"
                buttonColorTheme={data?.themeColorOK ?? 'primary500'}
                textColorTheme={data?.themeColorTextOK ?? 'white'}
              /> */}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
});

export type ModalConfirm = {
  show: (params: ModalConfirmComponentProps) => void;
  hide: () => void;
};

export const modalConfirmRef = createRef<ModalConfirm>();

export const ModalConfirm = () => (
  <ModalConfirmComponent ref={modalConfirmRef} />
);

export const showModalConfirm = (params: ModalConfirmComponentProps) => {
  modalConfirmRef.current?.show(params);
};

export const hideModalConfirm = () => {
  modalConfirmRef.current?.hide();
};

const styleSheet = createStyleSheet(({colors, spacings, textPresets}) => ({
  container: {
    backgroundColor: colors.White,
    borderRadius: spacings[16],
    minWidth: scale(300),
    alignSelf: 'center',
    maxWidth: ModalWidth,
    padding: spacings[12],
    paddingTop: spacings[24],
  },
  titleContainer: {
    paddingBottom: spacings[24],
    rowGap: spacings[16],
  },
  bodyContainer: (flexDirection: 'row' | 'column' | undefined) => ({
    flexDirection: flexDirection ?? 'column',
    rowGap: spacings[12],
    columnGap: spacings[12],
  }),
  btnContainer: (flexDirection: 'row' | 'column' | undefined) => ({
    flex: flexDirection === 'row' ? 1 : undefined,
    width: flexDirection === 'row' ? undefined : '100%',
  }),
  title: {
    ...textPresets.Font20,
    textAlign: 'center',
    colors: colors.Black,
  },
  subtitle: {
    ...textPresets.Font14,
    textAlign: 'center',
    colors: colors.DarkGray,
    marginTop: spacings[2],
  },
}));
