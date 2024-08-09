import {Header} from '@components/header';
import {createStyleSheet, useStyles} from '@theme';
import {ms} from '@theme/my-style';
import {ActiveOpacity, HairlineWidth} from '@utils/constant';
import {logout} from '@utils/method';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const HomeScreen = () => {
  const {styles} = useStyles(styleSheet);

  return (
    <View style={styles.container}>
      <Header
        centerContent={<Text style={styles.titleScreen}>Trang chủ</Text>}
        style={styles.header}
      />
      <View style={[ms.flex1]}>
        <TouchableOpacity activeOpacity={ActiveOpacity} onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.title}>test</Text>
        <Text style={styles.title2}>test</Text>
      </View>
    </View>
  );
};

const styleSheet = createStyleSheet(({textPresets, colors, shadows}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  header: {
    backgroundColor: colors.White,
    borderBottomWidth: HairlineWidth,
    borderBottomColor: colors.LightGray,
    ...shadows['.3'],
  },
  titleScreen: {
    color: colors.Black,
    ...textPresets.Font20,
    fontWeight: '600',
  },
  title: {
    color: 'red',
    ...textPresets.Font32,
    fontWeight: '700',
  },
  title2: {
    color: 'red',
    ...textPresets.Font24,
  },
}));
