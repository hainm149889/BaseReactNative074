import {Header} from '@components/header';
import {createStyleSheet, useStyles} from '@theme';
import {ms} from '@theme/my-style';
import {ActiveOpacity} from '@utils/constant';
import {logout} from '@utils/method';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const HomeScreen = () => {
  const {styles} = useStyles(styleSheet);

  return (
    <View style={styles.container}>
      <Header centerContent={<Text>HomeScreen</Text>} style={styles.header} />
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

const styleSheet = createStyleSheet(({textPresets, colors}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.LightGray,
  },
  header: {
    backgroundColor: colors.White,
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
