import {createStyleSheet, useStyles} from '@theme';
import {scale} from '@utils/scale';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, Text, View} from 'react-native';
import {listOrdersWithRoleBuyer, OrderByBuyer} from '../dummy';
import {ItemOrder} from './item-order';

export const MyOrders = () => {
  const {styles} = useStyles(styleSheet);

  const renderItem = useCallback<ListRenderItem<OrderByBuyer>>(({item}) => {
    return <ItemOrder item={item} />;
  }, []);

  /**
   * @th: Tháng
   * @y: Năm
   */
  const totalMoneyInMonth = useCallback((th: number, y: number) => {
    const totalMoney = listOrdersWithRoleBuyer.reduce((total, item) => {
      const dateParts = item.date.split(' ')[1].split('/');
      const month = parseInt(dateParts[1], 10);
      const year = parseInt(dateParts[2], 10);

      if (month === th && year === y) {
        return total + item.money;
      }
      return total;
    }, 0);
    return totalMoney;
  }, []);

  return (
    <View style={styles.topic2}>
      <View style={{paddingHorizontal: scale(12)}}>
        <Text style={styles.topic}>Danh sách đơn hàng bạn đã mua</Text>
        <Text>
          Số tiền bạn đã tiêu trong tháng 7:{' '}
          <Text>{totalMoneyInMonth(7, 2024).currencyFormat()}</Text>
        </Text>
      </View>
      <FlatList
        data={listOrdersWithRoleBuyer}
        keyExtractor={(item, index) => `${item.key}_${index}`}
        renderItem={renderItem}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View style={{height: scale(8)}} />}
        contentContainerStyle={{paddingHorizontal: scale(12)}}
      />
    </View>
  );
};

const styleSheet = createStyleSheet(({spacings, colors, textPresets}) => ({
  topic: {
    color: colors.Black,
    ...textPresets.Font20,
    fontWeight: '600',
  },
  topic2: {
    flex: 1,
    rowGap: spacings[10],
  },
}));
