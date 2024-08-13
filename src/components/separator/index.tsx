import {createStyleSheet, useStyles} from '@theme';
import {HairlineWidth} from '@utils/constant';
import {scale} from '@utils/scale';
import React, {memo, useMemo, useState} from 'react';
import {ColorValue, LayoutRectangle, View} from 'react-native';
import {SeparatorProps} from './type';

export const Separator = memo(
  (props: SeparatorProps) => {
    const {
      type,
      height,
      width,
      colorTheme = 'DarkGray',
      size = 2,
      style,
      ...subProps
    } = props;
    const {
      styles,
      theme: {colors},
    } = useStyles(styleSheet);

    const [dimension, setDimension] = useState<LayoutRectangle>();

    const styleContainer = useMemo(() => {
      const _styles = [];
      if (type === 'horizontal') {
        _styles.push({width: '100%'});
      } else {
        _styles.push({height: '100%'});
      }

      if (typeof height === 'number') {
        _styles.push({height: scale(height)});
      }

      if (typeof width === 'number') {
        _styles.push({width: scale(width)});
      }

      //@ts-ignore
      return _styles;
    }, [height, type, width]);

    return (
      <View
        {...subProps}
        //@ts-ignore
        style={[styleContainer, style]}
        onLayout={e => {
          setDimension(e.nativeEvent.layout);
        }}>
        {type === 'vertical' ? (
          <View
            style={[
              styles.vertical({size, dimension}),
              {backgroundColor: colors[colorTheme] as ColorValue},
            ]}
          />
        ) : (
          <View
            style={[
              styles.horizontal({size, dimension}),
              {backgroundColor: colors[colorTheme] as ColorValue},
            ]}
          />
        )}
      </View>
    );
  },
  () => true,
);

const styleSheet = createStyleSheet(() => ({
  vertical: ({
    size,
    dimension,
  }: {
    dimension: LayoutRectangle | undefined;
    size: number;
  }) => ({
    width: HairlineWidth * size,
    height: dimension?.height ?? 0,
  }),
  horizontal: ({
    size,
    dimension,
  }: {
    dimension: LayoutRectangle | undefined;
    size: number;
  }) => ({
    height: HairlineWidth * size,
    width: dimension?.width ?? 0,
  }),
}));
