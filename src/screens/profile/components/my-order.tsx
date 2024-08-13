/* eslint-disable @typescript-eslint/no-shadow */
import {createStyleSheet, useStyles} from '@theme';
import {ActiveOpacity, RoleAccount} from '@utils/constant';
import {scale} from '@utils/scale';
import {load} from '@utils/storage';
import {StorageKey} from '@utils/storage/constants';
import React, {useCallback, useMemo, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {listOrdersWithRoleBuyer, OrderByBuyer} from '../dummy';
import {ItemOrder} from './item-order';
import {
  TabView,
  SceneRendererProps,
  NavigationState,
  Route,
  TabBar,
} from 'react-native-tab-view';
import {UnistylesRuntime} from 'react-native-unistyles';
import {ListBuy} from './seller/list-buy';

const TabName = {
  BUY: 'BUY',
  SELL: 'SELL',
};

export const MyOrders = () => {
  const {styles} = useStyles(styleSheet);
  const accountInfo = load(StorageKey.ACCOUNT_INFO);

  const [index, setIndex] = useState(0);

  const routes = useMemo(() => {
    const temp = [
      {
        key: TabName.BUY,
        title: 'Mua về',
      },
      {
        key: TabName.SELL,
        title: 'Bán ra',
      },
    ];

    return temp;
  }, []);

  const renderTabBar = useCallback(
    (
      props: SceneRendererProps & {
        navigationState: NavigationState<Route>;
      },
    ) => (
      <TabBar
        {...props}
        style={[styles.tabBar]}
        indicatorStyle={styles.tabBar}
        tabStyle={[styles.tabBar, {width: UnistylesRuntime.screen.width / 2}]}
        scrollEnabled
        renderLabel={({route, focused}) => {
          return (
            <View style={styles.tabContainer}>
              <TouchableOpacity
                activeOpacity={ActiveOpacity}
                style={[styles.tab]}>
                <Text>{route.title}</Text>
              </TouchableOpacity>
              {focused && <View style={styles.indicator} />}
            </View>
          );
        }}
      />
    ),
    [styles],
  );

  const renderScene = useCallback(
    ({
      route,
    }: SceneRendererProps & {
      route: Route;
    }) => {
      switch (route.key) {
        case TabName.BUY:
          return <ListBuy />;

        case TabName.SELL:
          return (
            <View>
              <Text>Sell</Text>
            </View>
          );
      }
    },
    [],
  );

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

  const renderTopic = (role: RoleAccount) => {
    switch (role) {
      case RoleAccount.seller:
        return {
          option1: 'Dánh sách đơn hàng bạn đã bán',
          option2: 'Số tiền bạn đã bán được trong tháng 7: ',
        };

      case RoleAccount.supplier:
        return {
          option1: 'Dánh sách đơn hàng bạn đã bán',
          option2: 'Số tiền bạn đã bán được trong tháng 7: ',
        };

      default:
        return {
          option1: 'Danh sách đơn hàng bạn đã mua',
          option2: 'Số tiền bạn đã tiêu trong tháng 7: ',
        };
    }
  };

  return (
    <View style={styles.topic2}>
      <View style={{paddingHorizontal: scale(12)}}>
        <Text style={styles.topic}>
          {renderTopic(accountInfo?.role).option1}
        </Text>
        <Text>
          {renderTopic(accountInfo?.role).option2}
          <Text>{totalMoneyInMonth(7, 2024).currencyFormat()}</Text>
        </Text>
      </View>
      {accountInfo?.role !== RoleAccount.seller ? (
        <FlatList
          data={listOrdersWithRoleBuyer}
          keyExtractor={(item, index) => `${item.key}_${index}`}
          renderItem={renderItem}
          // eslint-disable-next-line react/no-unstable-nested-components
          ItemSeparatorComponent={() => <View style={{height: scale(8)}} />}
          contentContainerStyle={{paddingHorizontal: scale(12)}}
        />
      ) : (
        <TabView
          navigationState={{index, routes}}
          lazy
          swipeEnabled
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          initialLayout={{width: UnistylesRuntime.screen.width}}
        />
      )}
    </View>
  );
};

const styleSheet = createStyleSheet(({spacings, colors, textPresets}) => ({
  topic: {
    color: colors.Black,
    ...textPresets.Font20Reg,
    fontWeight: '600',
  },
  topic2: {
    flex: 1,
    rowGap: spacings[10],
  },
  tabBar: {backgroundColor: colors.White},
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    width: scale(130),
  },
  indicator: {
    width: '100%',
    backgroundColor: colors.Gold,
    height: scale(4),
    position: 'absolute',
    borderTopRadius: spacings[8],
    bottom: -spacings[16],
  },
}));
