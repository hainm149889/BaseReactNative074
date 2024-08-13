import {OrdersBySeller} from '@screens/profile/dummy';
import {createStyleSheet, useStyles} from '@theme';
import {ms} from '@theme/my-style';
import {AntIcon} from '@theme/vector-icons';
import {scale} from '@utils/scale';
import React, {useState} from 'react';
import {LayoutAnimation, Pressable, Text, View} from 'react-native';

type Props = {
  item: OrdersBySeller;
  index: number;
};

export const ItemBuy = ({item: OrderBySeller, index}: Props) => {
  const {
    styles,
    theme: {colors},
  } = useStyles(styleSheet);

  const [expanded, setExpanded] = useState(index === 0 ? true : false);

  const collapseContent = () => {
    setExpanded(!expanded);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View style={styles.itemOrder}>
      <View style={styles.info}>
        <Pressable style={ms.flex1} onPress={collapseContent}>
          <Text>{'Tên sp: ' + OrderBySeller.name}</Text>
          <View style={styles.detail}>
            <Text>{'Ngày mua: ' + OrderBySeller.dateBuy}</Text>
            <AntIcon
              name={expanded ? 'caretup' : 'caretdown'}
              size={12}
              color={colors.Black}
            />
          </View>
        </Pressable>
        <View>
          <Text>
            {'Số lượng: ' + OrderBySeller.numberBuy + ' ' + OrderBySeller.unit}
          </Text>
          <Text>
            {'Giá móc hàm: ' + OrderBySeller.priceBase.currencyFormat()}
          </Text>
        </View>
      </View>
      <View style={[styles.body(expanded)]}>
        <View style={ms.rowGap4}>
          <Text style={styles.infoSupplier}>
            {'Lò: ' + OrderBySeller.supplier}
          </Text>
          <Text style={{marginHorizontal: scale(8)}}>
            {'Số điện thoại chủ lò: ' + OrderBySeller.phoneSupplier}
          </Text>
          <Text style={{marginHorizontal: scale(8)}}>
            {'Địa chỉ lò: ' + OrderBySeller.addressSupplier}
          </Text>
          <View style={styles.viewSupplier}>
            <Text style={{marginHorizontal: scale(8)}}>
              {'Bấm vào để xem các mặt hàng hiện có của nhà cung cấp này: '}
            </Text>
            <Pressable style={styles.btnDetailSupplier}>
              <Text style={styles.txtDetail}>Chi tiết</Text>
            </Pressable>
          </View>
        </View>
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
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: spacings[8],
  },
  body: (expanded: boolean) => ({
    overflow: 'hidden',
    height: expanded ? 'auto' : 0,
    backgroundColor: colors.card,
    borderRadius: spacings[8],
  }),
  infoSupplier: {
    marginTop: spacings[8],
    marginHorizontal: spacings[8],
  },
  viewSupplier: {
    gap: spacings[8],
  },
  btnDetailSupplier: {
    padding: spacings[12],
    backgroundColor: colors.MediumVioletRed,
    borderRadius: spacings[8],
    overflow: 'hidden',
  },
  txtDetail: {
    color: colors.White,
    textAlign: 'center',
    ...textPresets.Font20Med,
  },
}));
