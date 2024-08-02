import React, {memo} from 'react';
import isEqual from 'react-fast-compare';
import {ColorValue, StyleSheet, View} from 'react-native';
import {UnistylesRuntime} from 'react-native-unistyles';
import {createStyleSheet, useStyles} from '@theme';
import {HeaderType} from './type';

export const Header = memo((props: HeaderType) => {
  const {
    leftContent,
    rightContent,
    centerContent,
    zIndex = 9,
    shadow,
    leftContentStyle,
    style: customStyle,
    bgColor,
    ...rest
  } = props;
  const {
    styles,
    theme: {colors, shadows},
  } = useStyles(styleSheet);

  return (
    <View
      {...rest}
      style={[
        styles.container,
        {zIndex},
        customStyle,
        bgColor && {backgroundColor: colors[bgColor] as ColorValue},
        shadow && shadows[shadow],
      ]}>
      <View style={styles.body}>
        <View style={leftContentStyle}>{leftContent}</View>
        <View style={styles.centerContent}>{centerContent}</View>
        <View>{rightContent}</View>
      </View>
    </View>
  );
}, isEqual);

const styleSheet = createStyleSheet(({spacings}) => ({
  container: {
    paddingTop: UnistylesRuntime.insets.top,
  },
  body: {
    flexDirection: 'row',
    padding: spacings[12],
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerContent: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
