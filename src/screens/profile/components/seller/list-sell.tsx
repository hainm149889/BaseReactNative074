import {listSellWithRoleSeller, OrdersByBuyer} from '@screens/profile/dummy';
import {createStyleSheet, useStyles} from '@theme';
import {scale} from '@utils/scale';
import React, {useCallback, useMemo} from 'react';
import {FlatList, ListRenderItem, Pressable, Text, View} from 'react-native';
import {UnistylesRuntime} from 'react-native-unistyles';
import {ItemSell} from './item-sell';

export const ListSell = () => {
  const {styles} = useStyles(styleSheet);

  const listSold = useMemo(
    () =>
      listSellWithRoleSeller
        .map(user => {
          const updatedOrders = user.orders.map(order => ({
            ...order,
            owner: user.name,
          }));

          return {
            ...user,
            orders: updatedOrders,
          };
        })
        .map(order => order.orders)
        .flat(),
    [],
  );

  const renderItem = useCallback<ListRenderItem<OrdersByBuyer>>(({item}) => {
    return <ItemSell item={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <Pressable style={styles.btnViewDetail}>
        <Text style={styles.txtDetail}>Xem chi tiết</Text>
      </Pressable>
      <FlatList
        data={listSold}
        keyExtractor={(item, index) => `${item.key}_${index}`}
        renderItem={renderItem}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{padding: scale(12)}}
      />
    </View>
  );
};

const styleSheet = createStyleSheet(({spacings, colors, textPresets}) => ({
  container: {
    flex: 1,
    marginTop: spacings[8],
    rowGap: spacings[8],
  },
  btnViewDetail: {
    alignSelf: 'center',
    maxWidth: UnistylesRuntime.screen.width / 3,
    padding: spacings[8],
    borderRadius: spacings[8],
    backgroundColor: colors.MediumVioletRed,
  },
  txtDetail: {
    color: colors.White,
    textAlign: 'center',
    ...textPresets.Font20Med,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.DarkGray,
    marginTop: spacings[8],
  },
}));
