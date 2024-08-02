import {Colors, Shadows} from '@theme/type';
import {StyleProp, ViewProps, ViewStyle} from 'react-native';

export type HeaderType = ViewProps & {
  leftContent?: React.ReactNode;
  leftContentStyle?: StyleProp<ViewStyle>;
  rightContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  zIndex?: number;
  bgColor?: Colors;
  shadow?: Shadows;
};
