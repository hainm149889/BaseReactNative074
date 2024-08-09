import {View, Text, Image} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from '@theme';
import {load} from '@utils/storage';
import {StorageKey} from '@utils/storage/constants';
import {Images} from '@assets/images';
import {scale} from '@utils/scale';
import {RoleAccount} from '@utils/constant';

export const MyAccount = () => {
  const {styles} = useStyles(styleSheet);
  const accountInfo = load(StorageKey.ACCOUNT_INFO);

  const renderRole = (role: RoleAccount) => {
    let objRole = {image: '', text: ''};
    switch (role) {
      case RoleAccount.seller:
        objRole = {image: Images.store, text: 'Người bán hàng'};
        break;

      case RoleAccount.supplier:
        objRole = {image: Images.supplier, text: 'Nhà cung cấp'};
        break;

      default:
        objRole = {image: Images.buyer, text: 'Người mua hàng'};
        break;
    }

    return (
      <View style={styles.roleInfo}>
        <Image
          //@ts-ignore
          source={objRole.image}
          style={styles.roleImg}
          resizeMode="cover"
        />
        <Text>{objRole.text ?? 'Buyer'}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.leftInfo}>
          <Image source={Images[404]} style={styles.img} />
          <View style={styles.info}>
            <Text>{`Tên đăng nhập: ${accountInfo?.username ?? 'Hainm'}`}</Text>
            <Text>{`Số điện thoại: ${
              accountInfo?.numberPhone ?? '0988767564'
            }`}</Text>
            <Text>{`Tên đầy đủ: ${
              accountInfo?.fullname ?? 'Ngo Minh Hai'
            }`}</Text>
          </View>
        </View>
        <View style={styles.roleContainer}>
          {renderRole(accountInfo?.role)}
        </View>
      </View>
    </View>
  );
};
const styleSheet = createStyleSheet(({colors, spacings}) => ({
  container: {
    backgroundColor: colors.primary,
    margin: spacings[12],
    paddingHorizontal: spacings[12],
    borderRadius: spacings[8],
  },
  infoContainer: {
    flexDirection: 'row',
    columnGap: spacings[8],
  },
  leftInfo: {
    flex: 1,
    flexDirection: 'row',
    columnGap: spacings[8],
    paddingVertical: spacings[10],
  },
  info: {
    rowGap: spacings[4],
    flexShrink: 1,
  },
  img: {
    width: scale(50),
    height: scale(50),
  },
  roleContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    columnGap: spacings[8],
  },
  roleImg: {
    width: scale(30),
    height: scale(30),
  },
  roleInfo: {
    rowGap: spacings[4],
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
