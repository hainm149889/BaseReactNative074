import {Images} from '@assets/images';
import {Header} from '@components/header';
import {navigate} from '@navigation/navigation-service';
import {APP_SCREEN} from '@navigation/screen-types';
import {createStyleSheet, useStyles} from '@theme';
import {FeatherIcon} from '@theme/vector-icons';
import {ActiveOpacity} from '@utils/constant';
import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {UnistylesRuntime} from 'react-native-unistyles';

export const LoginScreen = () => {
  const {
    styles,
    theme: {colors},
  } = useStyles(styleSheet);

  const login = () => {
    navigate(APP_SCREEN.BOTTOM_TAB_NAV);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.background}
        resizeMode="cover"
        style={styles.image}>
        <Header
          centerContent={<Text style={styles.titleScreen}>Đăng nhập</Text>}
        />
        <View style={styles.mainContent}>
          <Text style={styles.txtWelcome}>Chào mừng bạn...!</Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.btnLogin}
            activeOpacity={ActiveOpacity}
            onPress={login}>
            <FeatherIcon name="log-in" color={colors.Black} size={20} />
            <Text style={styles.txtGoBack}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styleSheet = createStyleSheet(
  ({colors, textPresets, spacings, shadows}) => ({
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    container: {
      flex: 1,
    },
    titleScreen: {
      color: colors.White,
      ...textPresets.Font20,
      fontWeight: '600',
    },
    mainContent: {
      flex: 1,
      paddingVertical: spacings[32],
      paddingHorizontal: spacings[12],
    },
    txtWelcome: {
      color: colors.White,
      ...textPresets.Font32,
      textAlign: 'center',
      fontWeight: '700',
    },
    footerContainer: {
      padding: spacings[12],
      paddingBottom: UnistylesRuntime.insets.bottom + spacings[12],
      backgroundColor: colors.White,
      columnGap: spacings[12],
      flexDirection: 'row',
      ...shadows.main,
    },
    btnLogin: {
      backgroundColor: colors.White,
      flex: 1,
      paddingVertical: spacings[12],
      borderRadius: spacings[8],
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: spacings[4],
      justifyContent: 'center',
    },
    txtGoBack: {
      color: colors.Black,
      fontSize: spacings[16],
      fontWeight: '600',
      textAlign: 'center',
    },
  }),
);
