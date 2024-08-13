import {ViewProps} from 'react-native';

import {Colors} from '@theme/type';
import {Spacing} from '@theme/spacings';

export type SeparatorProps = Omit<ViewProps, 'width' | 'height'> & {
  type: 'horizontal' | 'vertical';
  height?: Spacing;
  width?: Spacing;
  /**
   * StyleSheet.hairLineWidth * size
   * default 2
   */
  size?: 1 | 2 | 3 | 4;

  // /**
  //  *
  //  * @default false
  //  */
  // usePercent?: boolean;

  colorTheme?: Colors;
};
