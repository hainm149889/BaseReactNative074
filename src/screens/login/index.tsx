import {Images} from '@assets/images';
import {Header} from '@components/header';
import {navigate} from '@navigation/navigation-service';
import {APP_SCREEN} from '@navigation/screen-types';
import {createStyleSheet, useStyles} from '@theme';
import {AntIcon, FeatherIcon, IoniconsIcon} from '@theme/vector-icons';
import {ActiveOpacity, HairlineWidth, HitSlop} from '@utils/constant';
import {scale} from '@utils/scale';
import React, {useState} from 'react';
import {Controller, FormProvider, useForm} from 'react-hook-form';
import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {UnistylesRuntime} from 'react-native-unistyles';
import {LoginForm} from './type';

export const LoginScreen = () => {
  const {
    styles,
    theme: {colors},
  } = useStyles(styleSheet);

  const [viewPass, setViewPass] = useState(false);
  const [isRememberAccount, setIsRememberAccount] = useState(true);

  const formMethod = useForm<LoginForm>({
    mode: 'all',
    defaultValues: {
      username: '',
      password: '',
      rememberMe: false,
    },
  });

  const login = async () => {
    const isValid = await formMethod.trigger(['username', 'password']);
    if (isValid) {
      formMethod.handleSubmit(() => {
        navigate(APP_SCREEN.BOTTOM_TAB_NAV);
      })();
    }
  };

  const navToRegister = () => {
    //@ts-ignore
    navigate(APP_SCREEN.REGISTER_SCREEN);
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
        <FormProvider {...formMethod}>
          <View style={styles.mainContent}>
            <Text style={styles.txtWelcome}>Chào mừng bạn...!</Text>
            <View style={[styles.form]}>
              <Controller
                control={formMethod.control}
                name="username"
                rules={{
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                }}
                render={({field: {value, onChange, onBlur}}) => {
                  return (
                    <View>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        maxLength={20}
                        placeholder="Tên đăng nhập"
                        placeholderTextColor={colors.LightGray}
                        onSubmitEditing={() => formMethod.setFocus('password')}
                      />
                      {value.length > 0 && (
                        <Pressable
                          onPress={() => onChange('')}
                          style={styles.btnClear}
                          hitSlop={HitSlop.Medium}>
                          <AntIcon
                            name="closecircle"
                            size={16}
                            color={colors.DarkGray}
                          />
                        </Pressable>
                      )}
                    </View>
                  );
                }}
              />
              <Controller
                control={formMethod.control}
                name="password"
                rules={{
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                }}
                render={({field: {value, onChange, onBlur}}) => {
                  return (
                    <View>
                      <TextInput
                        style={styles.input}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        maxLength={20}
                        secureTextEntry={viewPass ? false : true}
                        placeholder="Mật khẩu"
                        returnKeyType="done"
                        placeholderTextColor={colors.LightGray}
                      />
                      {value.length > 0 && (
                        <Pressable
                          onPress={() => setViewPass(!viewPass)}
                          style={styles.btnClear}
                          hitSlop={HitSlop.Medium}>
                          <IoniconsIcon
                            name={viewPass ? 'eye' : 'eye-off'}
                            size={18}
                            color={colors.DarkGray}
                          />
                        </Pressable>
                      )}
                    </View>
                  );
                }}
              />
              <Pressable
                style={styles.rememberMe}
                onPress={() => setIsRememberAccount(prev => !prev)}>
                <FeatherIcon
                  name={isRememberAccount ? 'check-square' : 'square'}
                  size={20}
                  color={colors.White}
                />
                <Text style={styles.txtRememberMe}>Ghi nhớ tài khoản?</Text>
              </Pressable>
              <View style={styles.register}>
                <Text style={styles.txtRememberMe}>Bạn chưa có tài khoản?</Text>
                <Pressable onPress={navToRegister}>
                  <Text
                    style={[
                      styles.txtRememberMe,
                      // eslint-disable-next-line react-native/no-inline-styles
                      {
                        textDecorationLine: 'underline',
                      },
                    ]}>
                    ĐĂNG KÝ!!!
                  </Text>
                </Pressable>
              </View>
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
          </View>
        </FormProvider>
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
      rowGap: spacings[32],
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
      columnGap: spacings[12],
      flexDirection: 'row',
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
      ...shadows.main,
    },
    txtGoBack: {
      color: colors.Black,
      fontSize: spacings[16],
      fontWeight: '600',
      textAlign: 'center',
    },
    form: {
      rowGap: spacings[16],
      marginTop: spacings[32],
    },
    input: {
      height: scale(48),
      overflow: 'hidden',
      borderWidth: HairlineWidth * 2,
      padding: spacings[10],
      borderRadius: scale(8),
      color: colors.White,
      borderColor: colors.LightGray,
      ...textPresets.Font16,
    },
    btnClear: {
      position: 'absolute',
      top: spacings[14],
      right: spacings[10],
    },
    rememberMe: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: spacings[8],
    },
    txtRememberMe: {
      color: colors.White,
      ...textPresets.Font16,
    },
    register: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: spacings[4],
      justifyContent: 'center',
    },
  }),
);
