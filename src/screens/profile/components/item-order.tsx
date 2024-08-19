import {Images} from '@assets/images';
import {createStyleSheet, useStyles} from '@theme';
import {scale} from '@utils/scale';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {OrderByBuyer} from '../dummy';

type Props = {
  item: OrderByBuyer;
};

export const ItemOrder = ({item}: Props) => {
  const {styles} = useStyles(styleSheet);

  return (
    <View style={styles.itemOrder}>
      <View style={styles.headerItem}>
        <View style={styles.order}>
          <Image source={Images[404]} style={styles.img} />
          <View>
            <Text>{item.name}</Text>
            <Text>{`Giá 1 lạng: ${item.pricePerOunceOfMeat.currencyFormat()}`}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.totalMoney}>{item.money.currencyFormat()}</Text>
          <Text>{`Đã mua: ${item.weight}`}</Text>
        </View>
      </View>
      <View style={styles.date}>
        <Text>Ngày mua hàng:</Text>
        <Text>{item.date}</Text>
      </View>
      <View style={styles.date}>
        <Text>Người bán hàng:</Text>
        <Text>{item.seller}</Text>
      </View>
      <View style={styles.date}>
        <Text>Số điện thoại người bán:</Text>
        <Text>{item.sellerPhone}</Text>
      </View>
    </View>
  );
};

const styleSheet = createStyleSheet(({spacings, colors, textPresets}) => ({
  itemOrder: {
    padding: spacings[8],
    backgroundColor: colors.primary,
    borderRadius: spacings[8],
    rowGap: spacings[4],
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalMoney: {
    color: colors.Black,
    ...textPresets.Font20Bold,
  },
  order: {
    flexDirection: 'row',
    columnGap: spacings[8],
  },
  img: {
    width: scale(30),
    height: scale(30),
  },
}));
