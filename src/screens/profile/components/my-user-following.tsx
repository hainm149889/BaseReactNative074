import {createStyleSheet, useStyles} from '@theme';
import {EntypoIcon} from '@theme/vector-icons';
import {ActiveOpacity, RoleAccount} from '@utils/constant';
import {load} from '@utils/storage';
import {StorageKey} from '@utils/storage/constants';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const MyUserFollowing = () => {
  const {
    styles,
    theme: {colors},
  } = useStyles(styleSheet);

  const accountInfo = load(StorageKey.ACCOUNT_INFO);

  const renderTopic = (role: RoleAccount) => {
    switch (role) {
      case RoleAccount.buyer:
      case RoleAccount.supplier:
        return {
          option1: 'Nhà cung cấp',
          option2: 'Cửa hàng',
          option3: 'Bạn bè',
        };

      default:
        return {
          option1: 'Nhà cung cấp',
          option2: 'Khách hàng',
          option3: 'Bạn bè',
        };
    }
  };

  return (
    <View style={styles.topic1}>
      <Text style={styles.topic}>Danh sách theo dõi của bạn</Text>
      <View style={styles.listTopic}>
        <TouchableOpacity
          activeOpacity={ActiveOpacity}
          style={styles.optionContainer}>
          <EntypoIcon name="shop" size={20} color={colors.Black} />
          <Text>{renderTopic(accountInfo?.role).option1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ActiveOpacity}
          style={styles.optionContainer}>
          <EntypoIcon
            name={
              accountInfo?.role === RoleAccount.seller ? 'slideshare' : 'home'
            }
            size={20}
            color={colors.Black}
          />
          <Text>{renderTopic(accountInfo?.role).option2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={ActiveOpacity}
          style={styles.optionContainer}>
          <EntypoIcon name="users" size={20} color={colors.Black} />
          <Text>{renderTopic(accountInfo?.role).option3}</Text>
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
