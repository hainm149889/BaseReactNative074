import {Header} from '@components/header';
import {goBack} from '@navigation/navigation-service';
import {createStyleSheet, useStyles} from '@theme';
import {AntIcon, FeatherIcon, IoniconsIcon} from '@theme/vector-icons';
import {ActiveOpacity, HairlineWidth, HitSlop} from '@utils/constant';
import {scale} from '@utils/scale';
import {save} from '@utils/storage';
import {StorageKey} from '@utils/storage/constants';
import React, {useState} from 'react';
import {Controller, FormProvider, useForm} from 'react-hook-form';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {UnistylesRuntime} from 'react-native-unistyles';
import {RoleSelect} from './components/role-select';
import {RegisterForm} from './type';

export const RegisterScreen = () => {
  const {
    styles,
    theme: {colors},
  } = useStyles(styleSheet);

  const [viewPass, setViewPass] = useState(false);

  const formMethod = useForm<RegisterForm>({
    mode: 'all',
    defaultValues: {
      role: null,
      numberPhone: null,
      fullname: '',
      username: '',
      password: '',
    },
  });

  const _goBack = () => {
    goBack();
  };

  const register = async () => {
    const isValid = await formMethod.trigger([
      'role',
      'numberPhone',
      'username',
      'password',
    ]);
    if (isValid) {
      formMethod.handleSubmit(form => {
        save(StorageKey.ACCOUNT_INFO, form);
        goBack();
      })();
    }
  };

  return (
    <View style={styles.container}>
      <Header
        style={styles.header}
        leftContent={
          <TouchableOpacity onPress={_goBack}>
            <Text>Quay lại</Text>
          </TouchableOpacity>
        }
        centerContent={
          <Text style={styles.titleScreen}>Đăng ký tài khoản</Text>
        }
      />
      <View style={styles.mainContent}>
        <FormProvider {...formMethod}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerScrollView}>
            <View style={styles.questionContainer}>
              <Text style={styles.ques}>Bạn muốn tạo tài khoản để?</Text>
              <RoleSelect />
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.ques}>Vui lòng nhập thông tin phía dưới</Text>
              <View style={styles.recordInfo}>
                <Controller
                  control={formMethod.control}
                  name="fullname"
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
                          placeholder="Tên đầy đủ"
                          returnKeyType="done"
                          placeholderTextColor={colors.LightGray}
                          onSubmitEditing={() =>
                            formMethod.setFocus('password')
                          }
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
                          returnKeyType="done"
                          placeholderTextColor={colors.LightGray}
                          onSubmitEditing={() =>
                            formMethod.setFocus('password')
                          }
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
                    maxLength: 13,
                  }}
                  render={({field: {value, onChange, onBlur}}) => {
                    return (
                      <View>
                        <TextInput
                          style={styles.input}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value!}
                          maxLength={20}
                          secureTextEntry={viewPass ? false : true}
                          placeholder="Mật khẩu"
                          returnKeyType="done"
                          placeholderTextColor={colors.LightGray}
                        />
                        {value?.length! > 0 && (
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
                <Controller
                  control={formMethod.control}
                  name="numberPhone"
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
                          value={value!}
                          maxLength={20}
                          keyboardType="number-pad"
                          placeholder="Số điện thoại"
                          returnKeyType="done"
                          placeholderTextColor={colors.LightGray}
                        />
                        {value?.length! > 0 && (
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
              </View>
            </View>
          </ScrollView>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.btnLogin}
              activeOpacity={ActiveOpacity}
              onPress={register}>
              <FeatherIcon name="log-in" color={colors.Black} size={20} />
              <Text style={styles.txtGoBack}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </FormProvider>
      </View>
    </View>
  );
};

const styleSheet = createStyleSheet(
  ({colors, textPresets, spacings, shadows}) => ({
    container: {
      flex: 1,
    },
    titleScreen: {
      color: colors.Black,
      ...textPresets.Font20Reg,
      fontWeight: '600',
    },
    header: {
      backgroundColor: colors.White,
    },
    mainContent: {
      flex: 1,
      paddingHorizontal: spacings[16],
    },
    questionContainer: {
      padding: spacings[12],
      backgroundColor: colors.White,
      borderRadius: spacings[8],
      rowGap: spacings[8],
    },
    ques: {
      color: colors.Black,
      ...textPresets.Font20Reg,
      fontWeight: '600',
    },
    contentContainerScrollView: {
      flex: 1,
      paddingVertical: spacings[16],
      rowGap: spacings[16],
    },
    input: {
      height: scale(48),
      overflow: 'hidden',
      borderWidth: HairlineWidth * 2,
      padding: spacings[10],
      borderRadius: scale(8),
      color: colors.Black,
      borderColor: colors.LightGray,
      ...textPresets.Font16Reg,
    },
    btnClear: {
      position: 'absolute',
      top: spacings[14],
      right: spacings[10],
    },
    recordInfo: {
      marginTop: spacings[6],
      rowGap: spacings[14],
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
  }),
);
