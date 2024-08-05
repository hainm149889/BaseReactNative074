import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {UnistylesRuntime} from 'react-native-unistyles';
import {useStyles, createStyleSheet} from '@theme';
import {Images} from '@assets/images';
import {goBack} from '@navigation/navigation-service';
import {scale} from '@utils/scale';
import {ActiveOpacity} from '@utils/constant';

export const NotFound = () => {
  const {styles} = useStyles(styleSheet);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Images[404]} resizeMode="contain" style={styles.img} />
        <Text>Coming soon...</Text>
        <Text>Tính năng đang phát triển, vui lòng quay lại sau</Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.btnGoBack}
          activeOpacity={ActiveOpacity}
          onPress={() => goBack()}>
          <Text style={styles.txtGoBack}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleSheet = createStyleSheet(({colors, spacings, shadows}) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: spacings[16],
  },
  footerContainer: {
    padding: spacings[12],
    paddingBottom: UnistylesRuntime.insets.bottom + spacings[12],
    columnGap: spacings[12],
    flexDirection: 'row',
    backgroundColor: colors.primary,
    ...shadows.main,
  },
  img: {
    width: scale(268),
    height: scale(138),
  },
  btnGoBack: {
    backgroundColor: colors.secondary,
    flex: 1,
    paddingVertical: spacings[12],
    borderRadius: scale(8),
  },
  txtGoBack: {
    color: 'white',
    fontSize: spacings[16],
    fontWeight: '600',
    textAlign: 'center',
  },
}));
