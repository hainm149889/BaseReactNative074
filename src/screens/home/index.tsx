import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {createStyleSheet, useStyles} from '@theme';
import {ms} from '@theme/my-style';
import {navigate} from '@navigation/navigation-service';
import {APP_SCREEN} from '@navigation/screen-types';
import {Header} from '@components/header';
import {ActiveOpacity} from '@utils/constant';

export const HomeScreen = () => {
  const {styles} = useStyles(styleSheet);

  const navNotFoundScreen = () => {
    navigate(APP_SCREEN.LOGIN_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Header centerContent={<Text>HomeScreen</Text>} />
      <View style={[ms.flex1]}>
        <TouchableOpacity
          activeOpacity={ActiveOpacity}
          onPress={navNotFoundScreen}>
          <Text>tới màn chi tiết</Text>
        </TouchableOpacity>

        <Text style={styles.title}>test</Text>
        <Text style={styles.title2}>test</Text>
      </View>
    </View>
  );
};

const styleSheet = createStyleSheet(({textPresets}) => ({
  container: {
    flex: 1,
    backgroundColor: 'pink',
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
