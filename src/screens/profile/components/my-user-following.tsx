import {createStyleSheet, useStyles} from '@theme';
import {EntypoIcon} from '@theme/vector-icons';
import {ActiveOpacity} from '@utils/constant';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const MyUserFollowing = () => {
  const {
    styles,
    theme: {colors},
  } = useStyles(styleSheet);

  return (
    <View style={styles.topic1}>
      <Text style={styles.topic}>Danh sách theo dõi của bạn</Text>
      <View style={styles.listTopic}>
        <TouchableOpacity
          activeOpacity={ActiveOpacity}
          style={styles.optionContainer}>
          <EntypoIcon name="shop" size={20} color={colors.Black} />
          <Text>Nhà cung cấp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ActiveOpacity}
          style={styles.optionContainer}>
          <EntypoIcon name="home" size={20} color={colors.Black} />
          <Text>Cửa hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ActiveOpacity}
          style={styles.optionContainer}>
          <EntypoIcon name="users" size={20} color={colors.Black} />
          <Text>Bạn bè</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleSheet = createStyleSheet(
  ({spacings, colors, textPresets, shadows}) => ({
    topic1: {
      paddingVertical: spacings[16],
      rowGap: spacings[10],
      paddingHorizontal: spacings[12],
    },
    topic: {
      color: colors.Black,
      ...textPresets.Font20Reg,
      fontWeight: '600',
    },
    listTopic: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      columnGap: spacings[12],
    },
    optionContainer: {
      flex: 1,
      rowGap: spacings[4],
      backgroundColor: colors.primary,
      paddingVertical: spacings[16],
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: spacings[8],
      ...shadows.main,
    },
  }),
);
