import {LottieTypes} from '@assets/lottie';
import {Colors} from '@theme/type';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';

export type ModalConfirmComponentProps = {
  iconName?: any;
  iconSize?: number;
  iconColor?: number | ColorValue;
  t18nTitle?: string;
  t18nSubtitle?: string;
  t18nOk?: string;
  themeColorOK?: Colors;
  themeColorTextOK?: Colors;
  t18nCancel?: string;
  themeColorCancel?: Colors;
  themeColorTextCancel?: Colors;
  t18nOptionThird?: string;
  themeColorOptionThird?: Colors;
  themeColorTextOptionThird?: Colors;
  hideWhenDone?: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  optionThird?: () => void;
  flexDirection?: 'column' | 'row';
  lottie?: LottieTypes;
  lottieStyle?: StyleProp<ViewStyle>;
  renderBody?: () => JSX.Element;
};
