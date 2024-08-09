import {Header} from '@components/header';
import {createStyleSheet, useStyles} from '@theme';
import React from 'react';
import {Text, View} from 'react-native';
import {MyOrders} from './components/my-order';
import {MyUserFollowing} from './components/my-user-following';
import {HairlineWidth} from '@utils/constant';
import {MyAccount} from './components/my-account';

export const MyProfile = () => {
  const {styles} = useStyles(styleSheet);

  return (
    <View style={styles.container}>
      <Header
        centerContent={<Text style={styles.titleScreen}>Cá nhân</Text>}
        style={styles.header}
      />
      <View style={styles.contentContainer}>
        <MyAccount />
        <MyUserFollowing />
        <MyOrders />
      </View>
    </View>
  );
};

const styleSheet = createStyleSheet(({colors, textPresets, shadows}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  contentContainer: {
    flex: 1,
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
}));
