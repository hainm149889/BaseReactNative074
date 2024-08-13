import {listOrdersWithRoleSeller, OrdersBySeller} from '@screens/profile/dummy';
import {scale} from '@utils/scale';
import React, {useCallback} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {ItemBuy} from './item-buy';

export const ListBuy = () => {
  const renderItem = useCallback<ListRenderItem<OrdersBySeller>>(
    ({item, index}) => {
      return <ItemBuy item={item} index={index} />;
    },
    [],
  );

  return (
    <FlatList
      data={listOrdersWithRoleSeller}
      keyExtractor={(item, index) => `${item.key}_${index}`}
      renderItem={renderItem}
      // eslint-disable-next-line react/no-unstable-nested-components
      ItemSeparatorComponent={() => <View style={{height: scale(8)}} />}
      contentContainerStyle={{padding: scale(12)}}
    />
  );
};
