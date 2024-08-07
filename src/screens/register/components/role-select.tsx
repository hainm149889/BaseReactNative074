import React from 'react';
import {useController} from 'react-hook-form';
import {Text, TouchableOpacity, View} from 'react-native';
import {createStyleSheet, useStyles} from '@theme';
import {ActiveOpacity, RoleDetails, HitSlop} from '@utils/constant';
import {RadioButton} from '@components/radio-button';
import {RegisterForm} from '../type';
import {textPresets} from '@theme/typography';

export const RoleSelect = () => {
  const {
    styles,
    theme: {colors},
  } = useStyles(styleSheet);

  const {
    field: {value, onChange},
    fieldState: {invalid},
  } = useController<RegisterForm>({
    name: 'role',
    rules: {
      required: true,
    },
  });

  return (
    <View style={styles.container}>
      {Object.values(RoleDetails).map(({key, text}) => {
        const selected = value === key;
        return (
          key !== undefined && (
            <View key={key}>
              <TouchableOpacity
                hitSlop={HitSlop.Large}
                disabled={selected}
                activeOpacity={ActiveOpacity}
                style={styles.roles}
                onPress={() => onChange(key)}>
                <RadioButton
                  sizeDot={14}
                  value={selected}
                  disable
                  opacity={1}
                  unActiveColor={invalid ? colors.Red : undefined}
                />
                <Text style={styles.txtSelected(invalid, selected)}>
                  {text}
                </Text>
              </TouchableOpacity>
            </View>
          )
        );
      })}
    </View>
  );
};

const styleSheet = createStyleSheet(({spacings, colors}) => ({
  container: {
    marginTop: spacings[8],
    rowGap: spacings[12],
  },
  roles: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  txtSelected: (invalid: boolean, selected: boolean) => ({
    color: invalid
      ? colors.Red
      : selected
      ? colors.DarkViolet
      : colors.DarkGray,
    ...textPresets.Font20,
  }),
}));
