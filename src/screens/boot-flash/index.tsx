import {Images} from '@assets/images';
import {lotties} from '@assets/lottie';
import {splashActions} from '@redux/action-slice/splash';
import {createStyleSheet, useStyles} from '@theme';
import {dispatch} from '@utils/redux';
import {scale} from '@utils/scale';
import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';

export const Splash = () => {
  const {styles} = useStyles(styleSheet);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeIdSplash = setTimeout(() => {
      BootSplash.hide({fade: true});
    }, 100);

    const timeIdMounted = setTimeout(() => {
      setIsMounted(true);
    }, 3500);

    return () => {
      clearTimeout(timeIdSplash);
      clearTimeout(timeIdMounted);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      dispatch(splashActions.setIsMounted(true));
    }
  }, [isMounted]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.background}
        resizeMode="cover"
        style={styles.image}>
        <LottieView
          autoPlay
          speed={1}
          loop={true}
          source={lotties.loading}
          style={styles.lottieStyle}
          resizeMode="cover"
        />
      </ImageBackground>
    </View>
  );
};

const styleSheet = createStyleSheet(() => ({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieStyle: {
    width: scale(182),
    height: scale(72),
  },
}));
